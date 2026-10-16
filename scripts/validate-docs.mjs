import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repositoryRoot = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules"]);
const errors = [];

const collectMarkdownFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(entryPath)));
    } else if (entry.name.endsWith(".md")) {
      files.push(entryPath);
    }
  }

  return files;
};

const localTarget = (rawTarget) => {
  const withoutTitle = rawTarget.trim().replace(/\s+["'][^"']*["']$/, "");
  const unwrapped = withoutTitle.replace(/^<|>$/g, "");
  const withoutFragment = unwrapped.split("#", 1)[0];

  if (
    !withoutFragment ||
    /^(?:https?:|mailto:|tel:)/i.test(withoutFragment)
  ) {
    return null;
  }

  return decodeURIComponent(withoutFragment);
};

const outsideRepository = (sourceFile, target) => {
  const relative = path.relative(
    repositoryRoot,
    path.resolve(path.dirname(sourceFile), target),
  );
  return relative === ".." || relative.startsWith(`..${path.sep}`);
};

const targetExists = async (sourceFile, target) => {
  const resolved = path.resolve(path.dirname(sourceFile), target);

  try {
    const targetStat = await stat(resolved);
    if (targetStat.isDirectory()) {
      await access(path.join(resolved, "README.md"));
    }
    return true;
  } catch {
    return false;
  }
};

const validateMarkdownFile = async (filePath) => {
  const content = await readFile(filePath, "utf8");
  const targets = [];

  for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    targets.push(match[1]);
  }

  for (const match of content.matchAll(/<img\s+[^>]*src="([^"]+)"/g)) {
    targets.push(match[1]);
  }

  const coverMatch = content.match(/^cover:\s*(.+)$/m);
  if (coverMatch) {
    targets.push(coverMatch[1].trim());
  }

  for (const rawTarget of targets) {
    const target = localTarget(rawTarget);
    // Links above the repository point into the local workspace (for example
    // the shared ../AGENTS.md), which a clone or CI checkout does not contain.
    if (target && outsideRepository(filePath, target)) {
      continue;
    }
    if (target && !(await targetExists(filePath, target))) {
      errors.push(
        `${path.relative(repositoryRoot, filePath)}: missing ${rawTarget}`,
      );
    }
  }
};

const validateRedirects = async () => {
  const configPath = path.join(repositoryRoot, ".gitbook.yaml");
  const config = await readFile(configPath, "utf8");

  for (const line of config.split("\n")) {
    const match = line.match(/^\s{2}[^#][^:]+:\s+(.+\.md)\s*$/);
    if (!match) {
      continue;
    }

    const redirectTarget = path.join(repositoryRoot, match[1]);
    try {
      await access(redirectTarget);
    } catch {
      errors.push(`.gitbook.yaml: missing redirect target ${match[1]}`);
    }
  }
};

const markdownFiles = await collectMarkdownFiles(repositoryRoot);
for (const markdownFile of markdownFiles) {
  await validateMarkdownFile(markdownFile);
}
await validateRedirects();

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${markdownFiles.length} Markdown files.`);
}

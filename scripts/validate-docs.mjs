import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repositoryRoot = process.cwd();
const errors = [];

const config = JSON.parse(
  await readFile(path.join(repositoryRoot, "docs.json"), "utf8"),
);

const ignored = (await readFile(path.join(repositoryRoot, ".mintignore"), "utf8"))
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));
const isIgnored = (relative) =>
  ignored.some((entry) =>
    entry.endsWith("/") ? relative.startsWith(entry) : relative === entry,
  );

const collectPages = async (directory) => {
  const pages = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") {
      continue;
    }
    const entryPath = path.join(directory, entry.name);
    const relative = path.relative(repositoryRoot, entryPath);
    if (isIgnored(entry.isDirectory() ? `${relative}/` : relative)) {
      continue;
    }
    if (entry.isDirectory()) {
      pages.push(...(await collectPages(entryPath)));
    } else if (/\.mdx?$/.test(entry.name)) {
      pages.push(relative.replace(/\.mdx?$/, ""));
    }
  }
  return pages;
};

const navigationPages = [];
const walkNavigation = (node) => {
  if (typeof node === "string") {
    navigationPages.push(node);
  } else if (Array.isArray(node)) {
    node.forEach(walkNavigation);
  } else if (node && typeof node === "object") {
    walkNavigation(node.pages);
  }
};
walkNavigation(config.navigation.groups);

const pages = new Set(await collectPages(repositoryRoot));
const pageUrl = (page) => (page === "index" ? "/" : `/${page}`);
const pageUrls = new Set([...pages].map(pageUrl));

for (const page of navigationPages) {
  if (!pages.has(page)) {
    errors.push(`docs.json: navigation lists missing page ${page}`);
  }
}
for (const page of pages) {
  if (!navigationPages.includes(page)) {
    errors.push(`${page}.mdx: not listed in docs.json navigation`);
  }
}

// Redirects keep old help center links working, so each must land on a page
// and must not hide one.
const redirectSources = new Set();
for (const { source, destination } of config.redirects ?? []) {
  redirectSources.add(source);
  if (pageUrls.has(source)) {
    errors.push(`docs.json: redirect from ${source} hides a page`);
  }
  if (!pageUrls.has(destination.split("#", 1)[0])) {
    errors.push(`docs.json: redirect ${source} goes to missing ${destination}`);
  }
}

const fileExists = async (urlPath) => {
  try {
    await access(path.join(repositoryRoot, decodeURIComponent(urlPath)));
    return true;
  } catch {
    return false;
  }
};

const assets = [config.favicon, config.logo?.light, config.logo?.dark].filter(
  Boolean,
);
for (const asset of assets) {
  if (!(await fileExists(asset))) {
    errors.push(`docs.json: missing ${asset}`);
  }
}

for (const page of pages) {
  const file = (await fileExists(`${page}.mdx`)) ? `${page}.mdx` : `${page}.md`;
  const content = await readFile(path.join(repositoryRoot, file), "utf8");
  const targets = [
    ...[...content.matchAll(/\]\(([^)\s]+)/g)].map((match) => match[1]),
    ...[...content.matchAll(/\b(?:src|href)="([^"]+)"/g)].map((match) => match[1]),
  ];

  if (!/^---\n[\s\S]*?^title:/m.test(content)) {
    errors.push(`${file}: missing title in front matter`);
  }
  // Mintlify rejects a page whose front matter value has an unquoted ": ".
  for (const [, key, value] of content.matchAll(/^(title|description): (.*)$/gm)) {
    if (!value.startsWith('"') && value.includes(": ")) {
      errors.push(`${file}: put the ${key} in double quotes; it contains ": "`);
    }
  }

  for (const target of targets) {
    if (/^(?:https?:|mailto:|tel:|#)/i.test(target)) {
      continue;
    }
    if (!target.startsWith("/")) {
      errors.push(`${file}: use a path from the site root for ${target}`);
      continue;
    }
    const withoutFragment = target.split("#", 1)[0];
    if (
      !pageUrls.has(withoutFragment) &&
      !redirectSources.has(withoutFragment) &&
      !(await fileExists(withoutFragment))
    ) {
      errors.push(`${file}: missing ${target}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Validated ${pages.size} pages and ${redirectSources.size} redirects.`,
  );
}

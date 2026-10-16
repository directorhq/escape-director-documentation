# Customer Guidance

This context defines the customer-facing language used to help escape room teams set up, operate, and improve their use of Escape Director.

## Language

### Escape-room operation

**Owner**:
The person who signs in to Escape Director, manages the account and its membership, and sets up Rooms. Write `owner` in lowercase in prose.
_Avoid_: Admin, customer, operator account

**Location**:
A site where an owner runs Rooms. Each Room belongs to one Location.
_Avoid_: Venue, site, branch, store

**Game Master**:
The person operating a live escape-room game from the Room Dashboard.
_Avoid_: Administrator, controller

**Game Master Profile**:
A name in the Room Dashboard's **Game Master** list, chosen for each Room Session. Game Masters don't sign in with their own accounts.
_Avoid_: Staff login, user account

**Room**:
A reusable escape-room experience containing its timing, Puzzles, Clues, player-facing presentation, and media.
_Avoid_: Game, room template

**Puzzle**:
A named challenge in a Room, with an optional answer, description, and ordered Clues.
_Avoid_: Task, level

**Clue Section**:
A Puzzle used only to group general Clues. It can't be marked complete and doesn't count toward Puzzle completion.
_Avoid_: Optional Puzzle, untracked Puzzle

**Clue**:
One hint in a Puzzle: text, an image, audio, or a video from the Room's Media library.
_Avoid_: Hint (as a product term)

**Automation**:
A Room's saved sequence of Actions that runs when its Trigger happens during a game, such as all Puzzles being completed or a prop sending a signal.
_Avoid_: Script, macro, event

**Room Dashboard**:
The Game Master workspace for controlling the timer, Clues, Puzzles, media, and player-facing presentation during a game.
_Avoid_: Admin dashboard, control panel

**Live View**:
The player-facing presentation of a running Room, including its timer, Clues, messages, configured media, and end screen.
_Avoid_: Display page, player dashboard

**Room Station**:
The one Windows or Mac computer, using Google Chrome or Microsoft Edge, that runs an escape-room game, including its Room Dashboard and Live View.
_Avoid_: Device fleet, multi-device room

**Room Connector**:
The app installed on a Room Station that lets Escape Director talk to the Room's props and controllers.
_Avoid_: MQTT broker, hub, hardware dashboard

**Device**:
A controller connected to a Room through Room Connector. A Device reports its props' state and signals and receives their commands.
_Avoid_: Hardware, node

**Room Session**:
A completed playthrough of a Room, including its result, timing, attendance, notes, and action history.
_Avoid_: Statistic, game record

### Customer guidance

**Product Guide**:
A canonical, task-focused customer page maintained in this repository and published through GitBook.
_Avoid_: Featurebase doc, user manual, knowledge-base copy

**In-App Help**:
Contextual guidance available from inside Escape Director, provided by a direct Product Guide link or a curated Featurebase copy.
_Avoid_: Live docs, embedded documentation

**Support Messenger**:
The Featurebase conversation surface used to contact support and, when useful, open curated In-App Help.
_Avoid_: Documentation, live chat docs

**Feedback Portal**:
The Featurebase surface for requests, roadmap information, and Product Updates.
_Avoid_: Support center, documentation portal

**Product Update**:
A customer-facing announcement about a meaningful release, improvement, fix, reliability change, or deprecation.
_Avoid_: Product Guide, release documentation

# Certification Study Hub

> A self-contained, browser-based study platform for professional certification exams.  
> No build tools. No server. No dependencies. Clone and open `index.html`.

---

## Certifications Covered

| Certification | Code | Parts | Topics | Status |
|---|---|---|---|---|
| Microsoft Azure AI Engineer Associate | AI-102 | 6 | 18 | Active ⚠️ retires Jun 30 2026 |
| ServiceNow Certified System Administrator | CSA · Zurich | 6 | 22 | Active |
| ServiceNow Certified Implementation Specialist – Data Foundations | CIS-DF | 8 | 43 | Active |

---

## Features

### Topic Study Pages
Each exam objective gets a dedicated page built for retention:
- **Real-world analogies** — relatable comparisons before going technical
- **SDK code examples** — language-specific snippets for every key service
- **Term cards** — scannable definitions for every service and concept
- **Decision trees** — when-to-use-what guidance
- **Exam Tips** — callout boxes flagging exactly what the exam tests
- **Common traps** — renamed services, deprecated packages, trick questions

### Flashcards
- **3D flip animation** — click or keyboard to reveal definition
- **Mobile swipe gestures** — right = Known, left = Need Review
- **Category filter pills** — narrow to a specific sub-topic
- **Self-rating** — mark each card as "Got It" or "Need Review"
- **Persistent ratings** — state saved to `localStorage` across sessions
- **Spaced repetition** — Leitner system scheduling; dashboard shows cards due today

### Practice Quizzes
- **Scenario-based questions** — written in real exam style
- **18 questions per part** — including 3 cross-topic questions at the end of each set
- **Shuffle on load** — questions randomise on each attempt
- **Instant feedback** — explanation shown immediately after each answer
- **Per-topic score breakdown** — end screen splits score by domain
- **Score history** — persisted per course in `localStorage`
- **Quiz hub** — `quizzes.html` top-level hub; accessible via sidebar "Practice Quizzes" tab

### Mock Exams (CIS-DF)
Full-length exam simulations in `mock-exams/`:
- **3 exams × 60 questions** — unique questions per exam, no repeats across exams
- **90-minute countdown timer** — amber at 15 min, red at 5 min, auto-submits at 0:00
- **70% pass mark** — PASS / FAIL verdict with SVG score circle
- **Answers hidden during exam** — revealed only after Submit (real exam behaviour)
- **Post-exam review** — per-domain score bars + full explanations for every question
- **Flag for review** — 🚩 button marks questions; dot navigator highlights flagged
- **Mix of single-select and multi-select** (~20% "Select TWO" questions)
- **Best score persistence** — top score per exam saved to `localStorage`

### Revision Center
Unified study session without page-hopping:
1. Pick a domain → pick a topic
2. Read the recap — bullet-point key facts with **TRAP** callouts
3. Run the flashcards — Known / Review rating with live progress stats
4. Completion screen — animated SVG score circle

### Dashboard
- **Exam countdown** — set exam date, see days remaining (persisted)
- **Progress rings** — per-part flashcard and quiz completion at a glance
- **Spaced repetition queue** — cards due today surfaced on load
- **Score history** — last quiz result per part shown inline

### Search
- Instant client-side search across all terms and definitions
- Works across all courses without leaving the page

### Progress Export / Import
- Download full progress as JSON (ratings, quiz scores, preferences)
- Import on another device to restore state

### UI
- **Dark glassmorphism default** — glass/blur card surfaces, CSS custom property token system
- **Light mode toggle** — full contrast-aware light mode; state persisted
- **Per-course accent colour** — AI-102 uses emerald, CSA uses violet
- **Responsive sidebar** — collapsible on desktop, hamburger drawer on mobile
- **Keyboard navigation** — arrow keys for flashcards, shortcuts for quiz

---

## Course Content

### AI-102: Azure AI Engineer Associate

> ⚠️ Retires **June 30, 2026**. Replacement exam: AI-305.

| Part | Domain | Topics |
|---|---|---|
| 1 | Plan & Manage an Azure AI Solution | Foundry services · Plan/Create/Deploy · Security · Monitoring · Responsible AI |
| 2 | Implement Generative AI Solutions | Foundry & RAG · Azure OpenAI · Optimize & Operationalize |
| 3 | Implement an Agentic Solution | Custom Agents |
| 4 | Implement Natural Language Processing | Analyze & Translate Text · Speech · Custom Language Models |
| 5 | Knowledge Mining & Information Extraction | Azure AI Search · Document Intelligence · Content Understanding |
| 6 | Computer Vision | Analyze Images · Custom Vision Models · Video Analysis |

**Reference:** [Microsoft Learn — AI-102](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/)

---

### ServiceNow CSA: Certified System Administrator (Zurich)

| Part | Domain | Topics |
|---|---|---|
| 1 | UI & Navigation | UI Navigation · Lists, Filters & Forms · Branding & Properties · Mobile & Portal |
| 2 | Users, Groups & Data | Users, Groups & Roles · Tables & Dictionary · Instance Security |
| 3 | Collaboration & Self-Service | Notifications & Templates · Reporting & Dashboards · Knowledge Management · Service Catalog |
| 4 | Database & Access Control | Data Schema & Imports · CMDB & Relationships · Access Control Rules · Auditing & Archiving |
| 5 | Migration & Integration | Update Sets · XML Migration · Integration Flows |
| 6 | Process Automation | UI Policies & Actions · Business Rules · Client Scripts · Flow Designer |

**Reference:** [ServiceNow Certified System Administrator](https://www.servicenow.com/services/training-and-certification/certified-system-administrator.html)

---

### ServiceNow CIS-DF: Certified Implementation Specialist – Data Foundations

| Part | Domain | Exam Weight | Topics |
|---|---|---|---|
| 1 | ServiceNow Data Model | 15% | Table Types · Field Types · Relationships · Schema Design |
| 2 | Import Sets, SGC & Ingestion | 10% | Import Sets · Transform Maps · Data Sources · Coalesce · SGC · Non-Discoverable CIs |
| 3 | Discovery & Service Mapping | 7% | Discovery Architecture · MID Server · Patterns & Probes · Service Mapping · ACC |
| 4 | IRE — Identity & Reconciliation Engine | 2% | IRE Architecture · Identification Rules · Reconciliation Rules · Deduplication |
| 5 | CMDB, CSDM & Service Modeling | 11% | CMDB Architecture · CI Relationships · Discovery & IRE · CMDB Health · CI Class Manager · CSDM |
| 6 | Governance & Data Quality | 35% ★ | Data Policies · Field Validation · Ref Qualifiers · Data Certification · CMDB Governance · Health KPIs |
| 7 | Reporting, Analytics & CMDB Workspace | 20% | Report Types · Database Views · Dashboards · Performance Analytics · CMDB Workspace · Foundation Dashboards |
| 8 | Integration & Advanced | — | REST API · IntegrationHub · Archiving & Retention · Instance Data Health |

**Reference:** [ServiceNow CIS-DF Certification](https://www.servicenow.com/services/training-and-certification/certified-implementation-specialist-data-foundations.html)

---

## Project Structure

```
Certification-Study-Hub/
├── index.html                        # Course selector portal
├── styles/
│   └── main.css                      # Shared design system (tokens, glassmorphism, light mode)
├── scripts/
│   ├── common.js                     # AI-102 sidebar, navigation, revision engine
│   ├── engine.js                     # Generic CourseEngine / FlashcardEngine / QuizEngine
│   └── study-data.js                 # Centralised flashcard metadata
│
├── ai-102/
│   ├── index.html                    # AI-102 dashboard
│   ├── config.js                     # AI-102 course config (sidebar tree, metadata)
│   ├── revision.html                 # AI-102 revision center
│   ├── part1-plan-manage/
│   │   ├── index.html                # Part dashboard
│   │   ├── flashcards.html           # Part flashcard deck
│   │   ├── quiz.html                 # Part quiz
│   │   └── topics/
│   │       ├── 01-foundry-services.html
│   │       ├── 02-plan-create-deploy.html
│   │       ├── 03-security.html
│   │       ├── 04-monitor.html
│   │       └── 05-responsible-ai.html
│   ├── part2-generative-ai/          # Same structure
│   ├── part3-agentic/                # Same structure
│   ├── part4-nlp/                    # Same structure
│   ├── part5-knowledge-mining/       # Same structure
│   └── part6-computer-vision/        # Same structure
│
├── servicenow-csa/
│   ├── index.html                    # CSA dashboard
│   ├── config.js                     # CSA course config (sidebar tree, metadata, theme)
│   ├── revision.html                 # CSA revision center
│   ├── flashcards.html               # CSA global flashcard deck
│   ├── scripts/
│   │   └── study-data.js             # CSA flashcard and quiz data
│   ├── part1-navigation/             # Same part structure as ai-102
│   ├── part2-configuration/
│   ├── part3-collaboration/
│   ├── part4-database-security/
│   ├── part5-migration-integration/
│   └── part6-process-automation/
│
└── servicenow-cis-df/
    ├── index.html                    # CIS-DF dashboard
    ├── config.js                     # CIS-DF course config
    ├── revision.html                 # CIS-DF revision center (flashcard hub)
    ├── quizzes.html                  # Practice quiz hub (links all 8 part quizzes)
    ├── scripts/
    │   └── study-data.js             # CIS-DF flashcard data (43 topics, 8 parts)
    ├── mock-exams/
    │   ├── index.html                # Mock exam hub (shows best scores)
    │   ├── exam1.html                # Exam 1 — GOVERN & Foundations (60 Q)
    │   ├── exam2.html                # Exam 2 — INGEST & IRE Deep Dive (60 Q)
    │   ├── exam3.html                # Exam 3 — Advanced & INSIGHT Focus (60 Q)
    │   ├── mock-engine.js            # Shared exam engine (timer, scoring, review)
    │   └── mock-exams.css            # Exam UI styles
    ├── part1-data-model/
    ├── part2-import-migration/
    ├── part3-discovery/
    ├── part4-ire/
    ├── part5-cmdb/
    ├── part6-governance/
    ├── part7-reporting-analytics/
    └── part8-integration-advanced/   # Each part: index.html · quiz.html · flashcards.html · topics/
```

---

## Usage

### Run locally

```bash
git clone https://github.com/jijo9434/Certification-Study-Hub.git
cd Certification-Study-Hub

# No server needed — open directly in browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Deploy to GitHub Pages

1. Push repo to GitHub
2. **Settings → Pages → Source:** `main` branch, root `/`
3. Live at `https://<username>.github.io/Certification-Study-Hub/`

---

## Architecture

### Engine pattern

`scripts/engine.js` provides three reusable classes consumed by every course:

| Class | Responsibility |
|---|---|
| `CourseEngine` | Sidebar rendering, progress tracking, theme, search |
| `FlashcardEngine` | Card flip, swipe, rating, spaced repetition, filter pills |
| `QuizEngine` | Question shuffle, exam / instant mode, scoring, history |

Each course wires the engine via a `config.js` that declares:
- Course name, accent colour, sidebar tree
- Paths to its parts, topics, flashcard decks, quizzes

`scripts/common.js` handles AI-102 sidebar and revision logic (legacy; CSA uses `engine.js` exclusively).

### Theme system

CSS custom properties in `styles/main.css` drive the entire visual system:

```
--accent-color       # primary brand colour (emerald for AI-102, violet for CSA)
--glass-bg           # card surface background
--text-primary       # body text
...
```

`body.theme-ai102` and `body.theme-csa` override the accent variables.  
`body.light-mode` flips all glass surfaces to high-contrast equivalents.  
`body.light-mode.theme-*` handles any course-specific light mode corrections.

### Adding a new course

1. **Create folder** `<cert-code>/` — copy `servicenow-cis-df/` structure, swap content
2. **`config.js`** — set course name, theme class, sidebar tree pointing at your parts/topics
3. **`study-data.js`** — populate flashcard and quiz data
4. **`styles/main.css`** — add `body.theme-<cert> { --accent-color: ...; }` (~5 lines)
5. **`index.html`** — add a `<div class="selector-card card-<cert>">` entry to the portal

Engine, sidebar, flashcards, quiz, and light mode all inherit automatically.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Markup | HTML5 | Zero build step |
| Styling | CSS3 custom properties | Token system, no preprocessor |
| Logic | Vanilla JS (ES6+) | No framework overhead |
| Animations | CSS transforms / transitions | Hardware-accelerated 3D flip |
| Persistence | `localStorage` | No backend needed |
| Fonts | System font stack | No external requests |

No npm. No bundler. No CDN calls at runtime.

---

## License

MIT — study freely, fork freely.

# Certification Study Hub

> A self-contained, browser-based study platform for professional certification exams. No build tools. No dependencies. Open `index.html` in any browser and start studying.

---

## Certifications Covered

| Certification | Exam | Domains | Topics | Status |
|---|---|---|---|---|
| Microsoft Azure AI Engineer Associate | AI-102 | 6 | 18 | Active (retires Jun 30 2026) |
| ServiceNow Certified System Administrator | CSA · Zurich | 6 | 22+ | Active |

---

## Features

### 📖 Topic Study Pages
Each exam objective gets a dedicated page structured for retention:
- **Real-world analogies** — concepts explained through relatable comparisons before going technical
- **Code examples** — SDK snippets alongside every key service
- **Term cards** — scannable definitions for every service and concept
- **Decision trees** — guidance for choosing between services
- **Exam Tips** — callout boxes flagging exactly what the exam tests
- **Common traps** — warnings for renamed services, legacy packages, and gotchas

### 🃏 Flashcards
- **3D flip animation** — click or swipe to reveal definition
- **Mobile swipe gestures** — swipe right = Known, swipe left = Need Review
- **Category filter pills** — narrow cards to a specific sub-topic
- **Self-rating** — mark each card as "Got It" or "Need Review"
- **Persistent ratings** — Known/Review state saved across sessions
- **Spaced repetition** — Leitner system scheduling; dashboard shows cards due today

### ✅ Practice Quizzes
- **Scenario-based questions** — written in the same style as real exam questions
- **Random order** — questions shuffle on each load and retake
- **Exam mode** — answer all questions first, then review all results at once
- **Instant answer reveal** (standard mode) — shows explanation immediately
- **Per-topic score breakdown** — end screen shows score split by topic
- **Persistent scores** — score history saved per course

### 🧠 Revision Center
A unified study session without page-hopping:
1. Pick a domain, pick a topic
2. Read the recap — bullet-point key facts with **TRAP** callouts
3. Run the flashcards — Known / Review rating with progress stats
4. See your score — animated SVG score circle on completion

### ⏱️ Exam Countdown
- Set your exam date; dashboard shows days remaining
- Persisted to `localStorage`

### 🔍 Search
- Instant client-side search across all terms and definitions
- Works across all courses without leaving the page

### 📤 Progress Export / Import
- Download progress as JSON for cross-device sync
- Import to restore your progress on another machine

### 🎨 Dark Glassmorphism UI
- Consistent dark theme with glass/blur effects
- CSS custom property design token system
- Responsive sidebar with mobile hamburger menu
- Dark / light mode toggle

---

## AI-102: Azure AI Engineer Associate

### Exam Domains Covered

| Part | Domain | Topics |
|---|---|---|
| 1 | Plan & Manage an Azure AI Solution | Foundry services, Plan/Create/Deploy, Security, Monitoring, Responsible AI |
| 2 | Implement Generative AI Solutions | Foundry & RAG, Azure OpenAI, Optimize & Operationalize |
| 3 | Implement an Agentic Solution | Custom Agents |
| 4 | Implement Natural Language Processing | Analyze & Translate Text, Speech, Custom Language Models |
| 5 | Knowledge Mining & Info Extraction | Azure AI Search, Document Intelligence, Content Understanding |
| 6 | Computer Vision | Analyze Images, Custom Vision Models, Video Analysis |

> **Note:** AI-102 retires **June 30, 2026**. The replacement exam is AI-305.

---

## ServiceNow CSA: Certified System Administrator

### Exam Domains Covered

| Domain | Topics |
|---|---|
| UI & Navigation | Instance navigation, lists, forms, filters |
| Instance Configuration | Branding, plugins, update sets |
| Flow Designer | Automation, subflows, actions |
| Database & Tables | Table schema, relationships, ACLs |
| Security | Roles, groups, access controls |
| Performance & Reporting | Dashboards, reports, metrics |

---

## Project Structure

```
Certification-Study-Hub/
├── index.html                    # Course selector portal
├── revision.html                 # AI-102 revision center
├── styles/
│   └── main.css                  # Shared design system (tokens, glassmorphism)
├── scripts/
│   ├── common.js                 # Shared navigation, sidebar, utilities
│   ├── engine.js                 # Generic course engine (CSA)
│   └── study-data.js             # Centralised flashcard and topic metadata
├── ai-102/
│   ├── index.html                # AI-102 dashboard
│   ├── config.js                 # AI-102 course root marker
│   ├── part1-plan-manage/
│   │   ├── index.html
│   │   ├── flashcards.html
│   │   ├── quiz.html
│   │   └── topics/
│   ├── part2-generative-ai/      # Same structure
│   ├── part3-agentic/            # Same structure
│   ├── part4-nlp/                # Same structure
│   ├── part5-knowledge-mining/   # Same structure
│   └── part6-computer-vision/    # Same structure
└── servicenow-csa/
    ├── index.html                # CSA dashboard
    ├── config.js                 # CSA course config
    └── topics/                   # CSA topic pages
```

---

## Usage

### Local

```bash
git clone https://github.com/jijo09/Certification-Study-Hub.git
cd Certification-Study-Hub

# Open in browser (no server needed)
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Site live at `https://jijo09.github.io/Certification-Study-Hub/`

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — zero external dependencies
- **CSS custom properties** — centralised design token system
- **CSS 3D transforms** — flashcard flip animations
- **localStorage** — all progress, ratings, and preferences persisted locally
- No frameworks, no build step, no npm

---

## Exam References

- **AI-102:** [Designing and Implementing a Microsoft Azure AI Solution](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/)
- **CSA:** [ServiceNow Certified System Administrator](https://www.servicenow.com/services/training-and-certification/certified-system-administrator.html)

---

## License

MIT — study freely, fork freely.

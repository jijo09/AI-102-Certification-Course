# AI-102 Study Hub

> A self-contained, browser-based study platform for the **Microsoft Azure AI Engineer Associate (AI-102)** certification exam.

No build tools. No dependencies. Open `index.html` in any browser and start studying.

---

## Overview

The AI-102 Study Hub is a static web app that organises all six exam domains into structured topic pages, interactive flashcards, and practice quizzes — all tied together through a central Revision Center with exam-day countdown.

---

## Features

| Feature | Description |
|---|---|
| **Topic Pages** | Structured notes for each exam objective, with key concepts and Azure service details |
| **Flashcards** | Flip-card UI with category filtering and progress tracking per topic |
| **Practice Quizzes** | Multi-choice questions with instant feedback, score tracking, and question navigator dots |
| **Revision Center** | Cross-part flashcard session — pick any part + topic without navigating away |
| **Exam Countdown** | Set your exam date; dashboard shows days remaining |
| **Dark Glassmorphism UI** | Consistent dark theme with blur/glass effects across all pages |

---

## Exam Domains Covered

| Part | Domain | Topics |
|---|---|---|
| 1 | Plan & Manage an Azure AI Solution | Azure AI Foundry services, Plan/Create/Deploy, Security & Auth, Monitoring, Responsible AI |
| 2 | Implement Generative AI Solutions | Foundry & RAG, Azure OpenAI, Optimize & Operationalize |
| 3 | Implement an Agentic Solution | Custom Agents |
| 4 | Implement Natural Language Processing | Analyze & Translate Text, Speech, Custom Language Models |
| 5 | Knowledge Mining & Info Extraction | Azure AI Search, Document Intelligence, Content Understanding |
| 6 | Computer Vision | Analyze Images, Custom Vision Models, Video Analysis |

---

## Project Structure

```
AI-102 Certification/
├── index.html                    # Dashboard (exam countdown, part overview)
├── revision.html                 # Central revision center (flashcards across all parts)
├── styles/
│   └── main.css                  # Shared design system (tokens, glassmorphism)
├── scripts/
│   ├── common.js                 # Shared navigation and utilities
│   └── study-data.js             # Centralised flashcard and topic metadata
├── part1-plan-manage/
│   ├── index.html                # Part overview page
│   ├── flashcards.html           # Part-specific flashcards
│   ├── quiz.html                 # Part-specific quiz
│   └── topics/
│       ├── 01-foundry-services.html
│       ├── 02-plan-create-deploy.html
│       ├── 03-security.html
│       ├── 04-monitor.html
│       └── 05-responsible-ai.html
├── part2-generative-ai/          # Same structure
├── part3-agentic/                # Same structure
├── part4-nlp/                    # Same structure
├── part5-knowledge-mining/       # Same structure
└── part6-computer-vision/        # Same structure
```

---

## Usage

### Local

```bash
# Clone the repo
git clone https://github.com/<your-username>/AI-102-Study-Hub.git
cd AI-102-Study-Hub

# Open in browser (no server needed)
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### GitHub Pages

1. Push to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Site live at `https://<your-username>.github.io/<repo-name>/`

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — zero external dependencies
- **CSS custom properties** — centralised design token system
- **CSS 3D transforms** — flashcard flip animations
- **localStorage** — exam date persistence
- No frameworks, no build step, no npm

---

## Exam Reference

- **Exam:** [AI-102: Designing and Implementing a Microsoft Azure AI Solution](https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/)
- **Format:** 40–60 questions, 120 minutes, passing score ~700/1000
- **Skills measured:** Plan & manage · Generative AI · Agentic solutions · NLP · Knowledge mining · Computer vision

---

## License

MIT — study freely, fork freely.

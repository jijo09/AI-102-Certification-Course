/* ============================================================
   AI-102 STUDY HUB — common.js
   Shared JavaScript engine for all 38 files
   Handles: Progress, Quiz, Flashcards, Sidebar, Copy, Try-It
   Storage: localStorage (no login needed, persists between sessions)
   ============================================================ */

'use strict';

/* ============================================================
   DYNAMIC THEME INITIALIZATION
   Runs immediately to prevent FOUC (Flash of Unstyled Content)
   ============================================================ */
(function() {
  const activeCourse = localStorage.getItem('active_course') || 'ai-102';
  if (activeCourse === 'servicenow-csa') {
    document.body.classList.add('theme-csa');
    document.body.classList.remove('theme-ai102');
  } else {
    document.body.classList.add('theme-ai102');
    document.body.classList.remove('theme-csa');
  }
})();

function _ai102Prefixes() {
  const tags = document.getElementsByTagName('script');
  let courseRoot = null, hubRoot = '';
  for (let i = 0; i < tags.length; i++) {
    const src = tags[i].getAttribute('src');
    if (!src) continue;
    if (src.endsWith('config.js')) courseRoot = src.replace('config.js', '');
    if (src.includes('common.js')) hubRoot = src.replace('scripts/common.js', '');
  }
  return { course: courseRoot !== null ? courseRoot : hubRoot, hub: hubRoot };
}

function switchCourse() {
  localStorage.removeItem('active_course');
  window.location.assign(_ai102Prefixes().hub + 'index.html');
}

/* ── Constants ────────────────────────────────────────────── */
const STORAGE_KEY   = 'ai102_progress';
const SETTINGS_KEY  = 'ai102_settings';
const EXAM_DATE_KEY = 'ai102_exam_date';

/* Master topic registry — every topic file in the project.
   topicId must match the filename (without .html).
   Used for progress tracking across the whole site.          */
const TOPIC_REGISTRY = [
  /* Part 1 — Plan & Manage */
  { id: 'p1-foundry-services',      part: 1, title: 'Select Foundry Services',        file: 'part1-plan-manage/topics/01-foundry-services.html' },
  { id: 'p1-plan-create-deploy',    part: 1, title: 'Plan, Create & Deploy',           file: 'part1-plan-manage/topics/02-plan-create-deploy.html' },
  { id: 'p1-security',              part: 1, title: 'Security & Authentication',       file: 'part1-plan-manage/topics/03-security.html' },
  { id: 'p1-monitor',               part: 1, title: 'Monitor & Manage',                file: 'part1-plan-manage/topics/04-monitor.html' },
  { id: 'p1-responsible-ai',        part: 1, title: 'Responsible AI',                  file: 'part1-plan-manage/topics/05-responsible-ai.html' },

  /* Part 2 — Generative AI */
  { id: 'p2-foundry-build',         part: 2, title: 'Build with Microsoft Foundry',    file: 'part2-generative-ai/topics/01-foundry-build.html' },
  { id: 'p2-azure-openai',          part: 2, title: 'Azure OpenAI in Foundry',         file: 'part2-generative-ai/topics/02-azure-openai.html' },
  { id: 'p2-optimize',              part: 2, title: 'Optimize & Operationalize',        file: 'part2-generative-ai/topics/03-optimize-operationalize.html' },

  /* Part 3 — Agentic */
  { id: 'p3-custom-agents',         part: 3, title: 'Create Custom Agents',            file: 'part3-agentic/topics/01-custom-agents.html' },

  /* Part 4 — NLP */
  { id: 'p4-analyze-text',          part: 4, title: 'Analyze & Translate Text',        file: 'part4-nlp/topics/01-analyze-translate-text.html' },
  { id: 'p4-speech',                part: 4, title: 'Process & Translate Speech',      file: 'part4-nlp/topics/02-speech.html' },
  { id: 'p4-custom-language',       part: 4, title: 'Custom Language Models',          file: 'part4-nlp/topics/03-custom-language-models.html' },

  /* Part 5 — Knowledge Mining */
  { id: 'p5-ai-search',             part: 5, title: 'Azure AI Search',                 file: 'part5-knowledge-mining/topics/01-ai-search.html' },
  { id: 'p5-document-intelligence', part: 5, title: 'Document Intelligence',           file: 'part5-knowledge-mining/topics/02-document-intelligence.html' },
  { id: 'p5-content-understanding', part: 5, title: 'Content Understanding',           file: 'part5-knowledge-mining/topics/03-content-understanding.html' },

  /* Part 6 — Computer Vision */
  { id: 'p6-analyze-images',        part: 6, title: 'Analyze Images',                  file: 'part6-computer-vision/topics/01-analyze-images.html' },
  { id: 'p6-custom-vision',         part: 6, title: 'Custom Vision Models',            file: 'part6-computer-vision/topics/02-custom-vision-models.html' },
  { id: 'p6-video-analysis',        part: 6, title: 'Video Analysis',                  file: 'part6-computer-vision/topics/03-video-analysis.html' },
];

const PARTS_META = {
  1: { title: 'Plan & Manage Azure AI',        weight: '20–25%', color: 'var(--part1-color)', icon: '⚙️',  topicIds: ['p1-foundry-services','p1-plan-create-deploy','p1-security','p1-monitor','p1-responsible-ai'] },
  2: { title: 'Implement Generative AI',        weight: '15–20%', color: 'var(--part2-color)', icon: '🤖',  topicIds: ['p2-foundry-build','p2-azure-openai','p2-optimize'] },
  3: { title: 'Implement an Agentic Solution',  weight: '5–10%',  color: 'var(--part3-color)', icon: '🕵️',  topicIds: ['p3-custom-agents'] },
  4: { title: 'Natural Language Processing',    weight: '15–20%', color: 'var(--part4-color)', icon: '💬',  topicIds: ['p4-analyze-text','p4-speech','p4-custom-language'] },
  5: { title: 'Knowledge Mining',               weight: '15–20%', color: 'var(--part5-color)', icon: '🔍',  topicIds: ['p5-ai-search','p5-document-intelligence','p5-content-understanding'] },
  6: { title: 'Computer Vision',                weight: '10–15%', color: 'var(--part6-color)', icon: '👁️',  topicIds: ['p6-analyze-images','p6-custom-vision','p6-video-analysis'] },
};

const PART_INDEX_FILES = {
  1: 'part1-plan-manage/index.html',
  2: 'part2-generative-ai/index.html',
  3: 'part3-agentic/index.html',
  4: 'part4-nlp/index.html',
  5: 'part5-knowledge-mining/index.html',
  6: 'part6-computer-vision/index.html',
};

/* ============================================================
   SECTION 1 — PROGRESS MANAGER
   Saves/loads topic completion state in localStorage
   ============================================================ */
const ProgressManager = (() => {

  function _load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function _save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('AI-102: Could not save progress:', e);
    }
  }

  /** Mark a topic as complete or incomplete */
  function setComplete(topicId, complete = true) {
    const data = _load();
    data[topicId] = { complete, timestamp: Date.now() };
    _save(data);
    _dispatchUpdate();
  }

  /** Toggle completion state of a topic */
  function toggle(topicId) {
    const data = _load();
    const current = data[topicId]?.complete || false;
    setComplete(topicId, !current);
    return !current;
  }

  /** Check if a topic is complete */
  function isComplete(topicId) {
    return _load()[topicId]?.complete === true;
  }

  /** Get count of completed topics in a part */
  function getPartProgress(partNum) {
    const data  = _load();
    const ids   = PARTS_META[partNum]?.topicIds || [];
    const done  = ids.filter(id => data[id]?.complete).length;
    return { done, total: ids.length, pct: ids.length ? Math.round((done / ids.length) * 100) : 0 };
  }

  /** Get overall site-wide progress */
  function getOverallProgress() {
    const data  = _load();
    const total = TOPIC_REGISTRY.length;
    const done  = TOPIC_REGISTRY.filter(t => data[t.id]?.complete).length;
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  /** Reset all progress (with confirmation) */
  function reset() {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      _dispatchUpdate();
      return true;
    }
    return false;
  }

  function _dispatchUpdate() {
    document.dispatchEvent(new CustomEvent('progressUpdated'));
  }

  return { setComplete, toggle, isComplete, getPartProgress, getOverallProgress, reset };
})();

/* ============================================================
   SECTION 2 — EXAM DATE COUNTDOWN
   ============================================================ */
const ExamCountdown = (() => {

  function getDate() {
    const stored = localStorage.getItem(EXAM_DATE_KEY);
    return stored ? new Date(stored) : null;
  }

  function setDate(dateString) {
    localStorage.setItem(EXAM_DATE_KEY, dateString);
    _renderAll();
  }

  function getDaysRemaining() {
    const d = getDate();
    if (!d) return null;
    const diff = d - new Date();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  /** Render all [data-countdown] elements on the page */
  function _renderAll() {
    const days = getDaysRemaining();
    document.querySelectorAll('[data-countdown]').forEach(el => {
      if (days === null) {
        el.textContent = '—';
      } else if (days === 0) {
        el.textContent = 'Today! 🎯';
      } else {
        el.textContent = `${days} day${days !== 1 ? 's' : ''}`;
      }
    });
  }

  function init() {
    _renderAll();
    // Re-render every minute
    setInterval(_renderAll, 60000);
    // Set date input if present
    const input = document.getElementById('exam-date-input');
    if (input) {
      const stored = getDate();
      if (stored) input.value = stored.toISOString().split('T')[0];
      input.addEventListener('change', e => setDate(e.target.value));
    }
  }

  return { init, setDate, getDaysRemaining, getDate };
})();

/* ============================================================
   SECTION 3 — QUIZ ENGINE
   Reads questions from a [data-quiz] element on the page.

   HTML contract:
   <div data-quiz="TOPIC_ID">
     <div data-question>
       <p data-q-text>Question text here?</p>
       <p data-scenario>Optional scenario block</p>      <!-- optional -->
       <div data-options>
         <button data-option="A">Option text</button>
         <button data-option="B">Option text</button>
         <button data-option="C">Option text</button>
         <button data-option="D">Option text</button>
       </div>
       <p data-correct="B">Explanation text here.</p>    <!-- data-correct = right answer letter -->
     </div>
     ... more questions ...
   </div>
   ============================================================ */
const QuizEngine = (() => {

  let _state = {};

  function _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function init(containerId) {
    const container = document.getElementById(containerId) || document.querySelector('[data-quiz]');
    if (!container) return;

    const rawQs = Array.from(container.querySelectorAll('[data-question]'));
    if (!rawQs.length) return;

    // Shuffle questions each session for varied practice
    const parent = rawQs[0].parentNode;
    const questions = _shuffle(rawQs);
    questions.forEach(q => parent.appendChild(q));

    const topicId = container.dataset.quiz;

    _state[containerId] = {
      questions,
      topicId,
      current: 0,
      score: 0,
      answered: new Array(questions.length).fill(null),
      container,
    };

    _render(containerId);
  }

  function _render(cid) {
    const s = _state[cid];
    if (!s) return;

    // Hide all questions, show current
    s.questions.forEach((q, i) => {
      q.style.display = i === s.current ? 'block' : 'none';
    });

    // Update counter
    const counter = s.container.querySelector('[data-q-counter]');
    if (counter) counter.textContent = `${s.current + 1} / ${s.questions.length}`;

    // Update progress fill
    const fill = s.container.querySelector('[data-q-progress]');
    if (fill) fill.style.width = `${((s.current + 1) / s.questions.length) * 100}%`;

    // Mark already-answered question
    const alreadyAnswered = s.answered[s.current];
    if (alreadyAnswered) {
      _showAnswer(cid, s.questions[s.current], alreadyAnswered);
    } else {
      // Reset option states for unanswered
      s.questions[s.current].querySelectorAll('[data-option]').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
      });
      const exp = s.questions[s.current].querySelector('[data-correct]');
      if (exp) exp.closest('.quiz-explanation')?.classList.remove('show');
    }

    // Nav buttons
    const prevBtn = s.container.querySelector('[data-q-prev]');
    const nextBtn = s.container.querySelector('[data-q-next]');
    const submitBtn = s.container.querySelector('[data-q-submit]');

    if (prevBtn) prevBtn.disabled = s.current === 0;
    if (nextBtn) {
      nextBtn.style.display = s.current < s.questions.length - 1 ? 'inline-flex' : 'none';
    }
    if (submitBtn) {
      submitBtn.style.display = s.current === s.questions.length - 1 ? 'inline-flex' : 'none';
    }
  }

  function _showAnswer(cid, questionEl, chosenLetter) {
    const s = _state[cid];
    const correctEl = questionEl.querySelector('[data-correct]');
    if (!correctEl) return;

    const correctLetter = correctEl.dataset.correct;

    questionEl.querySelectorAll('[data-option]').forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.option === correctLetter) btn.classList.add('correct');
      if (btn.dataset.option === chosenLetter && chosenLetter !== correctLetter) btn.classList.add('incorrect');
    });

    // Show explanation
    const expBox = questionEl.querySelector('.quiz-explanation');
    if (expBox) expBox.classList.add('show');

    // Update score display
    const scoreEl = s.container.querySelector('[data-q-score]');
    if (scoreEl) scoreEl.textContent = `Score: ${s.score} / ${s.questions.length}`;
  }

  function answer(cid, questionIndex, chosenLetter) {
    const s = _state[cid];
    if (!s || s.answered[questionIndex] !== null) return; // already answered

    const questionEl = s.questions[questionIndex];
    const correctEl  = questionEl.querySelector('[data-correct]');
    if (!correctEl) return;

    const correctLetter = correctEl.dataset.correct;
    s.answered[questionIndex] = chosenLetter;

    if (chosenLetter === correctLetter) s.score++;

    _showAnswer(cid, questionEl, chosenLetter);
    _render(cid);
  }

  function next(cid) {
    const s = _state[cid];
    if (!s || s.current >= s.questions.length - 1) return;
    s.current++;
    _render(cid);
  }

  function prev(cid) {
    const s = _state[cid];
    if (!s || s.current <= 0) return;
    s.current--;
    _render(cid);
  }

  function finish(cid) {
    const s = _state[cid];
    if (!s) return;

    const resultEl = s.container.querySelector('[data-quiz-result]');
    const bodyEl   = s.container.querySelector('[data-quiz-body]');
    const footerEl = s.container.querySelector('[data-quiz-footer]');

    if (!resultEl) return;

    const pct = Math.round((s.score / s.questions.length) * 100);

    // Persist score history
    let lastNote = '';
    try {
      const scoreKey = `ai102_quiz_${s.topicId}`;
      const history = JSON.parse(localStorage.getItem(scoreKey) || '[]');
      if (history.length >= 1) {
        const prev = history[history.length - 1];
        const diff = pct - prev.pct;
        const col = diff >= 0 ? 'var(--green-400)' : 'var(--red-400)';
        lastNote = `<p style="color:var(--text-muted);font-size:0.8rem;margin-bottom:var(--space-4)">Last attempt: ${prev.pct}% &nbsp;<span style="color:${col}">${diff >= 0 ? '↑' : '↓'}${Math.abs(diff)}pp</span></p>`;
      }
      history.push({ pct, score: s.score, total: s.questions.length, ts: Date.now() });
      if (history.length > 10) history.shift();
      localStorage.setItem(scoreKey, JSON.stringify(history));
    } catch {}

    let emoji = '😰', message = 'Keep studying — you\'ve got this!';
    if (pct >= 90) { emoji = '🏆'; message = 'Outstanding! Exam-ready!'; }
    else if (pct >= 75) { emoji = '✅'; message = 'Great work! Review the misses.'; }
    else if (pct >= 60) { emoji = '📚'; message = 'Getting there — a bit more study needed.'; }

    resultEl.innerHTML = `
      <div class="quiz-result animate-scale-in">
        <div style="font-size:3rem;margin-bottom:var(--space-4)">${emoji}</div>
        <div class="quiz-result-score">${pct}%</div>
        <p style="color:var(--text-secondary);margin-bottom:var(--space-2)">${s.score} of ${s.questions.length} correct</p>
        <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:var(--space-4)">${message}</p>
        ${lastNote}
        <div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-secondary" onclick="QuizEngine.restart('${cid}')">🔄 Retry Quiz</button>
          <button class="btn btn-primary" onclick="QuizEngine.review('${cid}')">📖 Review Answers</button>
        </div>
      </div>`;

    if (bodyEl)   bodyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
    resultEl.style.display = 'block';
  }

  function restart(cid) {
    const s = _state[cid];
    if (!s) return;
    // Re-shuffle on retry
    const parent = s.questions[0].parentNode;
    s.questions = _shuffle(s.questions);
    s.questions.forEach(q => parent.appendChild(q));
    s.current = 0;
    s.score   = 0;
    s.answered = new Array(s.questions.length).fill(null);

    const resultEl = s.container.querySelector('[data-quiz-result]');
    const bodyEl   = s.container.querySelector('[data-quiz-body]');
    const footerEl = s.container.querySelector('[data-quiz-footer]');

    if (resultEl) resultEl.style.display = 'none';
    if (bodyEl)   bodyEl.style.display = 'block';
    if (footerEl) footerEl.style.display = 'flex';

    // Reset all options
    s.questions.forEach(q => {
      q.querySelectorAll('[data-option]').forEach(btn => {
        btn.classList.remove('selected','correct','incorrect');
        btn.disabled = false;
      });
      const expBox = q.querySelector('.quiz-explanation');
      if (expBox) expBox.classList.remove('show');
    });
    _render(cid);
  }

  function review(cid) {
    const s = _state[cid];
    if (!s) return;

    const resultEl = s.container.querySelector('[data-quiz-result]');
    const bodyEl   = s.container.querySelector('[data-quiz-body]');
    const footerEl = s.container.querySelector('[data-quiz-footer]');

    if (resultEl) resultEl.style.display = 'none';
    if (bodyEl)   bodyEl.style.display = 'block';
    if (footerEl) footerEl.style.display = 'flex';

    s.current = 0;
    _render(cid);
  }

  /** Auto-wire all [data-option] buttons in a quiz container */
  function wireOptions(cid) {
    const s = _state[cid];
    if (!s) return;

    s.questions.forEach((q, qi) => {
      q.querySelectorAll('[data-option]').forEach(btn => {
        // Remove any existing listener by cloning (prevents double-wiring on re-init)
        const fresh = btn.cloneNode(true);
        btn.parentNode.replaceChild(fresh, btn);
        fresh.addEventListener('click', () => {
          if (!fresh.disabled) {
            answer(cid, qi, fresh.dataset.option);
          }
        });
      });
    });

    const prevBtn = s.container.querySelector('[data-q-prev]');
    const nextBtn = s.container.querySelector('[data-q-next]');
    const submitBtn = s.container.querySelector('[data-q-submit]');

    if (prevBtn)   prevBtn.addEventListener('click', () => prev(cid));
    if (nextBtn)   nextBtn.addEventListener('click', () => next(cid));
    if (submitBtn) submitBtn.addEventListener('click', () => finish(cid));
  }

  return { init, wireOptions, answer, next, prev, finish, restart, review };
})();

/* ============================================================
   SECTION 4 — FLASHCARD ENGINE
   Reads terms from [data-flashcard-deck] on the page.

   HTML contract:
   <div data-flashcard-deck="DECK_ID">
     <div data-card data-term="Term Name" data-def="Definition text"></div>
     ...
   </div>
   ============================================================ */
const FlashcardEngine = (() => {

  let _decks = {};

  function init(deckId) {
    const container = document.getElementById(deckId) || document.querySelector(`[data-flashcard-deck="${deckId}"]`);
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('[data-card]'));
    if (!cards.length) return;

    _decks[deckId] = {
      cards: _shuffle(cards.map(c => ({ term: c.dataset.term, def: c.dataset.def }))),
      current: 0,
      flipped: false,
      container,
    };

    _render(deckId);
    _wireControls(deckId);
  }

  function _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function _render(deckId) {
    const d = _decks[deckId];
    if (!d) return;

    const card = d.cards[d.current];

    const termEl = d.container.querySelector('[data-fc-term]');
    const defEl  = d.container.querySelector('[data-fc-def]');
    const cntEl  = d.container.querySelector('[data-fc-counter]');
    const fcEl   = d.container.querySelector('.flashcard');

    if (termEl) termEl.textContent = card.term;
    if (defEl)  defEl.textContent  = card.def;
    if (cntEl)  cntEl.textContent  = `${d.current + 1} / ${d.cards.length}`;

    // Reset flip state on navigation
    if (fcEl && d.flipped) {
      d.flipped = false;
      fcEl.classList.remove('flipped');
    }
  }

  function _wireControls(deckId) {
    const d = _decks[deckId];
    if (!d) return;

    // Flip on card click
    const fcEl = d.container.querySelector('.flashcard');
    if (fcEl) {
      fcEl.addEventListener('click', () => flip(deckId));
    }

    // Navigation buttons
    const prevBtn = d.container.querySelector('[data-fc-prev]');
    const nextBtn = d.container.querySelector('[data-fc-next]');
    const shuffleBtn = d.container.querySelector('[data-fc-shuffle]');

    if (prevBtn)   prevBtn.addEventListener('click', () => prev(deckId));
    if (nextBtn)   nextBtn.addEventListener('click', () => next(deckId));
    if (shuffleBtn) shuffleBtn.addEventListener('click', () => shuffle(deckId));

    // Keyboard navigation (only when user is not typing in an input/textarea)
    document.addEventListener('keydown', e => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      const deckEl = document.querySelector(`[data-flashcard-deck="${deckId}"]`);
      if (!deckEl) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); next(deckId); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(deckId); }
      if (e.key === ' ')          { e.preventDefault(); flip(deckId); }
    });
  }

  function flip(deckId) {
    const d = _decks[deckId];
    if (!d) return;
    const fcEl = d.container.querySelector('.flashcard');
    if (!fcEl) return;
    d.flipped = !d.flipped;
    fcEl.classList.toggle('flipped', d.flipped);
  }

  function next(deckId) {
    const d = _decks[deckId];
    if (!d) return;
    d.current = (d.current + 1) % d.cards.length;
    d.flipped = false;
    _render(deckId);
  }

  function prev(deckId) {
    const d = _decks[deckId];
    if (!d) return;
    d.current = (d.current - 1 + d.cards.length) % d.cards.length;
    d.flipped = false;
    _render(deckId);
  }

  function shuffle(deckId) {
    const d = _decks[deckId];
    if (!d) return;
    d.cards   = _shuffle(d.cards);
    d.current = 0;
    d.flipped = false;
    _render(deckId);
    // Visual feedback
    const btn = d.container.querySelector('[data-fc-shuffle]');
    if (btn) {
      btn.textContent = '✓ Shuffled!';
      setTimeout(() => { btn.textContent = '🔀 Shuffle'; }, 1200);
    }
  }

  return { init, flip, next, prev, shuffle };
})();

/* ============================================================
   SECTION 5 — CODE COPY BUTTONS
   Adds copy-to-clipboard functionality to all <pre> blocks
   ============================================================ */
function initCopyButtons() {
  document.querySelectorAll('pre').forEach(pre => {
    // Don't add twice
    if (pre.querySelector('.copy-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = code;
        ta.style.position = 'fixed';
        ta.style.opacity  = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = '✓ Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      }
    });

    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
}

/* ============================================================
   SECTION 6 — SIDEBAR MANAGER
   Handles: active item highlight, mobile toggle,
   progress indicators per part
   ============================================================ */
const SidebarManager = (() => {
  const DESKTOP_BREAKPOINT = window.matchMedia('(max-width: 900px)');
  const COLLAPSED_KEY = 'sidebarCollapsed';

  function init() {
    _prepareDesktopSidebarUI();
    _applySavedDesktopState();
    _highlightActive();
    _initMobileToggle();
    _initSidebarGroups();
    _renderProgressDots();
    _initAccordions();

    // Update sidebar dots and group state when progress changes
    document.addEventListener('progressUpdated', _renderProgressDots);
  }

  function _highlightActive() {
    // Clear any hardcoded active states from page templates first.
    document.querySelectorAll('.sidebar-item.active').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.sidebar-group.open').forEach(group => group.classList.remove('open'));

    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentSegments = currentPath.split('/').filter(Boolean);
    const currentFile = currentSegments[currentSegments.length - 1] || 'index.html';
    
    // Auto-detect the current part from the URL (e.g. /part1-plan-manage/)
    const partMatch = currentPath.match(/part(\d+)-/);
    if (partMatch) {
      const activePartNum = partMatch[1];
      const activeGroup = document.querySelector(`.sidebar-group[data-part-group="${activePartNum}"]`);
      if (activeGroup) activeGroup.classList.add('open');
    }

    document.querySelectorAll('.sidebar-item[href]').forEach(item => {
      const rawHref = item.getAttribute('href') || '';
      if (!rawHref || rawHref.startsWith('#')) return;

      // Resolve to an absolute pathname so "index.html" pages in different
      // folders do not all match each other by filename only.
      const resolvedPath = decodeURIComponent(
        new URL(rawHref, window.location.href).pathname.replace(/\\/g, '/')
      );
      const resolvedSegments = resolvedPath.split('/').filter(Boolean);
      const resolvedFile = resolvedSegments[resolvedSegments.length - 1] || '';

      const isSamePath = resolvedPath.toLowerCase() === currentPath.toLowerCase();
      const isInPartFolder = /part\d+-/.test(currentPath);
      const isDashboardMatch = currentFile === 'index.html' &&
        resolvedFile === 'index.html' &&
        !isInPartFolder;

      if (isSamePath || isDashboardMatch) {
        item.classList.add('active');
        // Open parent sidebar group
        const group = item.closest('.sidebar-group');
        if (group) group.classList.add('open');
      }
    });
  }

  function _prepareDesktopSidebarUI() {
    const sidebar = document.querySelector('.sidebar');
    const logo = document.querySelector('.sidebar-logo');
    const topbar = document.querySelector('.topbar');
    if (!sidebar || !logo) return;

    document.querySelectorAll('.sidebar-item').forEach(item => {
      const label = item.textContent.trim().replace(/\s+/g, ' ');
      if (label) {
        item.dataset.shortLabel = _buildShortLabel(label);
        item.title = label;
      }
      if ((item.getAttribute('href') || '').trim() === '#') {
        item.classList.add('sidebar-utility');
      }
    });

    document.querySelectorAll('.sidebar-group').forEach(group => {
      const header = group.querySelector('.sidebar-group-header');
      if (!header) return;
      const partNum = group.dataset.partGroup || '';
      header.dataset.shortLabel = `P${partNum}`;
      header.title = header.textContent.trim().replace(/\s+/g, ' ');
      if (PART_INDEX_FILES[partNum]) {
        header.dataset.partIndex = _resolveRelativePath(PART_INDEX_FILES[partNum]);
      }
    });

    if (topbar && !topbar.querySelector('.sidebar-desktop-toggle')) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sidebar-desktop-toggle';
      btn.setAttribute('aria-label', 'Collapse sidebar');
      btn.title = 'Collapse sidebar';
      btn.addEventListener('click', _toggleDesktopSidebar);
      topbar.insertBefore(btn, topbar.firstChild);
    }

    DESKTOP_BREAKPOINT.addEventListener('change', () => {
      const sidebarEl = document.querySelector('.sidebar');
      const overlay = document.getElementById('sidebar-overlay') || document.getElementById('sbo');
      if (!DESKTOP_BREAKPOINT.matches && sidebarEl) {
        sidebarEl.classList.remove('open');
        overlay?.classList.remove('show');
      }
      _applySavedDesktopState();
    });
  }

  function _buildShortLabel(label) {
    const normalized = label.toLowerCase();
    const specialMap = {
      'dashboard': '⌂',
      'set exam date': '◷',
      'reset progress': '↺',
      'flashcards': '🃏',
      'part quiz': '?',
    };
    if (specialMap[normalized]) return specialMap[normalized];
    if (normalized === 'dashboard') return 'DB';
    if (normalized === 'settings') return 'ST';

    const words = label
      .replace(/&/g, ' ')
      .replace(/[^\w\s]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (!words.length) return '•';
    if (/^\d+$/.test(words[0])) return words[0];
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }

  function _loadSettings() {
    try {
      return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function _saveSettings(next) {
    try {
      const current = _loadSettings();
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...current, ...next }));
    } catch (e) {
      console.warn('AI-102: Could not save settings:', e);
    }
  }

  function _applySavedDesktopState() {
    const collapsed = Boolean(_loadSettings()[COLLAPSED_KEY]);
    document.body.classList.toggle('sidebar-collapsed', !DESKTOP_BREAKPOINT.matches && collapsed);
    const toggle = document.querySelector('.sidebar-desktop-toggle');
    if (toggle) {
      const label = collapsed ? 'Expand sidebar' : 'Collapse sidebar';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }
  }

  function _toggleDesktopSidebar() {
    if (DESKTOP_BREAKPOINT.matches) return;
    const next = !document.body.classList.contains('sidebar-collapsed');
    _saveSettings({ [COLLAPSED_KEY]: next });
    document.body.classList.toggle('sidebar-collapsed', next);
    const toggle = document.querySelector('.sidebar-desktop-toggle');
    if (toggle) {
      const label = next ? 'Expand sidebar' : 'Collapse sidebar';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }
  }

  function _resolveRelativePath(targetPath) {
    return _ai102Prefixes().course + targetPath;
  }

  function _initMobileToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay =
      document.getElementById('sidebar-overlay') ||
      document.getElementById('sbo');

    if (!toggle || !sidebar) return;

    // Some pages still use inline onclick handlers for the mobile menu.
    // Avoid binding a second click handler here, which would toggle twice
    // and make the sidebar feel inconsistent between pages.
    if (!toggle.hasAttribute('onclick')) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('show');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
      });
    }

    document.querySelectorAll('.sidebar-item[href]').forEach(item => {
      item.addEventListener('click', () => {
        if (DESKTOP_BREAKPOINT.matches && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
          overlay?.classList.remove('show');
        }
      });
    });
  }

  function _initSidebarGroups() {
    document.querySelectorAll('[data-group-toggle]').forEach(btn => {
      btn.addEventListener('click', (event) => {
        const group = btn.closest('.sidebar-group');
        if (!group) return;

        if (document.body.classList.contains('sidebar-collapsed')) {
          event.preventDefault();
          event.stopPropagation();

          const partNum = group.dataset.partGroup || '';
          const fallback = PART_INDEX_FILES[partNum] ? _resolveRelativePath(PART_INDEX_FILES[partNum]) : '';
          const partIndex = btn.dataset.partIndex || fallback;
          if (partIndex) window.location.assign(partIndex);
          return;
        }
        group.classList.toggle('open');
      });
    });
  }

  function _renderProgressDots() {
    // Update part progress badges and group complete state
    document.querySelectorAll('[data-part-progress]').forEach(el => {
      const part = parseInt(el.dataset.partProgress);
      const prog = ProgressManager.getPartProgress(part);
      el.textContent = `${prog.done}/${prog.total}`;
      if (prog.pct === 100)    el.style.color = 'var(--green-400)';
      else if (prog.pct > 0)  el.style.color = 'var(--blue-300)';
      else                     el.style.color = '';
    });

    // Mark sidebar groups as fully complete
    document.querySelectorAll('[data-part-group]').forEach(groupEl => {
      const part = parseInt(groupEl.dataset.partGroup);
      const prog = ProgressManager.getPartProgress(part);
      groupEl.classList.toggle('all-done', prog.pct === 100);
    });

    // Update per-topic completion dots
    document.querySelectorAll('[data-topic-check]').forEach(dot => {
      dot.classList.toggle('done', ProgressManager.isComplete(dot.dataset.topicCheck));
    });

    // Overall progress in sidebar footer
    const overallEl = document.getElementById('sidebar-overall-progress');
    if (overallEl) {
      const ov = ProgressManager.getOverallProgress();
      const pctEl = overallEl.querySelector('[data-overall-pct]');
      if (pctEl) pctEl.textContent = `${ov.pct}%`;
      const fill = overallEl.querySelector('.progress-fill');
      if (fill) fill.style.width = `${ov.pct}%`;
    }
  }

  function _initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        if (!item) return;
        const isOpen = item.classList.contains('open');
        // Close all siblings
        item.closest('.accordion')?.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  return { init };
})();

/* ============================================================
   SECTION 7 — COMPLETION CHECKBOX
   Wires the "Mark as Complete" checkbox on every topic page
   ============================================================ */
function initCompletionCheckbox() {
  const checkbox = document.querySelector('[data-complete-toggle]');
  if (!checkbox) return;

  const topicId = checkbox.dataset.completeToggle;
  if (!topicId) return;

  const label = document.querySelector('[data-complete-label]');

  function _syncUI(isComplete) {
    checkbox.classList.toggle('checked', isComplete);
    const icon = checkbox.querySelector('.check-icon');
    if (icon) icon.style.display = isComplete ? 'block' : 'none';
    if (label) {
      label.classList.toggle('checked', isComplete);
      label.textContent = isComplete ? '✅ Topic completed!' : 'Mark this topic as complete';
    }
  }

  // Sync on load
  _syncUI(ProgressManager.isComplete(topicId));

  // Toggle on click
  checkbox.addEventListener('click', () => {
    const newState = ProgressManager.toggle(topicId);
    _syncUI(newState);

    // Celebrate on completion
    if (newState) _celebrate();
  });

  if (label) {
    label.addEventListener('click', () => checkbox.click());
  }
}

function _celebrate() {
  const banner = document.createElement('div');
  banner.style.cssText = `
    position:fixed;top:20px;right:20px;z-index:9999;
    background:var(--green-500);color:#fff;
    padding:12px 20px;border-radius:10px;
    font-family:var(--font-heading);font-weight:600;font-size:0.9rem;
    box-shadow:0 4px 20px rgba(16,185,129,0.4);
    animation:fadeIn 0.3s ease;
  `;
  banner.textContent = '🎉 Topic marked complete!';
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 2500);
}

/* ============================================================
   SECTION 8 — TABS
   Auto-wires tab groups on the page
   ============================================================ */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll('.tab-btn');
    const panelGroup = tabGroup.nextElementSibling;

    buttons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (panelGroup) {
          const panels = panelGroup.querySelectorAll('.tab-panel');
          panels.forEach((p, pi) => p.classList.toggle('active', pi === i));
        }
      });
    });

    // Activate first tab by default
    if (buttons.length > 0) buttons[0].click();
  });
}

/* ============================================================
   SECTION 9 — PROGRESS BARS
   Renders all progress bars on the page from ProgressManager
   ============================================================ */
function initProgressBars() {
  // Part progress bars
  document.querySelectorAll('[data-progress-part]').forEach(el => {
    const part = parseInt(el.dataset.progressPart);
    const prog = ProgressManager.getPartProgress(part);
    const fill = el.querySelector('.progress-fill');
    const pct  = el.querySelector('[data-progress-pct]') ||
                 el.closest('.part-hero')?.querySelector('[data-progress-pct]') ||
                 el.parentElement?.querySelector('[data-progress-pct]');
    if (fill) fill.style.width = `${prog.pct}%`;
    if (pct)  pct.textContent  = `${prog.pct}%`;
  });

  // Overall progress bar
  const overallBar = document.querySelector('[data-progress-overall]');
  if (overallBar) {
    const ov   = ProgressManager.getOverallProgress();
    const fill = overallBar.querySelector('.progress-fill');
    const pct  = overallBar.querySelector('[data-progress-pct]');
    const done = overallBar.querySelector('[data-progress-done]');
    if (fill) fill.style.width = `${ov.pct}%`;
    if (pct)  pct.textContent  = `${ov.pct}%`;
    if (done) done.textContent = `${ov.done} / ${ov.total}`;
  }
}

/* ============================================================
   SECTION 10 — LIVE API TRY-IT PANEL
   Generic Azure REST caller — used in topic pages
   Each try-it panel sets its own endpoint builder via data attrs.
   ============================================================ */
const TryItPanel = (() => {

  function init(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const runBtn  = panel.querySelector('[data-tryit-run]');
    const respEl  = panel.querySelector('.tryit-response');
    const loadEl  = panel.querySelector('.tryit-loading');

    if (!runBtn) return;

    runBtn.addEventListener('click', async () => {
      const endpoint  = panel.querySelector('[data-tryit-endpoint]')?.value?.trim();
      const key       = panel.querySelector('[data-tryit-key]')?.value?.trim();
      const body      = panel.querySelector('[data-tryit-body]')?.value?.trim();
      const method    = panel.dataset.tryitMethod || 'POST';

      if (!endpoint || !key) {
        _showResponse(respEl, '⚠️ Please enter both your Azure endpoint and API key.', 'warning');
        return;
      }

      _setLoading(runBtn, loadEl, true);
      if (respEl) { respEl.classList.add('show'); respEl.textContent = ''; }

      try {
        const headers = {
          'Ocp-Apim-Subscription-Key': key,
          'Content-Type': 'application/json',
        };

        const opts = { method, headers };
        if (body && method !== 'GET') opts.body = body;

        const res  = await fetch(endpoint, opts);
        const text = await res.text();

        let display;
        try {
          display = JSON.stringify(JSON.parse(text), null, 2);
        } catch {
          display = text;
        }

        _showResponse(respEl, `// HTTP ${res.status} ${res.statusText}\n\n${display}`,
          res.ok ? 'success' : 'error');

      } catch (err) {
        _showResponse(respEl,
          `// Network error — check your endpoint URL and CORS settings.\n// ${err.message}`,
          'error');
      } finally {
        _setLoading(runBtn, loadEl, false);
      }
    });
  }

  function _setLoading(btn, loadEl, loading) {
    btn.disabled = loading;
    btn.textContent = loading ? 'Running…' : '▶ Run';
    if (loadEl) loadEl.style.display = loading ? 'flex' : 'none';
  }

  function _showResponse(el, text, type) {
    if (!el) return;
    el.classList.add('show');
    el.textContent = text;
    el.style.color = type === 'success' ? 'var(--green-400)'
                   : type === 'error'   ? 'var(--red-400)'
                   : type === 'warning' ? 'var(--amber-400)'
                   : 'var(--text-secondary)';
  }

  return { init };
})();

/* ============================================================
   SECTION 11 — SMOOTH SCROLL & ANCHOR LINKS
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   SECTION 12 — TOOLTIP (lightweight)
   Add data-tooltip="text" to any element
   ============================================================ */
function initTooltips() {
  let tip = null;

  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', e => {
      tip = document.createElement('div');
      tip.className = 'tooltip';
      tip.textContent = el.dataset.tooltip;
      tip.style.cssText = `
        position:fixed;z-index:9998;
        background:var(--navy-700);color:var(--text-primary);
        border:1px solid var(--border-default);
        padding:6px 10px;border-radius:6px;
        font-size:0.75rem;font-family:var(--font-body);
        pointer-events:none;white-space:nowrap;
        box-shadow:0 4px 12px rgba(0,0,0,0.4);
        animation:fadeIn 0.15s ease;
      `;
      document.body.appendChild(tip);
      _positionTip(e);
    });

    el.addEventListener('mousemove', _positionTip);

    el.addEventListener('mouseleave', () => {
      if (tip) { tip.remove(); tip = null; }
    });
  });

  function _positionTip(e) {
    if (!tip) return;
    tip.style.left = `${e.clientX + 12}px`;
    tip.style.top  = `${e.clientY - 8}px`;
  }
}

/* ============================================================
   SECTION 14 — SEARCH (topic search in sidebar)
   ============================================================ */
function initSidebarSearch() {
  const input = document.getElementById('sidebar-search');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.sidebar-item[href]').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

/* ============================================================
   SECTION 15 — PAGE-LEVEL RENDER HELPERS
   Called from individual topic pages to populate
   dynamic content like part progress stats
   ============================================================ */
const PageHelpers = {

  /** Render a mini progress card for a given part */
  renderPartCard(partNum, containerId) {
    const el   = document.getElementById(containerId);
    const meta = PARTS_META[partNum];
    const prog = ProgressManager.getPartProgress(partNum);
    if (!el || !meta) return;

    el.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <span style="font-size:1.4rem">${meta.icon}</span>
        <span class="badge" style="background:color-mix(in srgb,${meta.color} 15%,transparent);
          color:${meta.color};border:1px solid color-mix(in srgb,${meta.color} 35%,transparent)">
          ${meta.weight}
        </span>
      </div>
      <h3 style="font-size:0.95rem;margin-bottom:var(--space-3)">${meta.title}</h3>
      <div class="progress-labeled">
        <div class="progress-bar"><div class="progress-fill" style="width:${prog.pct}%;
          background:linear-gradient(90deg,${meta.color},${meta.color}aa)"></div></div>
        <span class="progress-pct" style="color:${meta.color}">${prog.pct}%</span>
      </div>
      <p style="font-size:0.75rem;color:var(--text-muted);margin-top:var(--space-2)">
        ${prog.done} of ${prog.total} topics complete
      </p>`;
  },

  /** Render overall exam progress on dashboard */
  renderOverallStats(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const ov   = ProgressManager.getOverallProgress();
    const days = ExamCountdown.getDaysRemaining();

    el.querySelector('[data-stat-pct]')  && (el.querySelector('[data-stat-pct]').textContent  = `${ov.pct}%`);
    el.querySelector('[data-stat-done]') && (el.querySelector('[data-stat-done]').textContent = ov.done);
    el.querySelector('[data-stat-left]') && (el.querySelector('[data-stat-left]').textContent = ov.total - ov.done);
    el.querySelector('[data-stat-days]') && (el.querySelector('[data-stat-days]').textContent = days ?? '—');
  },

  getNextTopics(limit = 3) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return TOPIC_REGISTRY
      .filter(t => !data[t.id]?.complete)
      .slice(0, limit);
  },
};

/* ============================================================
   SECTION 16 — GLOBAL INIT
   Called by every page via:  document.addEventListener('DOMContentLoaded', AI102.init)
   ============================================================ */
const AI102 = {

  /** Full init — call this on every page */
  init() {
    SidebarManager.init();
    ExamCountdown.init();
    initProgressBars();
    initCompletionCheckbox();
    initCopyButtons();
    initTabs();
    initSmoothScroll();
    initTooltips();
    initSidebarSearch();

    // Auto-init any quiz containers present on the page
    document.querySelectorAll('[data-quiz]').forEach(el => {
      const id = el.id || 'default-quiz';
      if (!el.id) el.id = id;
      QuizEngine.init(id);
      QuizEngine.wireOptions(id);
    });

    // Auto-init any flashcard decks present on the page
    document.querySelectorAll('[data-flashcard-deck]').forEach(el => {
      FlashcardEngine.init(el.dataset.flashcardDeck || el.id);
    });

    // Auto-init any try-it panels
    document.querySelectorAll('[data-tryit-panel]').forEach(el => {
      TryItPanel.init(el.id);
    });

    console.log('✅ AI-102 Study Hub initialised');
  },

  /** Lightweight init for pages that only need progress display */
  initLight() {
    initProgressBars();
    ExamCountdown.init();
    SidebarManager.init();
    initCopyButtons();
    initSmoothScroll();
  },
};

/* ============================================================
   EXPOSE GLOBALS (so onclick="..." attributes work in HTML)
   ============================================================ */
window.AI102           = AI102;
window.ProgressManager = ProgressManager;
window.QuizEngine      = QuizEngine;
window.FlashcardEngine = FlashcardEngine;
window.TryItPanel      = TryItPanel;
window.PageHelpers     = PageHelpers;
window.ExamCountdown   = ExamCountdown;

/* Auto-init when DOM is ready */
document.addEventListener('DOMContentLoaded', () => AI102.init());

/* ── Global: navigate back to welcome hub ── */
function switchCourse() {
  localStorage.removeItem('active_course');
  const segs = window.location.pathname.split('/').filter(s => s && !s.endsWith('.html'));
  window.location.href = '../'.repeat(segs.length) + 'index.html';
}

/* ============================================================
   FLASHCARD RATING PERSISTENCE
   Saves Known/Review ratings per deck across sessions.
   Key format: 'ai102_fc_p1', 'ai102_fc_p2', etc.
   rated object: { cardIndex: true/false }
   ============================================================ */
const FlashcardRatings = {
  load(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch { return {}; }
  },
  save(key, rated) {
    try { localStorage.setItem(key, JSON.stringify(rated)); } catch {}
  },
  clear(key) {
    try { localStorage.removeItem(key); } catch {}
  }
};

/* ============================================================
   SWIPE SUPPORT FOR FLASHCARDS
   Call: initFCSwipe(cardEl, onSwipeLeft, onSwipeRight)
   Threshold: 50px horizontal movement, must exceed vertical.
   ============================================================ */
function initFCSwipe(cardEl, onLeft, onRight) {
  let sx = 0, sy = 0;
  cardEl.addEventListener('touchstart', e => {
    sx = e.changedTouches[0].clientX;
    sy = e.changedTouches[0].clientY;
  }, { passive: true });
  cardEl.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) onLeft(); else onRight();
    }
  });
}

/* ============================================================
   DARK / LIGHT MODE TOGGLE
   Toggles 'light-mode' class on body; persists to localStorage.
   ============================================================ */
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  try { localStorage.setItem('prepassist_theme', isLight ? 'light' : 'dark'); } catch {}
  document.querySelectorAll('.theme-toggle-btn').forEach(b => {
    b.textContent = isLight ? '🌙' : '☀️';
  });
}

// Apply saved theme before first render to prevent FOUC
(function() {
  try {
    if (localStorage.getItem('prepassist_theme') === 'light') {
      document.body.classList.add('light-mode');
    }
  } catch {}
})();

/* ============================================================
   PROGRESS EXPORT / IMPORT
   ============================================================ */
function exportProgress() {
  const data = {};
  ['ai102_progress','ai102_settings','ai102_exam_date','csa_progress'].forEach(k => {
    const v = localStorage.getItem(k);
    if (v) data[k] = JSON.parse(v);
  });
  // Include quiz score history
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('ai102_quiz_')) {
      try { data[k] = JSON.parse(localStorage.getItem(k)); } catch {}
    }
    if (k && k.startsWith('ai102_fc_')) {
      try { data[k] = JSON.parse(localStorage.getItem(k)); } catch {}
    }
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `study-progress-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress() {
  const input = document.createElement('input');
  input.type  = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        Object.entries(data).forEach(([k, v]) => {
          localStorage.setItem(k, JSON.stringify(v));
        });
        alert('Progress imported! Reloading...');
        location.reload();
      } catch {
        alert('Invalid progress file.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

window.FlashcardRatings = FlashcardRatings;
window.initFCSwipe      = initFCSwipe;
window.toggleTheme      = toggleTheme;
window.exportProgress   = exportProgress;
window.importProgress   = importProgress;

const SidebarTemplate = (p) => `
<aside class="sidebar">


    <!-- Logo -->
    <div class="sidebar-logo">
      <div class="sidebar-logo-icon">🧠</div>
      <div>
        <div class="sidebar-logo-text">AI-102 Study Hub</div>
        <div class="sidebar-logo-sub">Azure AI Engineer</div>
      </div>
    </div>

    <!-- Nav -->
    <nav class="sidebar-nav">
      <a href="${p}index.html" class="sidebar-item sidebar-nav-tab" data-short-label="⌂"><span class="item-icon">⌂</span><span>Dashboard</span></a>
      <div class="sidebar-group" data-part-group="1">
        <button class="sidebar-group-header" data-group-toggle><span class="sidebar-chevron"></span><span class="sidebar-group-title">Part 1 — Plan &amp; Manage</span><span class="item-badge" data-part-progress="1">0/5</span></button>
        <div class="sidebar-group-body">
          <a href="${p}part1-plan-manage/topics/01-foundry-services.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p1-foundry-services"><span class="topic-dot" data-topic-check="p1-foundry-services"></span>Foundry Services</a>
          <a href="${p}part1-plan-manage/topics/02-plan-create-deploy.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p1-plan-create-deploy"><span class="topic-dot" data-topic-check="p1-plan-create-deploy"></span>Plan, Create &amp; Deploy</a>
          <a href="${p}part1-plan-manage/topics/03-security.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p1-security"><span class="topic-dot" data-topic-check="p1-security"></span>Security &amp; Auth</a>
          <a href="${p}part1-plan-manage/topics/04-monitor.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p1-monitor"><span class="topic-dot" data-topic-check="p1-monitor"></span>Monitor &amp; Manage</a>
          <a href="${p}part1-plan-manage/topics/05-responsible-ai.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p1-responsible-ai"><span class="topic-dot" data-topic-check="p1-responsible-ai"></span>Responsible AI</a>
          <a href="${p}part1-plan-manage/flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>
          <a href="${p}part1-plan-manage/quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>
        </div>
      </div>
      <div class="sidebar-group" data-part-group="2">
        <button class="sidebar-group-header" data-group-toggle><span class="sidebar-chevron"></span><span class="sidebar-group-title">Part 2 — Generative AI</span><span class="item-badge" data-part-progress="2">0/3</span></button>
        <div class="sidebar-group-body">
          <a href="${p}part2-generative-ai/topics/01-foundry-build.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p2-foundry-build"><span class="topic-dot" data-topic-check="p2-foundry-build"></span>Build with Foundry</a>
          <a href="${p}part2-generative-ai/topics/02-azure-openai.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p2-azure-openai"><span class="topic-dot" data-topic-check="p2-azure-openai"></span>Azure OpenAI</a>
          <a href="${p}part2-generative-ai/topics/03-optimize-operationalize.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p2-optimize"><span class="topic-dot" data-topic-check="p2-optimize"></span>Optimize &amp; Operationalize</a>
          <a href="${p}part2-generative-ai/flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>
          <a href="${p}part2-generative-ai/quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>
        </div>
      </div>
      <div class="sidebar-group" data-part-group="3">
        <button class="sidebar-group-header" data-group-toggle><span class="sidebar-chevron"></span><span class="sidebar-group-title">Part 3 — Agentic</span><span class="item-badge" data-part-progress="3">0/1</span></button>
        <div class="sidebar-group-body">
          <a href="${p}part3-agentic/topics/01-custom-agents.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p3-custom-agents"><span class="topic-dot" data-topic-check="p3-custom-agents"></span>Custom Agents</a>
          <a href="${p}part3-agentic/flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>
          <a href="${p}part3-agentic/quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>
        </div>
      </div>
      <div class="sidebar-group" data-part-group="4">
        <button class="sidebar-group-header" data-group-toggle><span class="sidebar-chevron"></span><span class="sidebar-group-title">Part 4 — NLP</span><span class="item-badge" data-part-progress="4">0/3</span></button>
        <div class="sidebar-group-body">
          <a href="${p}part4-nlp/topics/01-analyze-translate-text.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p4-analyze-text"><span class="topic-dot" data-topic-check="p4-analyze-text"></span>Analyze &amp; Translate Text</a>
          <a href="${p}part4-nlp/topics/02-speech.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p4-speech"><span class="topic-dot" data-topic-check="p4-speech"></span>Speech Processing</a>
          <a href="${p}part4-nlp/topics/03-custom-language-models.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p4-custom-language"><span class="topic-dot" data-topic-check="p4-custom-language"></span>Custom Language Models</a>
          <a href="${p}part4-nlp/flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>
          <a href="${p}part4-nlp/quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>
        </div>
      </div>
      <div class="sidebar-group" data-part-group="5">
        <button class="sidebar-group-header" data-group-toggle><span class="sidebar-chevron"></span><span class="sidebar-group-title">Part 5 — Knowledge Mining</span><span class="item-badge" data-part-progress="5">0/3</span></button>
        <div class="sidebar-group-body">
          <a href="${p}part5-knowledge-mining/topics/01-ai-search.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p5-ai-search"><span class="topic-dot" data-topic-check="p5-ai-search"></span>Azure AI Search</a>
          <a href="${p}part5-knowledge-mining/topics/02-document-intelligence.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p5-document-intelligence"><span class="topic-dot" data-topic-check="p5-document-intelligence"></span>Document Intelligence</a>
          <a href="${p}part5-knowledge-mining/topics/03-content-understanding.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p5-content-understanding"><span class="topic-dot" data-topic-check="p5-content-understanding"></span>Content Understanding</a>
          <a href="${p}part5-knowledge-mining/flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>
          <a href="${p}part5-knowledge-mining/quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>
        </div>
      </div>
      <div class="sidebar-group" data-part-group="6">
        <button class="sidebar-group-header" data-group-toggle><span class="sidebar-chevron"></span><span class="sidebar-group-title">Part 6 — Computer Vision</span><span class="item-badge" data-part-progress="6">0/3</span></button>
        <div class="sidebar-group-body">
          <a href="${p}part6-computer-vision/topics/01-analyze-images.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p6-analyze-images"><span class="topic-dot" data-topic-check="p6-analyze-images"></span>Analyze Images</a>
          <a href="${p}part6-computer-vision/topics/02-custom-vision-models.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p6-custom-vision"><span class="topic-dot" data-topic-check="p6-custom-vision"></span>Custom Vision Models</a>
          <a href="${p}part6-computer-vision/topics/03-video-analysis.html" class="sidebar-item sidebar-sub-item" data-topic-nav="p6-video-analysis"><span class="topic-dot" data-topic-check="p6-video-analysis"></span>Video Analysis</a>
          <a href="${p}part6-computer-vision/flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>
          <a href="${p}part6-computer-vision/quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>
        </div>
      </div>
      <a href="${p}revision.html" class="sidebar-item sidebar-nav-tab"><span class="item-icon">🧠</span><span>Revision Center</span></a>
      <a href="#" onclick="ProgressManager.reset()" class="sidebar-item"><span class="item-icon">↺</span><span>Reset Progress</span></a>
    </nav>

    <!-- Sidebar Footer — Overall Progress -->
    <div class="sidebar-progress" id="sidebar-overall-progress">
      <div class="sidebar-progress-label">
        <span>Overall Progress</span>
        <span data-overall-pct style="color:var(--blue-300);font-family:var(--font-mono)">0%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:0%"></div>
      </div>
    </div>

  
</aside>
`;

SidebarManager.injectAndInit = function() {
    const container = document.getElementById('app-sidebar');
    if (!container) return;

    const { course: p } = _ai102Prefixes();

    container.outerHTML = SidebarTemplate(p);

    // Inject "All Courses" button into topbar (left side)
    document.querySelectorAll('.topbar').forEach(topbar => {
      if (!topbar.querySelector('.back-to-hub-btn')) {
        const btn = document.createElement('button');
        btn.className = 'back-to-hub-btn';
        btn.textContent = 'All Courses';
        btn.onclick = switchCourse;
        topbar.insertBefore(btn, topbar.firstChild);
      }
      // Inject theme toggle at right end of every topbar
      if (!topbar.querySelector('.theme-toggle-btn')) {
        const tb = document.createElement('button');
        tb.className = 'theme-toggle-btn';
        tb.id = 'theme-toggle-btn';
        tb.title = 'Toggle dark/light mode';
        tb.style.marginLeft = 'auto';
        tb.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
        tb.onclick = toggleTheme;
        topbar.appendChild(tb);
      }
    });
    
    // Immediately apply collapsed state to prevent FOUC jank
    try {
      const state = JSON.parse(localStorage.getItem('ai102_settings') || '{}');
      if (state.sidebarCollapsed) {
        document.body.classList.add('sidebar-collapsed');
        // Also update toggle button if it exists yet
        const toggle = document.querySelector('.sidebar-desktop-toggle');
        if (toggle) {
          toggle.setAttribute('aria-label', 'Expand sidebar');
          toggle.title = 'Expand sidebar';
        }
      }
    } catch (e) {}
};

SidebarManager.injectAndInit();

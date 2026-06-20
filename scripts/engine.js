/* ============================================================
   PREPASSIST ENGINE — engine.js
   Generic study-hub engine for ANY PrepAssist course.
   Config is supplied by window.COURSE_CONFIG (set before this
   file is loaded by each course's own config.js).

   Handles: Progress, Exam Countdown, Quiz, Flashcards,
            Sidebar (auto-generated), Copy Buttons, Tabs,
            Smooth Scroll, Tooltips, Completion Checkbox,
            Try-It Panels, Progress Bars, Page Helpers.

   No course-specific data lives here — zero hardcoding.
   ============================================================ */

'use strict';

/* ============================================================
   ANTI-FOUC — runs immediately, before DOM is ready.
   Applies theme class and CSS accent colour from config so
   the page renders in the correct theme on first paint.
   ============================================================ */
(function () {
  const _cfg = window.COURSE_CONFIG;
  if (!_cfg) return;
  if (_cfg.themeClass) {
    document.body.classList.add(_cfg.themeClass);
  }
  if (_cfg.accentColor) {
    document.documentElement.style.setProperty('--course-accent', _cfg.accentColor);
  }
})();

/* ============================================================
   UTILITY — prefix-path detection
   Finds where engine.js lives relative to the current page so
   all generated href values resolve correctly regardless of
   nesting depth.
   ============================================================ */
function _getPrefixPath() {
  const _scripts = document.getElementsByTagName('script');
  // config.js lives in the course root, so its path gives the correct prefix
  for (let _i = 0; _i < _scripts.length; _i++) {
    const _src = _scripts[_i].getAttribute('src');
    if (_src && _src.endsWith('config.js')) {
      return _src.slice(0, _src.length - 'config.js'.length);
    }
  }
  // Fallback: engine.js lives at repo root /scripts/, same level as course root
  for (let _i = 0; _i < _scripts.length; _i++) {
    const _src = _scripts[_i].getAttribute('src');
    if (_src && _src.includes('engine.js')) {
      return _src.replace('scripts/engine.js', '');
    }
  }
  return '';
}

/* ============================================================
   switchCourse() — global navigation helper
   Clears the active-course flag and redirects to the root hub
   index.html, computing the correct relative path from the
   current page's depth.
   ============================================================ */
function switchCourse() {
  localStorage.removeItem('active_course');
  const _segs = window.location.pathname.split('/').filter(function (s) {
    return s && !s.endsWith('.html');
  });
  window.location.href = '../'.repeat(_segs.length) + 'index.html';
}

/* ============================================================
   SECTION 1 — PROGRESS MANAGER
   All storage keys come from window.COURSE_CONFIG so that
   multiple courses never collide in localStorage.
   ============================================================ */
const ProgressManager = (function () {

  function _storageKey() {
    return (window.COURSE_CONFIG && window.COURSE_CONFIG.storageKey) || 'prepassist_progress';
  }

  function _topicRegistry() {
    return (window.COURSE_CONFIG && window.COURSE_CONFIG.topicRegistry) || [];
  }

  function _partsMeta() {
    return (window.COURSE_CONFIG && window.COURSE_CONFIG.partsMeta) || {};
  }

  function _load() {
    try {
      return JSON.parse(localStorage.getItem(_storageKey())) || {};
    } catch (_e) {
      return {};
    }
  }

  function _save(_data) {
    try {
      localStorage.setItem(_storageKey(), JSON.stringify(_data));
    } catch (_e) {
      console.warn('PrepAssist Engine: Could not save progress:', _e);
    }
  }

  function _dispatchUpdate() {
    document.dispatchEvent(new CustomEvent('progressUpdated'));
  }

  /** Mark a topic complete or incomplete */
  function setComplete(_topicId, _complete) {
    if (_complete === undefined) _complete = true;
    const _data = _load();
    _data[_topicId] = { complete: _complete, timestamp: Date.now() };
    _save(_data);
    _dispatchUpdate();
  }

  /** Toggle completion state; returns new boolean state */
  function toggle(_topicId) {
    const _data = _load();
    const _current = (_data[_topicId] && _data[_topicId].complete) || false;
    setComplete(_topicId, !_current);
    return !_current;
  }

  /** Returns true if the topic is complete */
  function isComplete(_topicId) {
    var _entry = _load()[_topicId];
    return !!(_entry && _entry.complete);
  }

  /** Returns { done, total, pct } for a given part number */
  function getPartProgress(_partNum) {
    const _data = _load();
    const _meta = _partsMeta();
    const _ids  = (_meta[_partNum] && _meta[_partNum].topicIds) || [];
    const _done = _ids.filter(function (_id) { return _data[_id] && _data[_id].complete; }).length;
    return {
      done:  _done,
      total: _ids.length,
      pct:   _ids.length ? Math.round((_done / _ids.length) * 100) : 0,
    };
  }

  /** Returns { done, total, pct } across all topics */
  function getOverallProgress() {
    const _data  = _load();
    const _reg   = _topicRegistry();
    const _total = _reg.length;
    const _done  = _reg.filter(function (_t) { return _data[_t.id] && _data[_t.id].complete; }).length;
    return {
      done:  _done,
      total: _total,
      pct:   _total ? Math.round((_done / _total) * 100) : 0,
    };
  }

  /** Reset all progress with confirmation */
  function reset() {
    const _name = (window.COURSE_CONFIG && window.COURSE_CONFIG.abbreviation) || 'this course';
    if (confirm('Reset ALL progress for ' + _name + '? This cannot be undone.')) {
      localStorage.removeItem(_storageKey());
      _dispatchUpdate();
      return true;
    }
    return false;
  }

  return { setComplete, toggle, isComplete, getPartProgress, getOverallProgress, reset };
})();

/* ============================================================
   SECTION 2 — EXAM DATE COUNTDOWN
   Reads the exam-date key from window.COURSE_CONFIG.examDateKey.
   ============================================================ */
const ExamCountdown = (function () {

  function _examDateKey() {
    return (window.COURSE_CONFIG && window.COURSE_CONFIG.examDateKey) || 'prepassist_exam_date';
  }

  function getDate() {
    const _stored = localStorage.getItem(_examDateKey());
    return _stored ? new Date(_stored) : null;
  }

  function setDate(_dateString) {
    localStorage.setItem(_examDateKey(), _dateString);
    _renderAll();
  }

  function getDaysRemaining() {
    const _d = getDate();
    if (!_d) return null;
    const _diff = _d - new Date();
    return Math.max(0, Math.ceil(_diff / (1000 * 60 * 60 * 24)));
  }

  function _renderAll() {
    const _days = getDaysRemaining();
    document.querySelectorAll('[data-countdown]').forEach(function (_el) {
      if (_days === null) {
        _el.textContent = '—';
      } else if (_days === 0) {
        _el.textContent = 'Today! 🎯';
      } else {
        _el.textContent = _days + ' day' + (_days !== 1 ? 's' : '');
      }
    });
  }

  function init() {
    _renderAll();
    setInterval(_renderAll, 60000);
    const _input = document.getElementById('exam-date-input');
    if (_input) {
      const _stored = getDate();
      if (_stored) _input.value = _stored.toISOString().split('T')[0];
      _input.addEventListener('change', function (_e) { setDate(_e.target.value); });
    }
  }

  return { init, setDate, getDaysRemaining, getDate };
})();

/* ============================================================
   SECTION 3 — QUIZ ENGINE
   Reads questions from a [data-quiz] element on the page.

   HTML contract:
   <div id="MY_QUIZ" data-quiz="TOPIC_ID">
     <div data-quiz-body>
       <div data-question>
         <p data-q-text>Question text here?</p>
         <div data-options>
           <button data-option="A">Option A</button>
           <button data-option="B">Option B</button>
         </div>
         <p data-correct="A">Explanation text.</p>
       </div>
     </div>
     <div data-quiz-footer>
       <button data-q-prev>Prev</button>
       <span data-q-counter></span>
       <button data-q-next>Next</button>
       <button data-q-submit>Submit</button>
     </div>
     <div data-quiz-result style="display:none"></div>
   </div>
   ============================================================ */
const QuizEngine = (function () {

  let _state = {};

  function _shuffleOptions(_questionEl) {
    var _optionsContainer = _questionEl.querySelector('.quiz-options');
    if (!_optionsContainer) return;

    var _buttons = Array.from(_optionsContainer.querySelectorAll('[data-option]'));
    if (_buttons.length < 2) return;

    var _expEl = _questionEl.querySelector('[data-correct]');
    if (!_expEl) return;

    var _oldCorrect = _expEl.dataset.correct;

    for (var _i = _buttons.length - 1; _i > 0; _i--) {
      var _j = Math.floor(Math.random() * (_i + 1));
      var _tmp = _buttons[_i]; _buttons[_i] = _buttons[_j]; _buttons[_j] = _tmp;
    }

    var _letters = ['A', 'B', 'C', 'D'];
    var _newCorrect = _oldCorrect;

    _buttons.forEach(function (_btn, _idx) {
      var _wasCorrect = _btn.dataset.option === _oldCorrect;
      var _newLetter  = _letters[_idx];
      _btn.dataset.option = _newLetter;
      var _ls = _btn.querySelector('.quiz-option-letter');
      if (_ls) _ls.textContent = _newLetter;
      if (_wasCorrect) _newCorrect = _newLetter;
      _optionsContainer.appendChild(_btn);
    });

    _expEl.dataset.correct = _newCorrect;
    // quiz.html uses a separate hidden <p data-correct>, topic files put it on .quiz-explanation
    var _textEl = _questionEl.querySelector('.quiz-explanation') || _expEl;
    _textEl.innerHTML = _textEl.innerHTML.replace(
      /(<strong>)[A-D]( is correct\.)/,
      '$1' + _newCorrect + '$2'
    );
  }

  function init(_containerId) {
    const _container = document.getElementById(_containerId) ||
                       document.querySelector('[data-quiz]');
    if (!_container) return;

    const _questions = Array.from(_container.querySelectorAll('[data-question]'));
    if (!_questions.length) return;

    const _topicId = _container.dataset.quiz;

    _questions.forEach(function (_q) { _shuffleOptions(_q); });

    _state[_containerId] = {
      questions:  _questions,
      topicId:    _topicId,
      current:    0,
      score:      0,
      answered:   new Array(_questions.length).fill(null),
      container:  _container,
    };

    _render(_containerId);
  }

  function _render(_cid) {
    const _s = _state[_cid];
    if (!_s) return;

    // Show only the current question
    _s.questions.forEach(function (_q, _i) {
      _q.style.display = _i === _s.current ? 'block' : 'none';
    });

    // Update counter label
    const _counter = _s.container.querySelector('[data-q-counter]');
    if (_counter) _counter.textContent = (_s.current + 1) + ' / ' + _s.questions.length;

    // Update progress fill bar
    const _fill = _s.container.querySelector('[data-q-progress]');
    if (_fill) _fill.style.width = ((_s.current + 1) / _s.questions.length * 100) + '%';

    // Restore answered state or reset
    const _alreadyAnswered = _s.answered[_s.current];
    if (_alreadyAnswered) {
      _showAnswer(_cid, _s.questions[_s.current], _alreadyAnswered);
    } else {
      _s.questions[_s.current].querySelectorAll('[data-option]').forEach(function (_btn) {
        _btn.classList.remove('selected', 'correct', 'incorrect');
        _btn.disabled = false;
      });
      const _exp = _s.questions[_s.current].querySelector('[data-correct]');
      if (_exp && _exp.closest('.quiz-explanation')) {
        _exp.closest('.quiz-explanation').classList.remove('show');
      }
    }

    // Nav button visibility
    const _prevBtn   = _s.container.querySelector('[data-q-prev]');
    const _nextBtn   = _s.container.querySelector('[data-q-next]');
    const _submitBtn = _s.container.querySelector('[data-q-submit]');

    if (_prevBtn)   _prevBtn.disabled = _s.current === 0;
    if (_nextBtn)   _nextBtn.style.display   = _s.current < _s.questions.length - 1 ? 'inline-flex' : 'none';
    if (_submitBtn) _submitBtn.style.display = _s.current === _s.questions.length - 1 ? 'inline-flex' : 'none';
  }

  function _showAnswer(_cid, _questionEl, _chosenLetter) {
    const _s          = _state[_cid];
    const _correctEl  = _questionEl.querySelector('[data-correct]');
    if (!_correctEl) return;

    const _correctLetter = _correctEl.dataset.correct;

    _questionEl.querySelectorAll('[data-option]').forEach(function (_btn) {
      _btn.disabled = true;
      if (_btn.dataset.option === _correctLetter) _btn.classList.add('correct');
      if (_btn.dataset.option === _chosenLetter && _chosenLetter !== _correctLetter) _btn.classList.add('incorrect');
    });

    const _expBox = _questionEl.querySelector('.quiz-explanation');
    if (_expBox) _expBox.classList.add('show');

    const _scoreEl = _s.container.querySelector('[data-q-score]');
    if (_scoreEl) _scoreEl.textContent = 'Score: ' + _s.score + ' / ' + _s.questions.length;
  }

  function answer(_cid, _questionIndex, _chosenLetter) {
    const _s = _state[_cid];
    if (!_s || _s.answered[_questionIndex] !== null) return;

    const _questionEl = _s.questions[_questionIndex];
    const _correctEl  = _questionEl.querySelector('[data-correct]');
    if (!_correctEl) return;

    const _correctLetter = _correctEl.dataset.correct;
    _s.answered[_questionIndex] = _chosenLetter;

    if (_chosenLetter === _correctLetter) _s.score++;

    _showAnswer(_cid, _questionEl, _chosenLetter);
    _render(_cid);
  }

  function next(_cid) {
    const _s = _state[_cid];
    if (!_s || _s.current >= _s.questions.length - 1) return;
    _s.current++;
    _render(_cid);
  }

  function prev(_cid) {
    const _s = _state[_cid];
    if (!_s || _s.current <= 0) return;
    _s.current--;
    _render(_cid);
  }

  function finish(_cid) {
    const _s = _state[_cid];
    if (!_s) return;

    const _resultEl = _s.container.querySelector('[data-quiz-result]');
    const _bodyEl   = _s.container.querySelector('[data-quiz-body]');
    const _footerEl = _s.container.querySelector('[data-quiz-footer]');

    if (!_resultEl) return;

    const _pct = Math.round((_s.score / _s.questions.length) * 100);
    let _emoji = '😰';
    let _message = "Keep studying — you've got this!";
    if (_pct >= 90) { _emoji = '🏆'; _message = 'Outstanding! Exam-ready!'; }
    else if (_pct >= 75) { _emoji = '✅'; _message = 'Great work! Review the misses.'; }
    else if (_pct >= 60) { _emoji = '📚'; _message = 'Getting there — a bit more study needed.'; }

    _resultEl.innerHTML = '' +
      '<div class="quiz-result animate-scale-in">' +
        '<div style="font-size:3rem;margin-bottom:var(--space-4)">' + _emoji + '</div>' +
        '<div class="quiz-result-score">' + _pct + '%</div>' +
        '<p style="color:var(--text-secondary);margin-bottom:var(--space-2)">' + _s.score + ' of ' + _s.questions.length + ' correct</p>' +
        '<p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:var(--space-8)">' + _message + '</p>' +
        '<div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">' +
          '<button class="btn btn-secondary" onclick="QuizEngine.restart(\'' + _cid + '\')">🔄 Retry Quiz</button>' +
          '<button class="btn btn-primary" onclick="QuizEngine.review(\'' + _cid + '\')">📖 Review Answers</button>' +
        '</div>' +
      '</div>';

    if (_bodyEl)   _bodyEl.style.display   = 'none';
    if (_footerEl) _footerEl.style.display = 'none';
    _resultEl.style.display = 'block';
  }

  function restart(_cid) {
    const _s = _state[_cid];
    if (!_s) return;

    _s.current  = 0;
    _s.score    = 0;
    _s.answered = new Array(_s.questions.length).fill(null);

    const _resultEl = _s.container.querySelector('[data-quiz-result]');
    const _bodyEl   = _s.container.querySelector('[data-quiz-body]');
    const _footerEl = _s.container.querySelector('[data-quiz-footer]');

    if (_resultEl) _resultEl.style.display = 'none';
    if (_bodyEl)   _bodyEl.style.display   = 'block';
    if (_footerEl) _footerEl.style.display = 'flex';

    _s.questions.forEach(function (_q) {
      _q.querySelectorAll('[data-option]').forEach(function (_btn) {
        _btn.classList.remove('selected', 'correct', 'incorrect');
        _btn.disabled = false;
      });
      const _expBox = _q.querySelector('.quiz-explanation');
      if (_expBox) _expBox.classList.remove('show');
    });

    _render(_cid);
  }

  function review(_cid) {
    const _s = _state[_cid];
    if (!_s) return;

    const _resultEl = _s.container.querySelector('[data-quiz-result]');
    const _bodyEl   = _s.container.querySelector('[data-quiz-body]');
    const _footerEl = _s.container.querySelector('[data-quiz-footer]');

    if (_resultEl) _resultEl.style.display = 'none';
    if (_bodyEl)   _bodyEl.style.display   = 'block';
    if (_footerEl) _footerEl.style.display = 'flex';

    _s.current = 0;
    _render(_cid);
  }

  /** Auto-wire all [data-option] buttons in a quiz container */
  function wireOptions(_cid) {
    const _s = _state[_cid];
    if (!_s) return;

    _s.questions.forEach(function (_q, _qi) {
      _q.querySelectorAll('[data-option]').forEach(function (_btn) {
        // Clone to drop any stale listeners before re-wiring
        const _fresh = _btn.cloneNode(true);
        _btn.parentNode.replaceChild(_fresh, _btn);
        _fresh.addEventListener('click', function () {
          if (!_fresh.disabled) answer(_cid, _qi, _fresh.dataset.option);
        });
      });
    });

    const _prevBtn   = _s.container.querySelector('[data-q-prev]');
    const _nextBtn   = _s.container.querySelector('[data-q-next]');
    const _submitBtn = _s.container.querySelector('[data-q-submit]');

    if (_prevBtn)   _prevBtn.addEventListener('click',   function () { prev(_cid);   });
    if (_nextBtn)   _nextBtn.addEventListener('click',   function () { next(_cid);   });
    if (_submitBtn) _submitBtn.addEventListener('click', function () { finish(_cid); });
  }

  return { init, wireOptions, answer, next, prev, finish, restart, review };
})();

/* ============================================================
   SECTION 4 — FLASHCARD ENGINE
   Reads cards from [data-flashcard-deck] on the page.

   HTML contract:
   <div id="DECK_ID" data-flashcard-deck="DECK_ID">
     <div data-card data-term="Term" data-def="Definition"></div>
     ...
   </div>
   ============================================================ */
const FlashcardEngine = (function () {

  let _decks = {};

  function init(_deckId) {
    const _container = document.getElementById(_deckId) ||
                       document.querySelector('[data-flashcard-deck="' + _deckId + '"]');
    if (!_container) return;

    const _cards = Array.from(_container.querySelectorAll('[data-card]'));
    if (!_cards.length) return;

    _decks[_deckId] = {
      cards:     _shuffle(_cards.map(function (_c) { return { term: _c.dataset.term, def: _c.dataset.def }; })),
      current:   0,
      flipped:   false,
      container: _container,
    };

    _render(_deckId);
    _wireControls(_deckId);
  }

  function _shuffle(_arr) {
    const _a = _arr.slice();
    for (let _i = _a.length - 1; _i > 0; _i--) {
      const _j = Math.floor(Math.random() * (_i + 1));
      const _tmp = _a[_i]; _a[_i] = _a[_j]; _a[_j] = _tmp;
    }
    return _a;
  }

  function _render(_deckId) {
    const _d = _decks[_deckId];
    if (!_d) return;

    const _card   = _d.cards[_d.current];
    const _termEl = _d.container.querySelector('[data-fc-term]');
    const _defEl  = _d.container.querySelector('[data-fc-def]');
    const _cntEl  = _d.container.querySelector('[data-fc-counter]');
    const _fcEl   = _d.container.querySelector('.flashcard');

    if (_termEl) _termEl.textContent = _card.term;
    if (_defEl)  _defEl.textContent  = _card.def;
    if (_cntEl)  _cntEl.textContent  = (_d.current + 1) + ' / ' + _d.cards.length;

    // Reset flip state on navigation
    if (_fcEl && _d.flipped) {
      _d.flipped = false;
      _fcEl.classList.remove('flipped');
    }
  }

  function _wireControls(_deckId) {
    const _d = _decks[_deckId];
    if (!_d) return;

    const _fcEl = _d.container.querySelector('.flashcard');
    if (_fcEl) _fcEl.addEventListener('click', function () { flip(_deckId); });

    const _prevBtn    = _d.container.querySelector('[data-fc-prev]');
    const _nextBtn    = _d.container.querySelector('[data-fc-next]');
    const _shuffleBtn = _d.container.querySelector('[data-fc-shuffle]');

    if (_prevBtn)    _prevBtn.addEventListener('click',    function () { prev(_deckId);    });
    if (_nextBtn)    _nextBtn.addEventListener('click',    function () { next(_deckId);    });
    if (_shuffleBtn) _shuffleBtn.addEventListener('click', function () { shuffle(_deckId); });

    // Keyboard navigation (skip when user is typing)
    document.addEventListener('keydown', function (_e) {
      const _tag = document.activeElement && document.activeElement.tagName && document.activeElement.tagName.toLowerCase();
      if (_tag === 'input' || _tag === 'textarea' || _tag === 'select') return;
      const _deckEl = document.querySelector('[data-flashcard-deck="' + _deckId + '"]');
      if (!_deckEl) return;
      if (_e.key === 'ArrowRight') { _e.preventDefault(); next(_deckId);  }
      if (_e.key === 'ArrowLeft')  { _e.preventDefault(); prev(_deckId);  }
      if (_e.key === ' ')          { _e.preventDefault(); flip(_deckId);  }
    });
  }

  function flip(_deckId) {
    const _d = _decks[_deckId];
    if (!_d) return;
    const _fcEl = _d.container.querySelector('.flashcard');
    if (!_fcEl) return;
    _d.flipped = !_d.flipped;
    _fcEl.classList.toggle('flipped', _d.flipped);
  }

  function next(_deckId) {
    const _d = _decks[_deckId];
    if (!_d) return;
    _d.current = (_d.current + 1) % _d.cards.length;
    _d.flipped = false;
    _render(_deckId);
  }

  function prev(_deckId) {
    const _d = _decks[_deckId];
    if (!_d) return;
    _d.current = (_d.current - 1 + _d.cards.length) % _d.cards.length;
    _d.flipped = false;
    _render(_deckId);
  }

  function shuffle(_deckId) {
    const _d = _decks[_deckId];
    if (!_d) return;
    _d.cards   = _shuffle(_d.cards);
    _d.current = 0;
    _d.flipped = false;
    _render(_deckId);
    const _btn = _d.container.querySelector('[data-fc-shuffle]');
    if (_btn) {
      _btn.textContent = '✓ Shuffled!';
      setTimeout(function () { _btn.textContent = '🔀 Shuffle'; }, 1200);
    }
  }

  return { init, flip, next, prev, shuffle };
})();

/* ============================================================
   SECTION 5 — CODE COPY BUTTONS
   Injects a "Copy" button into every <pre> block.
   ============================================================ */
function initCopyButtons() {
  document.querySelectorAll('pre').forEach(function (_pre) {
    if (_pre.querySelector('.copy-btn')) return; // already wired

    const _btn = document.createElement('button');
    _btn.className   = 'copy-btn';
    _btn.textContent = 'Copy';

    _btn.addEventListener('click', async function () {
      const _code = (_pre.querySelector('code') && _pre.querySelector('code').innerText) || _pre.innerText;
      try {
        await navigator.clipboard.writeText(_code);
        _btn.textContent = '✓ Copied!';
        _btn.classList.add('copied');
        setTimeout(function () {
          _btn.textContent = 'Copy';
          _btn.classList.remove('copied');
        }, 2000);
      } catch (_err) {
        // Fallback for browsers without clipboard API
        const _ta = document.createElement('textarea');
        _ta.value = _code;
        _ta.style.position = 'fixed';
        _ta.style.opacity  = '0';
        document.body.appendChild(_ta);
        _ta.select();
        document.execCommand('copy');
        document.body.removeChild(_ta);
        _btn.textContent = '✓ Copied!';
        setTimeout(function () { _btn.textContent = 'Copy'; }, 2000);
      }
    });

    _pre.style.position = 'relative';
    _pre.appendChild(_btn);
  });
}

/* ============================================================
   SECTION 6 — TABS
   Auto-wires .tabs groups found on the page.
   ============================================================ */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(function (_tabGroup) {
    const _buttons    = _tabGroup.querySelectorAll('.tab-btn');
    const _panelGroup = _tabGroup.nextElementSibling;

    _buttons.forEach(function (_btn, _i) {
      _btn.addEventListener('click', function () {
        _buttons.forEach(function (_b) { _b.classList.remove('active'); });
        _btn.classList.add('active');
        if (_panelGroup) {
          const _panels = _panelGroup.querySelectorAll('.tab-panel');
          _panels.forEach(function (_p, _pi) { _p.classList.toggle('active', _pi === _i); });
        }
      });
    });

    if (_buttons.length > 0) _buttons[0].click();
  });
}

/* ============================================================
   SECTION 7 — SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (_a) {
    _a.addEventListener('click', function (_e) {
      const _target = document.querySelector(_a.getAttribute('href'));
      if (_target) {
        _e.preventDefault();
        _target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================================
   SECTION 8 — TOOLTIPS
   Add data-tooltip="text" to any element for a lightweight tip.
   ============================================================ */
function initTooltips() {
  let _tip = null;

  document.querySelectorAll('[data-tooltip]').forEach(function (_el) {
    _el.addEventListener('mouseenter', function (_e) {
      _tip = document.createElement('div');
      _tip.className = 'tooltip';
      _tip.textContent = _el.dataset.tooltip;
      _tip.style.cssText = [
        'position:fixed;z-index:9998;',
        'background:var(--navy-700);color:var(--text-primary);',
        'border:1px solid var(--border-default);',
        'padding:6px 10px;border-radius:6px;',
        'font-size:0.75rem;font-family:var(--font-body);',
        'pointer-events:none;white-space:nowrap;',
        'box-shadow:0 4px 12px rgba(0,0,0,0.4);',
        'animation:fadeIn 0.15s ease;',
      ].join('');
      document.body.appendChild(_tip);
      _positionTip(_e);
    });

    _el.addEventListener('mousemove', _positionTip);

    _el.addEventListener('mouseleave', function () {
      if (_tip) { _tip.remove(); _tip = null; }
    });
  });

  function _positionTip(_e) {
    if (!_tip) return;
    _tip.style.left = (_e.clientX + 12) + 'px';
    _tip.style.top  = (_e.clientY - 8)  + 'px';
  }
}

/* ============================================================
   SECTION 9 — COMPLETION CHECKBOX
   Wires the [data-complete-toggle] button on topic pages.
   Shows a toast on completion.
   ============================================================ */
function initCompletionCheckbox() {
  const _checkbox = document.querySelector('[data-complete-toggle]');
  if (!_checkbox) return;

  const _topicId = _checkbox.dataset.completeToggle;
  if (!_topicId) return;

  const _label = document.querySelector('[data-complete-label]');

  function _syncUI(_isComplete) {
    _checkbox.classList.toggle('checked', _isComplete);
    const _icon = _checkbox.querySelector('.check-icon');
    if (_icon) _icon.style.display = _isComplete ? 'block' : 'none';
    if (_label) {
      _label.classList.toggle('checked', _isComplete);
      _label.textContent = _isComplete ? '✅ Topic completed!' : 'Mark this topic as complete';
    }
  }

  _syncUI(ProgressManager.isComplete(_topicId));

  _checkbox.addEventListener('click', function () {
    const _newState = ProgressManager.toggle(_topicId);
    _syncUI(_newState);
    if (_newState) _celebrate();
  });

  if (_label) {
    _label.addEventListener('click', function () { _checkbox.click(); });
  }
}

function _celebrate() {
  const _banner = document.createElement('div');
  _banner.style.cssText = [
    'position:fixed;top:20px;right:20px;z-index:9999;',
    'background:var(--green-500);color:#fff;',
    'padding:12px 20px;border-radius:10px;',
    'font-family:var(--font-heading);font-weight:600;font-size:0.9rem;',
    'box-shadow:0 4px 20px rgba(16,185,129,0.4);',
    'animation:fadeIn 0.3s ease;',
  ].join('');
  _banner.textContent = '🎉 Topic marked complete!';
  document.body.appendChild(_banner);
  setTimeout(function () { _banner.remove(); }, 2500);
}

/* ============================================================
   SECTION 10 — PROGRESS BARS
   Renders all [data-progress-part], [data-progress-overall]
   elements from COURSE_CONFIG data.
   ============================================================ */
function initProgressBars() {
  // Per-part bars
  document.querySelectorAll('[data-progress-part]').forEach(function (_el) {
    const _part = parseInt(_el.dataset.progressPart, 10);
    const _prog = ProgressManager.getPartProgress(_part);
    const _fill = _el.querySelector('.progress-fill');
    const _pct  = _el.querySelector('[data-progress-pct]') ||
                  _el.closest('[class]')?.querySelector('[data-progress-pct]') ||
                  _el.parentElement?.querySelector('[data-progress-pct]');
    if (_fill) _fill.style.width = _prog.pct + '%';
    if (_pct)  _pct.textContent  = _prog.pct + '%';
  });

  // Overall bar
  const _overallBar = document.querySelector('[data-progress-overall]');
  if (_overallBar) {
    const _ov   = ProgressManager.getOverallProgress();
    const _fill = _overallBar.querySelector('.progress-fill');
    const _pct  = _overallBar.querySelector('[data-progress-pct]');
    const _done = _overallBar.querySelector('[data-progress-done]');
    if (_fill) _fill.style.width  = _ov.pct + '%';
    if (_pct)  _pct.textContent   = _ov.pct + '%';
    if (_done) _done.textContent  = _ov.done + ' / ' + _ov.total;
  }

  // Per-topic completion dots (outside the sidebar, on dashboard cards etc.)
  const _reg = (window.COURSE_CONFIG && window.COURSE_CONFIG.topicRegistry) || [];
  _reg.forEach(function (_t) {
    const _done = ProgressManager.isComplete(_t.id);
    document.querySelectorAll('[data-topic-check="' + _t.id + '"]').forEach(function (_dot) {
      _dot.classList.toggle('done', _done);
    });
  });
}

/* ============================================================
   SECTION 11 — SIDEBAR SEARCH
   Wires the #sidebar-search input to filter .sidebar-item[href].
   ============================================================ */
function initSidebarSearch() {
  const _input = document.getElementById('sidebar-search');
  if (!_input) return;

  _input.addEventListener('input', function () {
    const _q = _input.value.toLowerCase().trim();
    document.querySelectorAll('.sidebar-item[href]').forEach(function (_item) {
      const _text = _item.textContent.toLowerCase();
      _item.style.display = (!_q || _text.includes(_q)) ? '' : 'none';
    });
  });
}

/* ============================================================
   SECTION 12 — LIVE API TRY-IT PANEL
   Generic Azure REST caller for topic pages.
   ============================================================ */
const TryItPanel = (function () {

  function init(_panelId) {
    const _panel = document.getElementById(_panelId);
    if (!_panel) return;

    const _runBtn = _panel.querySelector('[data-tryit-run]');
    const _respEl = _panel.querySelector('.tryit-response');
    const _loadEl = _panel.querySelector('.tryit-loading');

    if (!_runBtn) return;

    _runBtn.addEventListener('click', async function () {
      const _endpointEl = _panel.querySelector('[data-tryit-endpoint]');
      const _keyEl      = _panel.querySelector('[data-tryit-key]');
      const _bodyEl     = _panel.querySelector('[data-tryit-body]');

      const _endpoint = _endpointEl && _endpointEl.value && _endpointEl.value.trim();
      const _key      = _keyEl      && _keyEl.value      && _keyEl.value.trim();
      const _body     = _bodyEl     && _bodyEl.value      && _bodyEl.value.trim();
      const _method   = _panel.dataset.tryitMethod || 'POST';

      if (!_endpoint || !_key) {
        _showResponse(_respEl, '⚠️ Please enter both your Azure endpoint and API key.', 'warning');
        return;
      }

      _setLoading(_runBtn, _loadEl, true);
      if (_respEl) { _respEl.classList.add('show'); _respEl.textContent = ''; }

      try {
        const _headers = {
          'Ocp-Apim-Subscription-Key': _key,
          'Content-Type': 'application/json',
        };
        const _opts = { method: _method, headers: _headers };
        if (_body && _method !== 'GET') _opts.body = _body;

        const _res  = await fetch(_endpoint, _opts);
        const _text = await _res.text();

        let _display;
        try { _display = JSON.stringify(JSON.parse(_text), null, 2); }
        catch (_e) { _display = _text; }

        _showResponse(_respEl,
          '// HTTP ' + _res.status + ' ' + _res.statusText + '\n\n' + _display,
          _res.ok ? 'success' : 'error');

      } catch (_err) {
        _showResponse(_respEl,
          '// Network error — check your endpoint URL and CORS settings.\n// ' + _err.message,
          'error');
      } finally {
        _setLoading(_runBtn, _loadEl, false);
      }
    });
  }

  function _setLoading(_btn, _loadEl, _loading) {
    _btn.disabled     = _loading;
    _btn.textContent  = _loading ? 'Running…' : '▶ Run';
    if (_loadEl) _loadEl.style.display = _loading ? 'flex' : 'none';
  }

  function _showResponse(_el, _text, _type) {
    if (!_el) return;
    _el.classList.add('show');
    _el.textContent = _text;
    _el.style.color = _type === 'success' ? 'var(--green-400)'
                    : _type === 'error'   ? 'var(--red-400)'
                    : _type === 'warning' ? 'var(--amber-400)'
                    : 'var(--text-secondary)';
  }

  return { init };
})();

/* ============================================================
   SECTION 13 — SIDEBAR BUILDER
   Generates sidebar HTML from COURSE_CONFIG — no hardcoded
   HTML needed per course. Called by SidebarManager.
   ============================================================ */
const SidebarBuilder = {

  build: function (_config, _prefixPath) {
    const _partsMeta      = _config.partsMeta      || {};
    const _topicRegistry  = _config.topicRegistry  || [];
    const _partIndexFiles = _config.partIndexFiles  || {};
    const _courseTitle    = _config.courseTitle     || 'Study Hub';
    const _abbreviation   = _config.abbreviation    || '';
    const _icon           = _config.icon            || '📚';
    const _accentColor    = _config.accentColor     || 'var(--course-accent, #0078d4)';
    const _showSearch     = _config.showSearch !== false;
    const _showRevision   = _config.showRevisionCenter !== false;
    const _showQuizzes    = _config.showQuizTab !== false;

    // Build part accordion groups
    const _groups = Object.keys(_partsMeta).map(function (_partNum) {
      const _num    = parseInt(_partNum, 10);
      const _meta   = _partsMeta[_partNum];
      const _topics = _topicRegistry.filter(function (_t) { return _t.part === _num; });

      const _topicLinks = _topics.map(function (_t) {
        return '\n        <a href="' + _prefixPath + _t.file + '" class="sidebar-item sidebar-sub-item" data-topic-nav="' + _t.id + '">' +
               '<span class="topic-dot" data-topic-check="' + _t.id + '"></span>' + _t.title + '</a>';
      }).join('');

      const _partBase = (_partIndexFiles[_partNum] || '').replace('index.html', '');
      const _fcLink  = _partBase ? '\n        <a href="' + _prefixPath + _partBase + 'flashcards.html" class="sidebar-item sidebar-sub-item">Flashcards</a>' : '';
      const _qzLink  = _partBase ? '\n        <a href="' + _prefixPath + _partBase + 'quiz.html" class="sidebar-item sidebar-sub-item">Part Quiz</a>' : '';

      return '\n      <div class="sidebar-group" data-part-group="' + _partNum + '">' +
             '\n        <button class="sidebar-group-header" data-group-toggle aria-expanded="false">' +
             '<span class="sidebar-chevron"></span>' +
             '<span class="sidebar-group-title">Part ' + _partNum + ' \u2014 ' + _meta.title + '</span>' +
             '<span class="item-badge" data-part-progress="' + _partNum + '">0/' + _topics.length + '</span>' +
             '</button>' +
             '\n        <div class="sidebar-group-body">' + _topicLinks + _fcLink + _qzLink + '\n        </div>' +
             '\n      </div>';
    }).join('');

    const _searchHtml = _showSearch
      ? '  <div id="sidebar-search-container" style="padding:var(--space-2) var(--space-4) var(--space-3)">\n' +
        '    <input id="sidebar-search" type="text" placeholder="\uD83D\uDD0D\u2002 Search topics\u2026"' +
        ' style="width:100%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:24px;padding:10px 16px;color:#fff;font-size:0.85rem;font-family:var(--font-body);outline:none;transition:0.2s">\n' +
        '  </div>'
      : '';
    const _revisionHtml = _showRevision
      ? '    <a href="' + _prefixPath + 'revision.html" class="sidebar-item sidebar-nav-tab"><span class="item-icon">\uD83E\uDDE0</span><span>Revision Center</span></a>'
      : '';
    const _quizzesHtml = _showQuizzes
      ? '    <a href="' + _prefixPath + 'quizzes.html" class="sidebar-item sidebar-nav-tab"><span class="item-icon">\u270F\uFE0F</span><span>Practice Quizzes</span></a>'
      : '';

    return [
      '<aside class="sidebar">',
      '  <div class="sidebar-logo">',
      '    <div class="sidebar-logo-icon" aria-hidden="true" style="background:linear-gradient(135deg,' + _accentColor + 'cc,' + _accentColor + ')">' + _icon + '</div>',
      '    <div>',
      '      <div class="sidebar-logo-text">' + _abbreviation + '</div>',
      '      <div class="sidebar-logo-sub">' + _courseTitle + '</div>',
      '    </div>',
      '  </div>',
      _searchHtml,
      '  <nav class="sidebar-nav">',
      '    <a href="' + _prefixPath + 'index.html" class="sidebar-item sidebar-nav-tab"><span class="item-icon">\u2302</span><span>Dashboard</span></a>',
      _groups,
      _revisionHtml,
      _quizzesHtml,
      '    <a href="#" onclick="ProgressManager.reset()" class="sidebar-item"><span class="item-icon">\u21BA</span><span>Reset Progress</span></a>',
      '  </nav>',
      '  <div class="sidebar-progress" id="sidebar-overall-progress">',
      '    <div class="sidebar-progress-label">',
      '      <span>Overall Progress</span>',
      '      <span data-overall-pct style="color:' + _accentColor + ';font-family:var(--font-mono)">0%</span>',
      '    </div>',
      '    <div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div>',
      '  </div>',
      '</aside>',
    ].join('\n');
  },
};

/* ============================================================
   SECTION 14 — SIDEBAR MANAGER
   Injects the generated sidebar HTML, then wires all
   interactive behaviours.
   ============================================================ */
const SidebarManager = (function () {

  const _DESKTOP_MQ       = window.matchMedia('(max-width: 900px)');
  const _COLLAPSED_KEY    = 'sidebarCollapsed';

  /* ── Public: inject HTML then wire everything ── */
  function injectAndInit() {
    const _container = document.getElementById('app-sidebar');
    if (!_container || !window.COURSE_CONFIG) return;

    const _prefix = _getPrefixPath();
    const _html   = SidebarBuilder.build(window.COURSE_CONFIG, _prefix);

    // Replace placeholder element with generated aside
    const _temp = document.createElement('div');
    _temp.innerHTML = _html.trim();
    const _aside = _temp.firstChild;
    _container.parentNode.replaceChild(_aside, _container);

    // Apply saved collapsed state immediately to prevent FOUC jank
    try {
      const _settingsKey = window.COURSE_CONFIG.settingsKey || 'prepassist_settings';
      const _saved = JSON.parse(localStorage.getItem(_settingsKey) || '{}');
      if (_saved[_COLLAPSED_KEY]) {
        document.body.classList.add('sidebar-collapsed');
        const _toggle = document.querySelector('.sidebar-desktop-toggle');
        if (_toggle) {
          _toggle.setAttribute('aria-label', 'Expand sidebar');
          _toggle.title = 'Expand sidebar';
        }
      }
    } catch (_e) {}

    // Inject theme toggle button at right end of every topbar
    document.querySelectorAll('.topbar').forEach(function (_topbar) {
      if (!_topbar.querySelector('.theme-toggle-btn')) {
        var _tb = document.createElement('button');
        _tb.className = 'theme-toggle-btn';
        _tb.id = 'theme-toggle-btn';
        _tb.title = 'Toggle dark/light mode';
        _tb.setAttribute('aria-label', 'Toggle dark/light mode');
        _tb.style.marginLeft = 'auto';
        _tb.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
        _tb.onclick = toggleTheme;
        _topbar.appendChild(_tb);
      }
    });

    init();
  }

  function init() {
    _highlightActive();
    _initMobileToggle();
    _initSidebarGroups();
    _renderProgressDots();
    _initAccordions();
    _prepareDesktopSidebarUI();
    initSidebarSearch();

    // Re-render dots whenever progress changes
    document.addEventListener('progressUpdated', _renderProgressDots);
  }

  /* ── Active item highlight ── */
  function _highlightActive() {
    // Clear any stale active state from templates
    document.querySelectorAll('.sidebar-item.active').forEach(function (_item) {
      _item.classList.remove('active');
    });
    document.querySelectorAll('.sidebar-group.open').forEach(function (_group) {
      _group.classList.remove('open');
    });

    const _currentPath = window.location.pathname.replace(/\\/g, '/');
    const _currentSegs = _currentPath.split('/').filter(Boolean);
    const _currentFile = _currentSegs[_currentSegs.length - 1] || 'index.html';

    // Auto-open the accordion group that matches the URL — keyed from partIndexFiles directory names
    const _pif = (window.COURSE_CONFIG && window.COURSE_CONFIG.partIndexFiles) || {};
    let _autoOpenPart = null;
    Object.keys(_pif).forEach(function (_key) {
      const _dir = (_pif[_key] || '').split('/')[0];
      if (_dir && _currentPath.indexOf('/' + _dir + '/') !== -1) { _autoOpenPart = _key; }
    });
    if (_autoOpenPart) {
      const _activeGroup = document.querySelector('.sidebar-group[data-part-group="' + _autoOpenPart + '"]');
      if (_activeGroup) {
        _activeGroup.classList.add('open');
        const _gh = _activeGroup.querySelector('[data-group-toggle]');
        if (_gh) _gh.setAttribute('aria-expanded', 'true');
      }
    }

    document.querySelectorAll('.sidebar-item[href]').forEach(function (_item) {
      const _rawHref = _item.getAttribute('href') || '';
      if (!_rawHref || _rawHref.startsWith('#')) return;

      const _resolvedPath = decodeURIComponent(
        new URL(_rawHref, window.location.href).pathname.replace(/\\/g, '/')
      );
      const _resolvedSegs = _resolvedPath.split('/').filter(Boolean);
      const _resolvedFile = _resolvedSegs[_resolvedSegs.length - 1] || '';

      const _isSamePath      = _resolvedPath.toLowerCase() === _currentPath.toLowerCase();
      const _isInPartFolder  = /part\d+-/.test(_currentPath);
      const _isDashboardMatch = _currentFile === 'index.html' &&
                                _resolvedFile === 'index.html' &&
                                !_isInPartFolder;

      if (_isSamePath || _isDashboardMatch) {
        _item.classList.add('active');
        const _group = _item.closest('.sidebar-group');
        if (_group) {
          _group.classList.add('open');
          const _gh = _group.querySelector('[data-group-toggle]');
          if (_gh) _gh.setAttribute('aria-expanded', 'true');
        }
      }
    });
  }

  /* ── Desktop collapse toggle ── */
  function _prepareDesktopSidebarUI() {
    const _sidebar = document.querySelector('.sidebar');
    const _topbar  = document.querySelector('.topbar');
    if (!_sidebar) return;

    // Tag utility sidebar items for short-label generation
    document.querySelectorAll('.sidebar-item').forEach(function (_item) {
      const _textSpan = _item.querySelector('span:not(.item-icon):not(.topic-dot)');
      const _label = (_textSpan || _item).textContent.trim().replace(/\s+/g, ' ');
      if (_label) {
        _item.dataset.shortLabel = _buildShortLabel(_label);
        _item.title = _label;
      }
      if ((_item.getAttribute('href') || '').trim() === '#') {
        _item.classList.add('sidebar-utility');
      }
    });

    document.querySelectorAll('.sidebar-group').forEach(function (_group) {
      const _header  = _group.querySelector('.sidebar-group-header');
      if (!_header) return;
      const _partNum = _group.dataset.partGroup || '';
      _header.dataset.shortLabel = 'P' + _partNum;
      _header.title = _header.textContent.trim().replace(/\s+/g, ' ');
      const _cfg = window.COURSE_CONFIG;
      if (_cfg && _cfg.partIndexFiles && _cfg.partIndexFiles[_partNum]) {
        _header.dataset.partIndex = _getPrefixPath() + _cfg.partIndexFiles[_partNum];
      }
    });

    if (_topbar && !_topbar.querySelector('.sidebar-desktop-toggle')) {
      const _btn = document.createElement('button');
      _btn.type      = 'button';
      _btn.className = 'sidebar-desktop-toggle';
      _btn.setAttribute('aria-label', 'Collapse sidebar');
      _btn.title     = 'Collapse sidebar';
      _btn.addEventListener('click', _toggleDesktopSidebar);
      _topbar.insertBefore(_btn, _topbar.firstChild);
    }

    _applySavedDesktopState();

    _DESKTOP_MQ.addEventListener('change', function () {
      const _sidebarEl = document.querySelector('.sidebar');
      const _overlay   = document.getElementById('sidebar-overlay') || document.getElementById('sbo');
      if (!_DESKTOP_MQ.matches && _sidebarEl) {
        _sidebarEl.classList.remove('open');
        if (_overlay) _overlay.classList.remove('show');
      }
      _applySavedDesktopState();
    });
  }

  function _buildShortLabel(_label) {
    const _normalized = _label.toLowerCase();
    const _specialMap = {
      'dashboard':     '\u2302',
      'set exam date': '\u25F7',
      'reset progress': '\u21BA',
      'flashcards':       '\uD83C\uDCCF',
      'part quiz':        '?',
      'practice quizzes': '\u270F\uFE0F',
      'revision center':  '\uD83E\uDDE0',
    };
    if (_specialMap[_normalized]) return _specialMap[_normalized];
    const _words = _label
      .replace(/&/g, ' ')
      .replace(/[^\w\s]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!_words.length) return '\u2022';
    if (/^\d+$/.test(_words[0])) return _words[0];
    if (_words.length === 1) return _words[0].slice(0, 2).toUpperCase();
    return (_words[0][0] + _words[1][0]).toUpperCase();
  }

  function _settingsKey() {
    return (window.COURSE_CONFIG && window.COURSE_CONFIG.settingsKey) || 'prepassist_settings';
  }

  function _loadSettings() {
    try { return JSON.parse(localStorage.getItem(_settingsKey())) || {}; }
    catch (_e) { return {}; }
  }

  function _saveSettings(_next) {
    try {
      const _current = _loadSettings();
      localStorage.setItem(_settingsKey(), JSON.stringify(Object.assign({}, _current, _next)));
    } catch (_e) {
      console.warn('PrepAssist Engine: Could not save settings:', _e);
    }
  }

  function _applySavedDesktopState() {
    const _collapsed = Boolean(_loadSettings()[_COLLAPSED_KEY]);
    document.body.classList.toggle('sidebar-collapsed', !_DESKTOP_MQ.matches && _collapsed);
    const _toggle = document.querySelector('.sidebar-desktop-toggle');
    if (_toggle) {
      const _label = _collapsed ? 'Expand sidebar' : 'Collapse sidebar';
      _toggle.setAttribute('aria-label', _label);
      _toggle.title = _label;
    }
  }

  function _toggleDesktopSidebar() {
    if (_DESKTOP_MQ.matches) return;
    const _next = !document.body.classList.contains('sidebar-collapsed');
    _saveSettings({ [_COLLAPSED_KEY]: _next });
    document.body.classList.toggle('sidebar-collapsed', _next);
    const _toggle = document.querySelector('.sidebar-desktop-toggle');
    if (_toggle) {
      const _label = _next ? 'Expand sidebar' : 'Collapse sidebar';
      _toggle.setAttribute('aria-label', _label);
      _toggle.title = _label;
    }
  }

  /* ── Mobile hamburger toggle ── */
  function _initMobileToggle() {
    const _toggle  = document.querySelector('.menu-toggle');
    const _sidebar = document.querySelector('.sidebar');
    const _overlay = document.getElementById('sidebar-overlay') || document.getElementById('sbo');

    if (!_toggle || !_sidebar) return;

    // Skip if the page already wired an onclick to avoid double-firing
    if (!_toggle.hasAttribute('onclick')) {
      _toggle.addEventListener('click', function () {
        _sidebar.classList.toggle('open');
        if (_overlay) _overlay.classList.toggle('show');
      });
    }

    if (_overlay) {
      _overlay.addEventListener('click', function () {
        _sidebar.classList.remove('open');
        _overlay.classList.remove('show');
      });
    }

    document.querySelectorAll('.sidebar-item[href]').forEach(function (_item) {
      _item.addEventListener('click', function () {
        if (_DESKTOP_MQ.matches && _sidebar.classList.contains('open')) {
          _sidebar.classList.remove('open');
          if (_overlay) _overlay.classList.remove('show');
        }
      });
    });
  }

  /* ── Accordion groups (Part groups in sidebar) ── */
  function _initSidebarGroups() {
    document.querySelectorAll('[data-group-toggle]').forEach(function (_btn) {
      _btn.addEventListener('click', function (_event) {
        const _group = _btn.closest('.sidebar-group');
        if (!_group) return;

        // When sidebar is collapsed on desktop, navigate to part index
        if (document.body.classList.contains('sidebar-collapsed')) {
          _event.preventDefault();
          _event.stopPropagation();
          const _partNum  = _group.dataset.partGroup || '';
          const _cfg      = window.COURSE_CONFIG;
          const _fallback = (_cfg && _cfg.partIndexFiles && _cfg.partIndexFiles[_partNum])
            ? _getPrefixPath() + _cfg.partIndexFiles[_partNum]
            : '';
          const _dest = _btn.dataset.partIndex || _fallback;
          if (_dest) window.location.assign(_dest);
          return;
        }

        _group.classList.toggle('open');
        _btn.setAttribute('aria-expanded', _group.classList.contains('open') ? 'true' : 'false');
      });
    });
  }

  /* ── Progress dots, badges, overall bar ── */
  function _renderProgressDots() {
    // Part badges
    document.querySelectorAll('[data-part-progress]').forEach(function (_el) {
      const _part = parseInt(_el.dataset.partProgress, 10);
      const _prog = ProgressManager.getPartProgress(_part);
      _el.textContent = _prog.done + '/' + _prog.total;
      if (_prog.pct === 100)   _el.style.color = 'var(--green-400)';
      else if (_prog.pct > 0)  _el.style.color = 'var(--blue-300)';
      else                     _el.style.color = '';
    });

    // Mark fully-complete groups
    document.querySelectorAll('[data-part-group]').forEach(function (_groupEl) {
      const _part = parseInt(_groupEl.dataset.partGroup, 10);
      const _prog = ProgressManager.getPartProgress(_part);
      _groupEl.classList.toggle('all-done', _prog.pct === 100);
    });

    // Per-topic dots
    document.querySelectorAll('[data-topic-check]').forEach(function (_dot) {
      _dot.classList.toggle('done', ProgressManager.isComplete(_dot.dataset.topicCheck));
    });

    // Overall footer bar
    const _overallEl = document.getElementById('sidebar-overall-progress');
    if (_overallEl) {
      const _ov    = ProgressManager.getOverallProgress();
      const _pctEl = _overallEl.querySelector('[data-overall-pct]');
      const _fill  = _overallEl.querySelector('.progress-fill');
      if (_pctEl) _pctEl.textContent    = _ov.pct + '%';
      if (_fill)  _fill.style.width     = _ov.pct + '%';
    }
  }

  /* ── Generic accordion elements (not sidebar groups) ── */
  function _initAccordions() {
    document.querySelectorAll('.accordion-trigger').forEach(function (_trigger) {
      _trigger.addEventListener('click', function () {
        const _item = _trigger.closest('.accordion-item');
        if (!_item) return;
        const _isOpen = _item.classList.contains('open');
        const _parent = _item.closest('.accordion');
        if (_parent) {
          _parent.querySelectorAll('.accordion-item').forEach(function (_i) { _i.classList.remove('open'); });
        }
        if (!_isOpen) _item.classList.add('open');
      });
    });
  }

  return { injectAndInit, init };
})();

/* ============================================================
   SECTION 15 — PAGE HELPERS
   Utility methods for dashboard and topic pages.
   Reads from COURSE_CONFIG so no hardcoded data.
   ============================================================ */
const PageHelpers = {

  /** Returns up to `limit` incomplete topics */
  getNextTopics: function (_limit) {
    if (_limit === undefined) _limit = 3;
    const _cfg     = window.COURSE_CONFIG || {};
    const _key     = _cfg.storageKey || 'prepassist_progress';
    const _reg     = _cfg.topicRegistry || [];
    const _data    = (function () {
      try { return JSON.parse(localStorage.getItem(_key)) || {}; }
      catch (_e) { return {}; }
    })();
    return _reg.filter(function (_t) { return !(_data[_t.id] && _data[_t.id].complete); }).slice(0, _limit);
  },

  /** Renders a mini progress card for a given part into containerId */
  renderPartCard: function (_partNum, _containerId) {
    const _el   = document.getElementById(_containerId);
    const _cfg  = window.COURSE_CONFIG || {};
    const _meta = _cfg.partsMeta && _cfg.partsMeta[_partNum];
    const _prog = ProgressManager.getPartProgress(_partNum);
    if (!_el || !_meta) return;

    _el.innerHTML = [
      '<div class="flex items-center justify-between mb-4">',
      '  <span style="font-size:1.4rem">' + (_meta.icon || '') + '</span>',
      '  <span class="badge" style="background:color-mix(in srgb,' + _meta.color + ' 15%,transparent);',
      '    color:' + _meta.color + ';border:1px solid color-mix(in srgb,' + _meta.color + ' 35%,transparent)">',
      '    ' + (_meta.weight || '') + '</span>',
      '</div>',
      '<h3 style="font-size:0.95rem;margin-bottom:var(--space-3)">' + _meta.title + '</h3>',
      '<div class="progress-labeled">',
      '  <div class="progress-bar">',
      '    <div class="progress-fill" style="width:' + _prog.pct + '%;background:linear-gradient(90deg,' + _meta.color + ',' + _meta.color + 'aa)"></div>',
      '  </div>',
      '  <span class="progress-pct" style="color:' + _meta.color + '">' + _prog.pct + '%</span>',
      '</div>',
      '<p style="font-size:0.75rem;color:var(--text-muted);margin-top:var(--space-2)">',
      '  ' + _prog.done + ' of ' + _prog.total + ' topics complete',
      '</p>',
    ].join('\n');
  },
};

/* ============================================================
   SECTION 15b — CHECKPOINT QUIZ SHUFFLER
   Shuffles options in click-to-reveal .checkpoint-q blocks so
   the correct answer isn't always the same letter on every load.
   ============================================================ */
function initCheckpointQuizzes() {
  var _alpha = ['A', 'B', 'C', 'D'];

  document.querySelectorAll('.checkpoint-q').forEach(function (_cq) {
    var _optionsEl = _cq.querySelector('.cq-options');
    var _answerEl  = _cq.querySelector('.cq-answer');
    if (!_optionsEl || !_answerEl) return;

    var _divs = Array.from(_optionsEl.children);
    if (_divs.length < 2) return;

    var _ansMatch = _answerEl.innerHTML.match(/Answer:\s*([A-D])/i);
    if (!_ansMatch) return;
    var _oldCorrect = _ansMatch[1].toUpperCase();

    var _items = _divs.map(function (_d) {
      var _lm = _d.innerHTML.match(/^([A-D])\)\s*/i);
      return {
        html:       _lm ? _d.innerHTML.slice(_lm[0].length) : _d.innerHTML,
        wasCorrect: _lm ? _lm[1].toUpperCase() === _oldCorrect : false,
      };
    });

    for (var _i = _items.length - 1; _i > 0; _i--) {
      var _j = Math.floor(Math.random() * (_i + 1));
      var _t = _items[_i]; _items[_i] = _items[_j]; _items[_j] = _t;
    }

    var _newCorrect = _oldCorrect;
    _items.forEach(function (_item, _idx) {
      _divs[_idx].innerHTML = _alpha[_idx] + ') ' + _item.html;
      if (_item.wasCorrect) _newCorrect = _alpha[_idx];
    });

    _answerEl.innerHTML = _answerEl.innerHTML.replace(
      /(Answer:\s*)[A-D]/i,
      '$1' + _newCorrect
    );
  });
}

/* ============================================================
   SECTION 16 — COURSE ENGINE — global init object
   Call CourseEngine.init() (or let DOMContentLoaded do it).
   ============================================================ */
const CourseEngine = {

  init: function () {
    SidebarManager.injectAndInit();
    ExamCountdown.init();
    initProgressBars();
    initCompletionCheckbox();
    initCopyButtons();
    initTabs();
    initSmoothScroll();
    initTooltips();
    initSidebarSearch();
    initCheckpointQuizzes();

    // Auto-init quiz containers
    document.querySelectorAll('[data-quiz]').forEach(function (_el) {
      const _id = _el.id || 'default-quiz';
      if (!_el.id) _el.id = _id;
      QuizEngine.init(_id);
      QuizEngine.wireOptions(_id);
    });

    // Auto-init flashcard decks
    document.querySelectorAll('[data-flashcard-deck]').forEach(function (_el) {
      FlashcardEngine.init(_el.dataset.flashcardDeck || _el.id);
    });

    // Auto-init try-it panels
    document.querySelectorAll('[data-tryit-panel]').forEach(function (_el) {
      TryItPanel.init(_el.id);
    });

    const _id = (window.COURSE_CONFIG && window.COURSE_CONFIG.id) || 'unknown';
    console.log('\u2705 PrepAssist Engine initialised for: ' + _id);
  },
};

/* ============================================================
   DARK / LIGHT MODE TOGGLE
   Shared across all PrepAssist courses.
   ============================================================ */
function toggleTheme() {
  var _isLight = document.body.classList.toggle('light-mode');
  try { localStorage.setItem('prepassist_theme', _isLight ? 'light' : 'dark'); } catch (_e) {}
  document.querySelectorAll('.theme-toggle-btn').forEach(function (_b) {
    _b.textContent = _isLight ? '🌙' : '☀️';
  });
}

// Apply saved theme before first render (anti-FOUC)
(function () {
  try {
    if (localStorage.getItem('prepassist_theme') === 'light') {
      document.body.classList.add('light-mode');
    }
  } catch (_e) {}
})();

/* ============================================================
   BOOT — auto-init on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () { CourseEngine.init(); });
window.addEventListener('pageshow', function (e) {
  if (e.persisted) document.dispatchEvent(new CustomEvent('progressUpdated'));
});

/* ============================================================
   EXPOSE GLOBALS
   Makes all public APIs available to inline onclick="" attrs
   and to course-specific scripts loaded after this file.
   ============================================================ */
window.CourseEngine    = CourseEngine;
window.ProgressManager = ProgressManager;
window.QuizEngine      = QuizEngine;
window.FlashcardEngine = FlashcardEngine;
window.TryItPanel      = TryItPanel;
window.PageHelpers     = PageHelpers;
window.ExamCountdown   = ExamCountdown;
window.SidebarBuilder  = SidebarBuilder;
window.SidebarManager  = SidebarManager;
window.switchCourse    = switchCourse;
window.toggleTheme     = toggleTheme;

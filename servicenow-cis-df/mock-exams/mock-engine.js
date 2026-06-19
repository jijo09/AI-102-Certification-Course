/* mock-engine.js — CIS-DF Mock Exam Engine */
/* Called by each exam: MockExam.init({ questions, examId, title, examNum }) */
(function (global) {
  'use strict';

  var MockExam = {
    _q: [], _answers: {}, _flags: {}, _ptr: 0,
    _timerSec: 5400, _interval: null, _submitted: false, _cfg: {},

    init: function (cfg) {
      this._cfg = cfg;
      this._q = cfg.questions;
      this._answers = {}; this._flags = {};
      this._ptr = 0; this._submitted = false; this._timerSec = 5400;
      this._build();
      this._renderQ(0);
      this._startTimer();
    },

    _build: function () {
      var n = this._q.length;
      document.getElementById('mock-exam-root').innerHTML =
        '<div class="me-strip" id="me-strip">' +
          '<div class="me-strip-left">' +
            '<div><div class="me-sl">Question</div><div class="me-sv"><span id="me-qnum">1</span>&nbsp;/&nbsp;' + n + '</div></div>' +
            '<div><div class="me-sl">Answered</div><div class="me-sv" id="me-answered">0</div></div>' +
            '<div><div class="me-sl">Flagged</div><div class="me-sv" id="me-flagged" style="color:#fbbf24">0</div></div>' +
          '</div>' +
          '<div class="me-timer" id="me-timer">90:00</div>' +
          '<button class="me-submit-btn" id="me-submit-btn" onclick="MockExam._confirmSubmit()">Submit Exam</button>' +
        '</div>' +
        '<div class="me-dots" id="me-dots">' + this._buildDots() + '</div>' +
        '<div id="me-qarea"></div>' +
        '<div class="me-nav" id="me-nav">' +
          '<button class="me-nav-btn" onclick="MockExam._goto(MockExam._ptr-1)">← Prev</button>' +
          '<button class="me-flag-btn" id="me-flag-btn" onclick="MockExam._toggleFlag()">🚩 Flag</button>' +
          '<button class="me-nav-btn" onclick="MockExam._goto(MockExam._ptr+1)">Next →</button>' +
        '</div>' +
        '<div id="me-results" style="display:none"></div>';
    },

    _buildDots: function () {
      var self = this;
      return this._q.map(function (_, i) {
        var cls = 'me-dot';
        if (i === self._ptr)          cls += ' me-dot-cur';
        else if (self._flags[i])      cls += ' me-dot-flag';
        else if (self._answers[i] !== undefined) cls += ' me-dot-done';
        return '<span class="' + cls + '" onclick="MockExam._goto(' + i + ')">' + (i + 1) + '</span>';
      }).join('');
    },

    _refreshDots: function () {
      var el = document.getElementById('me-dots');
      if (el) el.innerHTML = this._buildDots();
    },

    _startTimer: function () {
      var self = this;
      var el = document.getElementById('me-timer');
      this._interval = setInterval(function () {
        if (self._submitted) { clearInterval(self._interval); return; }
        self._timerSec--;
        var m = Math.floor(self._timerSec / 60);
        var s = self._timerSec % 60;
        el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        el.className = 'me-timer' + (self._timerSec <= 300 ? ' me-timer-red' : self._timerSec <= 900 ? ' me-timer-amber' : '');
        if (self._timerSec <= 0) { clearInterval(self._interval); self._submit(); }
      }, 1000);
    },

    _renderQ: function (idx) {
      var q = this._q[idx];
      var isMulti = q.type === 'multi';
      var ua = this._answers[idx];
      var dc = this._dc(q.domain);
      var letters = ['A','B','C','D','E'];

      var optsHtml = q.opts.map(function (opt, oi) {
        var sel = isMulti ? ((ua || []).indexOf(oi) >= 0) : (ua === oi);
        return '<button class="me-opt' + (sel ? ' me-opt-sel' : '') + '" onclick="MockExam._pick(' + idx + ',' + oi + ')">' +
          '<span class="me-opt-l">' + letters[oi] + '</span>' +
          '<span class="me-opt-t">' + opt + '</span>' +
          '</button>';
      }).join('');

      document.getElementById('me-qarea').innerHTML =
        '<div class="me-qcard">' +
          '<div class="me-domain-tag" style="background:' + dc.bg + ';color:' + dc.fg + '">' + q.domain + '</div>' +
          (isMulti ? '<div class="me-multi-hint">Select ' + this._cw(q.multiCount) + ' (' + q.multiCount + ') answers</div>' : '') +
          (q.scenario ? '<div class="me-scenario"><span class="me-sc-label">Scenario</span> ' + q.scenario + '</div>' : '') +
          '<p class="me-qtext">' + q.q + '</p>' +
          '<div class="me-opts">' + optsHtml + '</div>' +
          (this._flags[idx] ? '<div class="me-flag-ind">🚩 Flagged for review</div>' : '') +
        '</div>';

      document.getElementById('me-qnum').textContent = idx + 1;
      var fb = document.getElementById('me-flag-btn');
      if (fb) fb.textContent = this._flags[idx] ? '🚩 Unflag' : '🚩 Flag';
      this._updateStrip();
      this._refreshDots();
    },

    _pick: function (qIdx, oi) {
      if (this._submitted) return;
      var q = this._q[qIdx];
      if (q.type === 'multi') {
        var arr = (this._answers[qIdx] || []).slice();
        var pos = arr.indexOf(oi);
        if (pos >= 0) arr.splice(pos, 1); else arr.push(oi);
        this._answers[qIdx] = arr;
      } else {
        this._answers[qIdx] = oi;
      }
      this._renderQ(qIdx);
    },

    _toggleFlag: function () {
      var i = this._ptr;
      this._flags[i] = !this._flags[i];
      this._renderQ(i);
    },

    _goto: function (idx) {
      if (idx < 0 || idx >= this._q.length) return;
      this._ptr = idx;
      this._renderQ(idx);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    _updateStrip: function () {
      var ans = 0, flg = 0;
      for (var k in this._answers) { if (this._answers[k] !== undefined) ans++; }
      for (var f in this._flags)   { if (this._flags[f]) flg++; }
      var ea = document.getElementById('me-answered'); if (ea) ea.textContent = ans;
      var ef = document.getElementById('me-flagged');  if (ef) ef.textContent = flg;
    },

    _confirmSubmit: function () {
      var unanswered = this._q.length - Object.keys(this._answers).length;
      if (unanswered > 0 && !confirm(unanswered + ' question(s) unanswered. Submit anyway?')) return;
      this._submit();
    },

    _submit: function () {
      this._submitted = true;
      clearInterval(this._interval);
      ['me-strip','me-dots','me-qarea','me-nav'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
      this._showResults();
    },

    _calcScore: function () {
      var self = this;
      var correct = 0;
      var byDomain = {};
      this._q.forEach(function (q, i) {
        if (!byDomain[q.domain]) byDomain[q.domain] = { c: 0, t: 0 };
        byDomain[q.domain].t++;
        var ok = self._isCorrect(i);
        if (ok) { correct++; byDomain[q.domain].c++; }
      });
      return { correct: correct, total: this._q.length, byDomain: byDomain };
    },

    _isCorrect: function (i) {
      var q = this._q[i];
      var ua = this._answers[i];
      if (q.type === 'multi') {
        return ((ua || []).slice().sort().join(',') === q.correct.slice().sort().join(','));
      }
      return ua === q.correct[0];
    },

    _showResults: function () {
      var sc = this._calcScore();
      var pct = Math.round((sc.correct / sc.total) * 100);
      var pass = pct >= 70;
      var key = 'cisdf_mock_' + (this._cfg.examId || 'exam');
      var prev = parseInt(localStorage.getItem(key) || '0', 10);
      if (pct > prev) localStorage.setItem(key, pct);

      var domRows = Object.keys(sc.byDomain).map(function (d) {
        var r = sc.byDomain[d];
        var dp = Math.round((r.c / r.t) * 100);
        var col = dp >= 70 ? '#22c55e' : dp >= 50 ? '#fbbf24' : '#ef4444';
        return '<div class="me-drow"><span class="me-dname">' + d + '</span>' +
          '<div class="me-dbar-wrap"><div class="me-dbar" style="width:' + dp + '%;background:' + col + '"></div></div>' +
          '<span class="me-dpct" style="color:' + col + '">' + r.c + '/' + r.t + ' — ' + dp + '%</span></div>';
      }).join('');

      var offset = 251.2 - (251.2 * pct / 100);
      var rc = pass ? '#22c55e' : '#ef4444';
      document.getElementById('me-results').style.display = 'block';
      document.getElementById('me-results').innerHTML =
        '<div class="me-rcard">' +
          '<div class="score-circle"><svg class="score-svg">' +
            '<circle class="score-bg" cx="60" cy="60" r="40"></circle>' +
            '<circle class="score-fill" id="me-ring" cx="60" cy="60" r="40" style="stroke:' + rc + '"></circle>' +
          '</svg><div class="score-text" style="color:' + rc + '">' + pct + '%</div></div>' +
          '<div class="me-verdict" style="color:' + rc + '">' + (pass ? '✓ PASS' : '✗ FAIL') + '</div>' +
          '<p class="me-vsub">' + sc.correct + ' / ' + sc.total + ' correct &nbsp;·&nbsp; Pass mark: 70% (' + Math.ceil(sc.total * 0.7) + '/' + sc.total + ')</p>' +
          '<div class="me-breakdown"><div class="me-bd-title">Domain Breakdown</div>' + domRows + '</div>' +
          '<div class="me-rbtns">' +
            '<button class="me-rbtn-primary" onclick="MockExam._showReview()">Review All Questions →</button>' +
            '<a href="index.html" class="me-rbtn-ghost">← Mock Exam Hub</a>' +
          '</div>' +
        '</div>';
      setTimeout(function () {
        var ring = document.getElementById('me-ring');
        if (ring) ring.style.strokeDashoffset = offset;
      }, 200);
    },

    _showReview: function () {
      var self = this;
      var letters = ['A','B','C','D','E'];
      var html = this._q.map(function (q, i) {
        var ok = self._isCorrect(i);
        var ua = self._answers[i];
        var dc = self._dc(q.domain);
        var ca = q.correct.map(function (c) { return letters[c]; }).join(', ');
        var optsHtml = q.opts.map(function (opt, oi) {
          var isC = q.correct.indexOf(oi) >= 0;
          var isU = q.type === 'multi' ? ((ua || []).indexOf(oi) >= 0) : (ua === oi);
          var cls = 'me-rv-opt' + (isC ? ' me-rv-correct' : (isU && !isC ? ' me-rv-wrong' : ''));
          return '<div class="' + cls + '">' + letters[oi] + '. ' + opt + (isC ? ' ✓' : (isU && !isC ? ' ✗' : '')) + '</div>';
        }).join('');
        return '<div class="me-rv-item ' + (ok ? 'me-rv-ok' : 'me-rv-bad') + '">' +
          '<div class="me-rv-hd"><span class="me-rv-num">Q' + (i+1) + '</span>' +
            '<span style="font-size:0.6rem;padding:2px 6px;border-radius:8px;background:' + dc.bg + ';color:' + dc.fg + '">' + q.domain + '</span>' +
            '<span class="me-rv-verdict">' + (ok ? '✓ Correct' : '✗ Incorrect') + '</span></div>' +
          (q.scenario ? '<div class="me-rv-sc"><strong>Scenario:</strong> ' + q.scenario + '</div>' : '') +
          '<p class="me-rv-qt">' + q.q + '</p>' +
          '<div class="me-rv-opts">' + optsHtml + '</div>' +
          (q.type === 'multi' ? '<div class="me-rv-ca">Correct: ' + ca + '</div>' : '') +
          '<div class="me-rv-exp"><strong>Explanation:</strong> ' + q.exp + '</div>' +
        '</div>';
      }).join('');
      document.getElementById('me-results').innerHTML =
        '<div class="me-rcard">' +
          '<div class="me-rv-top"><button class="me-rbtn-ghost" onclick="MockExam._showResults()">← Results</button>' +
          '<h2>Full Review — All ' + this._q.length + ' Questions</h2></div>' +
          html +
          '<div class="me-rbtns" style="margin-top:var(--space-8)">' +
            '<button class="me-rbtn-ghost" onclick="MockExam._showResults()">← Results</button>' +
            '<a href="index.html" class="me-rbtn-ghost">Mock Exam Hub</a>' +
          '</div>' +
        '</div>';
    },

    _dc: function (domain) {
      return {
        GOVERN:  { bg: 'rgba(168,85,247,0.14)', fg: '#c084fc' },
        INGEST:  { bg: 'rgba(8,145,178,0.14)',  fg: '#22d3ee' },
        CONFIG:  { bg: 'rgba(34,197,94,0.14)',  fg: '#4ade80' },
        INSIGHT: { bg: 'rgba(251,191,36,0.14)', fg: '#fbbf24' },
        CSDM:    { bg: 'rgba(239,68,68,0.14)',  fg: '#f87171' },
      }[domain] || { bg: 'rgba(255,255,255,0.08)', fg: 'var(--text-secondary)' };
    },

    _cw: function (n) { return ['','ONE','TWO','THREE','FOUR'][n] || String(n); }
  };

  global.MockExam = MockExam;
})(window);

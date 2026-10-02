/* LIMIK Core (design system v2) — page behavior.
   Source: docs/prototypes/modular-color-preview.html. Content stays in the HTML; JS only adds motion and state. */
(function () {
  var mqMobile = window.matchMedia('(max-width: 1199px)'); // Configurations cards stack below 1200px

  // Facts: count only when each card is mostly visible (same 1.8s ease-out as home stats).
  var facts = document.querySelector('.mdc-page .mtA');
  var factCounters = facts ? [].slice.call(facts.querySelectorAll('[data-count-to]')) : [];
  if (facts && factCounters.length && 'IntersectionObserver' in window) {
    factCounters.forEach(function (el) {
      var dec0 = Number(el.getAttribute('data-count-decimals')) || 0;
      el.textContent = (el.getAttribute('data-count-prefix') || '') + (el.getAttribute('data-count-sign') || '') + (0).toFixed(dec0);
    });
    var factObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.6) return;
        var counters = [].slice.call(entry.target.querySelectorAll('[data-count-to]'));
        factObserver.unobserve(entry.target);
        var duration = 1800;
        var startedAt = performance.now();
        function update(now) {
          var progress = Math.min((now - startedAt) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          counters.forEach(function (el) {
            var target = Number(el.getAttribute('data-count-to'));
            var dec = Number(el.getAttribute('data-count-decimals')) || 0;
            var value = progress === 1 ? target : (dec ? eased * target : Math.round(eased * target));
            var sign = el.getAttribute('data-count-sign') || '';
            el.textContent = (el.getAttribute('data-count-prefix') || '') + sign + (sign ? Math.abs(value) : value).toFixed(dec);
          });
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
    }, { threshold: 0.6 });
    facts.querySelectorAll('.mtA-cell').forEach(function (cell) {
      factObserver.observe(cell);
    });
  }

  // Hero: split h1 into words for the clip-reveal (same as the home page, 0.09s step)
  document.querySelectorAll('.mdc-page .hero h1').forEach(function (h1) {
    var words = h1.textContent.trim().split(/\s+/);
    h1.setAttribute('aria-label', words.join(' '));
    h1.textContent = '';
    words.forEach(function (w, i) {
      var wrap = document.createElement('span');
      wrap.className = 'word-wrap';
      wrap.setAttribute('aria-hidden', 'true');
      var s = document.createElement('span');
      s.className = 'split-word';
      s.style.animationDelay = (i * 0.09) + 's';
      s.textContent = w;
      wrap.appendChild(s);
      h1.appendChild(wrap);
      if (i < words.length - 1) h1.appendChild(document.createTextNode(' '));
    });
  });

  // Platform: highlight the chain item of the card crossing the middle of the viewport
  var links = [].slice.call(document.querySelectorAll('.chain a'));
  var cards = [].slice.call(document.querySelectorAll('.pcard'));
  function spy() {
    var mid = window.innerHeight * 0.5, cur = cards[0];
    cards.forEach(function (c) { if (c.getBoundingClientRect().top <= mid) cur = c; });
    links.forEach(function (l) { l.classList.toggle('is-current', l.getAttribute('href') === '#' + cur.id); });
  }
  if (links.length && cards.length) {
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    spy();
  }

  // Configurations: common facts stay visible; one detail panel on desktop, all on mobile.
  var accCards = [].slice.call(document.querySelectorAll('.acc-card'));
  function syncCards() {
    accCards.forEach(function (c) {
      var on = mqMobile.matches || c.classList.contains('is-active');
      var toggle = c.querySelector('.acc-toggle');
      toggle.setAttribute('aria-expanded', on ? 'true' : 'false');
      toggle.querySelector('span').textContent = on ? 'Details open' : 'View configuration';
      c.querySelector('.acc-img').inert = !on;
      c.querySelector('.acc-btn').inert = !on;
    });
  }
  // Text (summary + tags) fades out, the cards change width, then the text fades back in.
  // The text reflows while invisible, so it never jumps during the width animation.
  var accWrap = document.querySelector('.mdc-page .acc');
  var accT1, accT2;
  function openCard(c) {
    if (mqMobile.matches) return;
    clearTimeout(accT1); clearTimeout(accT2);
    if (accWrap) accWrap.classList.add('is-switching');
    accT1 = setTimeout(function () {
      accCards.forEach(function (x) {
        x.classList.toggle('is-active', x === c);
      });
      syncCards();
      accT2 = setTimeout(function () { if (accWrap) accWrap.classList.remove('is-switching'); }, 520);
    }, 150);
  }
  accCards.forEach(function (c) {
    c.addEventListener('click', function (e) {
      if (e.target.closest('a, button') || c.classList.contains('is-active') || mqMobile.matches) return;
      openCard(c);
    });
    c.querySelector('.acc-toggle').addEventListener('click', function () {
      openCard(c);
      c.querySelector('.acc-btn').focus({ preventScroll: true });
    });
  });
  mqMobile.addEventListener('change', syncCards);
  syncCards();

  // Stacked cards enter individually, with the same fade and lift as the FAQ panels.
  if (accCards.length && 'IntersectionObserver' in window) {
    var accObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.15) return;
        entry.target.classList.add('is-in');
        accObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    function syncCardReveal() {
      accObserver.disconnect();
      accCards.forEach(function (c) {
        var pending = mqMobile.matches && !c.classList.contains('is-in');
        c.classList.toggle('js-reveal', pending);
        if (pending) accObserver.observe(c);
      });
    }
    mqMobile.addEventListener('change', syncCardReveal);
    syncCardReveal();
  }

  // Specifications: always one section open
  var spx = [].slice.call(document.querySelectorAll('.spx-item'));
  spx.forEach(function (it) {
    it.querySelector('.spx-head').addEventListener('click', function () {
      spx.forEach(function (x) {
        var on = x === it;
        x.classList.toggle('is-open', on);
        x.querySelector('.spx-head').setAttribute('aria-expanded', on ? 'true' : 'false');
      });
    });
  });

  // Timeline: fill the line once when it comes into view
  var steps = document.querySelector('.steps');
  if (steps && 'IntersectionObserver' in window) {
    steps.classList.add('js-anim');
    var sio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { steps.classList.add('is-run'); sio.disconnect(); } });
    }, { threshold: 0.35 });
    sio.observe(steps);
  }

  // FAQ: category tabs + one answer open at a time (Modulabs: open 400ms, close 300ms, ease-out)
  var fq = document.querySelector('.fq-panes');
  if (fq) {
    var setOpen = function (item, on) {
      var a = item.querySelector('.fq-a'), q = item.querySelector('.fq-q');
      if (item.classList.contains('is-open') === on) return;
      a.style.transition = 'none';
      a.style.height = on ? '0px' : a.scrollHeight + 'px';
      a.offsetHeight; // reflow
      a.style.transition = on ? 'height .4s ease-out, opacity .3s ease-out .1s' : 'height .3s ease-out, opacity .3s ease-out';
      item.classList.toggle('is-open', on);
      q.setAttribute('aria-expanded', on ? 'true' : 'false');
      if (on) { a.removeAttribute('inert'); a.style.height = a.scrollHeight + 'px'; }
      else { a.setAttribute('inert', ''); a.style.height = '0px'; }
      a.addEventListener('transitionend', function te(e) {
        if (e.propertyName !== 'height') return;
        a.removeEventListener('transitionend', te);
        if (item.classList.contains('is-open')) a.style.height = 'auto';
      });
    };
    fq.querySelectorAll('.fq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.fq-item'), on = !item.classList.contains('is-open');
        if (on) item.parentNode.querySelectorAll('.fq-item.is-open').forEach(function (x) { if (x !== item) setOpen(x, false); });
        setOpen(item, on);
      });
    });
    var tabs = [].slice.call(document.querySelectorAll('.fq-tab'));
    var selectTab = function (t) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).classList.toggle('is-active', on);
      });
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { selectTab(t); });
      t.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = tabs[(i + d + tabs.length) % tabs.length];
        selectTab(n); n.focus();
      });
    });
    if ('IntersectionObserver' in window) {
      fq.classList.add('js-reveal');
      var fio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { fq.classList.add('is-in'); fio.disconnect(); } });
      }, { threshold: 0.15 });
      fio.observe(fq);
    }
  }

  // Lead form: product preselected by page (?product= overrides), capacity only for LIMIK Core, errors under fields.
  // Draft: no handler/CRM yet (step 5) — submit only validates and shows the thank-you text.
  var qf = document.getElementById('qform');
  var setProjectDetails = null;
  if (qf) {
    // Keep native details as the fallback; animate its panel without snapping shut.
    var projectDetails = qf.querySelector('.lf-more');
    var detailsPanel = projectDetails && projectDetails.querySelector('.lf-more-panel');
    if (detailsPanel && typeof detailsPanel.animate === 'function') {
      var detailsSummary = projectDetails.querySelector('summary');
      var detailsExpanded = projectDetails.open, detailsAnimation = null;
      projectDetails.classList.add('js-details');
      projectDetails.classList.toggle('is-expanded', detailsExpanded);
      detailsSummary.setAttribute('aria-controls', detailsPanel.id);
      detailsSummary.setAttribute('aria-expanded', String(detailsExpanded));
      detailsPanel.toggleAttribute('inert', !detailsExpanded);
      if (detailsExpanded) { detailsPanel.style.height = 'auto'; detailsPanel.style.opacity = '1'; }
      setProjectDetails = function (on) {
        if (detailsExpanded === on) return;
        var height = projectDetails.open ? detailsPanel.getBoundingClientRect().height : 0;
        var opacity = projectDetails.open ? getComputedStyle(detailsPanel).opacity : '0';
        detailsPanel.style.height = height + 'px';
        detailsPanel.style.opacity = opacity;
        if (detailsAnimation) detailsAnimation.cancel();
        detailsExpanded = on;
        if (on) projectDetails.open = true;
        projectDetails.classList.toggle('is-expanded', on);
        detailsSummary.setAttribute('aria-expanded', String(on));
        if (!on && detailsPanel.contains(document.activeElement)) detailsSummary.focus({ preventScroll: true });
        detailsPanel.toggleAttribute('inert', !on);
        var animation = detailsPanel.animate([
          { height: height + 'px', opacity: opacity },
          { height: (on ? detailsPanel.scrollHeight : 0) + 'px', opacity: on ? 1 : 0 }
        ], { duration: on ? 400 : 300, easing: 'ease-out', fill: 'both' });
        detailsAnimation = animation;
        animation.finished.then(function () {
          if (detailsAnimation !== animation) return;
          detailsPanel.style.height = on ? 'auto' : '0px';
          detailsPanel.style.opacity = on ? '1' : '0';
          if (!on) projectDetails.open = false;
          animation.cancel();
          detailsAnimation = null;
        }).catch(function () { /* A new click reverses the current animation. */ });
      };
      detailsSummary.addEventListener('click', function (e) {
        e.preventDefault();
        setProjectDetails(!detailsExpanded);
      });
      projectDetails.addEventListener('toggle', function () {
        if (detailsAnimation || projectDetails.open === detailsExpanded) return;
        detailsExpanded = projectDetails.open;
        projectDetails.classList.toggle('is-expanded', detailsExpanded);
        detailsSummary.setAttribute('aria-expanded', String(detailsExpanded));
        detailsPanel.toggleAttribute('inert', !detailsExpanded);
        detailsPanel.style.height = detailsExpanded ? 'auto' : '0px';
        detailsPanel.style.opacity = detailsExpanded ? '1' : '0';
      });
    }
    var qs = new URLSearchParams(location.search), pre = qs.get('product');
    if (pre) { var r = qf.querySelector('input[name=product][value="' + pre + '"]'); if (r) r.checked = true; }
    var sizeF = qf.querySelector('[data-f="capacity"]');
    var modelField = document.getElementById('q-model-field');
    var modelSelect = document.getElementById('q-model');
    var syncSize = function () {
      var v = (qf.querySelector('input[name=product]:checked') || {}).value;
      if (sizeF) sizeF.hidden = (v !== 'limik-core');
      if (modelField && modelSelect) {
        modelField.hidden = v !== 'limik-core' || !modelSelect.value;
        modelSelect.disabled = v !== 'limik-core';
      }
    };
    qf.querySelectorAll('input[name=product]').forEach(function (r) { r.addEventListener('change', syncSize); });
    syncSize();
    qf.querySelectorAll('.lf input').forEach(function (el) {
      el.addEventListener('input', function () {
        var f = el.closest('.lf'); f.classList.remove('is-bad');
        var e = f.querySelector('.qerr'); if (e) e.hidden = true;
      });
    });
    qf.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var bad = null;
      qf.querySelectorAll('[required]').forEach(function (el) {
        var f = el.closest('.lf'), v = el.value.trim();
        var ok = v && (el.type !== 'email' || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
        f.classList.toggle('is-bad', !ok);
        f.querySelector('.qerr').hidden = !!ok;
        if (!ok && !bad) bad = el;
      });
      if (bad) { bad.focus(); return; }
      qf.innerHTML = '<h3 class="lead-thanks">Draft preview complete. No request has been sent.</h3>';
    });
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) {
      var el = qf.querySelector('[name=' + k + ']'); if (el) el.value = qs.get(k) || '';
    });
  }

  // CTA links: scroll to the form, open details when needed, put the cursor in the first field
  document.querySelectorAll('a[data-go]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var sec = document.getElementById('configure');
      if (!sec) return;
      e.preventDefault();
      var go = a.getAttribute('data-go'), target = document.getElementById('q-name');
      var model = a.getAttribute('data-model');
      if (model && qf) {
        var product = qf.querySelector('input[name="product"][value="limik-core"]');
        var selection = qf.querySelector('[name="configuration"]');
        if (product) { product.checked = true; product.dispatchEvent(new Event('change', { bubbles: true })); }
        if (selection) { selection.value = model; selection.disabled = false; selection.closest('.lf').hidden = false; }
      }
      if (go === 'schedule' || go === 'fit') {
        if (setProjectDetails) setProjectDetails(true);
        else { var d = sec.querySelector('.lf-more'); if (d) d.open = true; }
      }
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function () { if (target) target.focus({ preventScroll: true }); }, 500);
      if (history.replaceState) history.replaceState(null, '', '#configure');
    });
  });
})();

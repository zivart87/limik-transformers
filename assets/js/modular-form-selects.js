/* All Modular form selects share the same downward-opening list. */
(function () {
  'use strict';
  var form = document.getElementById('qform');
  if (!form) return;
  var widgets = [];
  form.querySelectorAll('select').forEach(function (select) {
    var field = select.closest('.lf');
    var label = field.querySelector('label');
    var wrap = document.createElement('div');
    wrap.className = 'lf-select';
    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'lf-select-trigger';
    trigger.id = select.id + '-trigger';
    trigger.setAttribute('role', 'combobox');
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    label.id = select.id + '-label';
    var caption = document.createElement('span');
    caption.id = select.id + '-value';
    trigger.appendChild(caption);
    trigger.setAttribute('aria-labelledby', label.id + ' ' + caption.id);
    var list = document.createElement('div');
    list.className = 'lf-select-list';
    list.id = select.id + '-list';
    list.hidden = true;
    list.setAttribute('role', 'listbox');
    list.setAttribute('aria-labelledby', label.id);
    trigger.setAttribute('aria-controls', list.id);
    var options = Array.from(select.options);
    var active = 0, search = '', lastKey = 0;
    var items = options.map(function (option, index) {
      var item = document.createElement('div');
      item.className = 'lf-select-option';
      item.id = select.id + '-option-' + index;
      item.setAttribute('role', 'option');
      item.textContent = option.textContent;
      item.addEventListener('pointerdown', function (event) { event.preventDefault(); });
      item.addEventListener('click', function () { choose(index); });
      list.appendChild(item);
      return item;
    });
    function close() {
      list.hidden = true;
      wrap.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.removeAttribute('aria-activedescendant');
      search = '';
    }
    function highlight(index) {
      active = Math.max(0, Math.min(options.length - 1, index));
      items.forEach(function (item, i) { item.classList.toggle('is-active', i === active); });
      trigger.setAttribute('aria-activedescendant', items[active].id);
      // Scroll within the list only, keeping the field anchored on the page.
      var item = items[active];
      if (item.offsetTop < list.scrollTop) list.scrollTop = item.offsetTop;
      else if (item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = item.offsetTop + item.offsetHeight - list.clientHeight;
    }
    function fit() {
      var bottom = trigger.getBoundingClientRect().bottom;
      list.style.maxHeight = Math.max(52, Math.min(260, window.innerHeight - bottom - 24)) + 'px';
    }
    function open() {
      if (trigger.disabled) return;
      widgets.forEach(function (widget) { widget.close(); });
      if (window.innerHeight - trigger.getBoundingClientRect().bottom < 200) trigger.scrollIntoView({ behavior: 'instant', block: 'center' });
      list.hidden = false;
      wrap.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      fit();
      highlight(Math.max(0, select.selectedIndex));
    }
    function refresh() {
      caption.textContent = options[Math.max(0, select.selectedIndex)].textContent;
      trigger.disabled = select.disabled;
      items.forEach(function (item, i) { item.setAttribute('aria-selected', String(i === select.selectedIndex)); });
    }
    function choose(index) {
      select.value = options[index].value;
      close();
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
      trigger.focus({ preventScroll: true });
    }
    trigger.addEventListener('click', function () { if (list.hidden) open(); else close(); });
    trigger.addEventListener('keydown', function (event) {
      var key = event.key;
      if (key === 'Escape') { close(); event.preventDefault(); return; }
      if (key === 'Tab') { if (!list.hidden) choose(active); return; }
      if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].indexOf(key) !== -1) {
        event.preventDefault();
        if (list.hidden) { open(); if (key === 'Home') highlight(0); if (key === 'End') highlight(options.length - 1); return; }
        if (key === 'Enter' || key === ' ') choose(active);
        else highlight(key === 'Home' ? 0 : key === 'End' ? options.length - 1 : active + (key === 'ArrowDown' ? 1 : -1));
      } else if (key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        if (list.hidden) open();
        var now = Date.now();
        search = now - lastKey < 700 ? search + key.toLowerCase() : key.toLowerCase();
        lastKey = now;
        var index = options.findIndex(function (option) { return option.textContent.toLowerCase().startsWith(search); });
        if (index !== -1) highlight(index);
      }
    });
    trigger.addEventListener('blur', function () { close(); });
    document.addEventListener('pointerdown', function (event) { if (!wrap.contains(event.target)) close(); });
    window.addEventListener('resize', function () { if (!list.hidden) fit(); });
    window.addEventListener('scroll', function () { if (!list.hidden) fit(); }, { passive: true });
    select.before(wrap);
    wrap.appendChild(select);
    wrap.appendChild(trigger);
    wrap.appendChild(list);
    select.hidden = true;
    label.htmlFor = trigger.id;
    widgets.push({ close: close, refresh: refresh });
    refresh();
  });
  // Product switching restores saved native select values before this bubbles.
  form.addEventListener('change', function () { widgets.forEach(function (widget) { widget.close(); widget.refresh(); }); });
})();

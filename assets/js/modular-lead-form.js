/* Modular lead delivery. Keep data-delivery="preview" until the GHL mapping is verified. */
(function () {
  'use strict';
  var form = document.getElementById('qform');
  if (!form) return;
  var button = form.querySelector('[type="submit"]');
  var status = document.getElementById('q-status');
  var busy = false, sent = false;
  var testMode = new URLSearchParams(window.location.search).get('form-test') === '1';
  var endpoint = 'https://services.leadconnectorhq.com/hooks/J26g7N7tbNqN9LDOAD1K/webhook-trigger/jKMX6ff0ycjtE4mD2h3R';
  var products = { 'limik-core': 'limik-core', power: 'power', autotransformer: 'auto', gsu: 'gsu', mobile: 'mobile', other: 'unsure' };
  if (testMode) {
    button.textContent = 'Send test request';
    var note = document.getElementById('q-submit-note');
    if (note && note.firstChild) note.firstChild.textContent = 'Test mode: submitting sends a test request to CRM. Use test data only. Read our ';
    var intro = document.querySelector('#configure .lead-intro .intro');
    if (intro) intro.textContent = intro.textContent.replace('This draft form is a preview and does not send a request.', 'This visit is in test mode and can send a test request.');
  }

  function value(name) {
    var el = form.elements.namedItem(name);
    return el && !el.disabled ? el.value.trim() : '';
  }
  function showStatus(message, error) {
    status.textContent = message;
    status.classList.toggle('is-error', !!error);
  }
  function fieldError(el, invalid) {
    var field = el.closest('.lf') || el.closest('.lf-tiles');
    field.classList.toggle('is-bad', invalid);
    el.setAttribute('aria-invalid', String(invalid));
    var error = field.querySelector('.qerr');
    if (error) error.hidden = !invalid;
  }
  form.addEventListener('input', function (event) {
    var el = event.target;
    if (el.matches('.lf input, .lf select, .lf textarea, .tile input')) {
      fieldError(el, false);
      if (!busy && !sent) showStatus('', false);
    }
  });

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (busy || sent || value('website')) return;
    var bad = null;
    var selected = form.querySelector('[name="product"]:checked');
    var firstRadio = form.querySelector('[name="product"]');
    var validProduct = !!(selected && Object.prototype.hasOwnProperty.call(products, selected.value));
    fieldError(firstRadio, !validProduct);
    if (!validProduct) bad = firstRadio;
    form.querySelectorAll('.lf input, .lf select, .lf textarea').forEach(function (el) {
      if (el.disabled) return;
      var text = el.value.trim();
      var ok = (!el.required || !!text) && el.validity.valid;
      if (el.name === 'requiredMva' && text) ok = ok && Number.isFinite(Number(text)) && Number(text) > 0;
      if (el.type === 'email' && text) ok = ok && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(text);
      fieldError(el, !ok);
      if (!ok && !bad) bad = el;
    });
    if (bad) {
      if (bad.closest('.lf-more')) {
        // Native toggle is also synchronized by the animation controller.
        var details = form.querySelector('.lf-more');
        if (!details.open) details.querySelector('summary').click();
      }
      bad.focus();
      return;
    }

    // Preserve legacy product codes and standard contact keys. Do not send empty
    // optional keys: the GHL workflow must also avoid erasing existing contact data.
    var attribution = {};
    try { attribution = window.getUtmPayload ? window.getUtmPayload() : {}; }
    catch (error) { /* Storage restrictions must not prevent a project inquiry. */ }
    var payload = Object.assign({}, attribution, {
      firstName: value('name'), companyName: value('company'), email: value('email'),
      productType: products[selected.value], formSource: 'Modular Data Center',
      formVersion: 'modular-v2', pageUrl: window.location.href
    });
    var optional = { message: 'message', capacity: 'itCapacity', start: 'projectStart', configuration: 'configuration', mvaSelection: 'mvaSelection', voltageSelection: 'voltageSelection', requiredMva: 'requiredMva', requiredVoltage: 'requiredVoltage' };
    Object.keys(optional).forEach(function (name) {
      var text = value(name);
      if (text) payload[optional[name]] = text;
    });

    var voltageChoice = value('voltageSelection');
    if (voltageChoice && Number.isFinite(Number(voltageChoice)) && Number(voltageChoice) > 0) payload.highSideKv = voltageChoice;

    if (form.dataset.delivery !== 'live' && !testMode) {
      showStatus('Preview complete. No request has been sent. Your details remain available to edit.', false);
      return;
    }
    if (testMode) payload.message = 'TEST — ' + (payload.message || 'Form integration check; not a commercial inquiry.');

    busy = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    var label = button.textContent;
    button.textContent = 'Sending…';
    showStatus('', false);
    var controller = new AbortController();
    var timeout = setTimeout(function () { controller.abort(); }, 20000);
    try {
      var response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload), signal: controller.signal
      });
      if (!response.ok) throw new Error('Webhook rejected the request');
      sent = true;
      button.textContent = 'Request sent';
      showStatus(testMode ? 'Thank you. Your test request has been submitted.' : 'Thank you. Your project request has been submitted.', false);
    } catch (error) {
      button.textContent = label;
      showStatus('We could not confirm submission. Your details are still here. Please try again, or contact us using the phone or email below.', true);
    } finally {
      clearTimeout(timeout);
      busy = false;
      button.disabled = sent;
      form.setAttribute('aria-busy', 'false');
    }
  });
  button.disabled = false;
})();

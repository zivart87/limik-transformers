/* Call only after the lead endpoint accepts the request. No contact data in analytics. */
(function () {
  'use strict';
  var dialog, returnFocus;
  var trackedForms = new WeakSet();
  function createDialog() {
    dialog = document.createElement('dialog');
    dialog.className = 'limik-confirmation';
    dialog.setAttribute('data-lenis-prevent', '');
    dialog.setAttribute('aria-labelledby', 'limik-confirmation-title');
    dialog.setAttribute('aria-describedby', 'limik-confirmation-message');
    dialog.innerHTML = '<button type="button" class="limik-confirmation-close" aria-label="Close confirmation"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button><h2 id="limik-confirmation-title">Thank you</h2><p id="limik-confirmation-message"></p><button type="button" class="limik-confirmation-continue" autofocus>Continue browsing</button>';
    document.body.appendChild(dialog);
    dialog.querySelectorAll('button').forEach(function (button) {
      button.addEventListener('click', function () { dialog.close(); });
    });
    dialog.addEventListener('close', function () {
      if (returnFocus && returnFocus.isConnected) returnFocus.focus({ preventScroll: true });
    });
  }
  window.showLeadConfirmation = function (form, options) {
    options = options || {};
    if (!dialog) createDialog();
    returnFocus = form.querySelector('[type="submit"]');
    if (!returnFocus || returnFocus.disabled) {
      returnFocus = form;
      form.setAttribute('tabindex', '-1');
    }
    dialog.querySelector('p').textContent = options.test
      ? 'Your test request has been submitted.'
      : 'Your request has been submitted. Our team will contact you about your project.';
    if (!dialog.open) dialog.showModal();
    if (options.test || trackedForms.has(form)) return;
    trackedForms.add(form);
    // The GTM container must map this event to the intended GA4/Ads conversions.
    // Tracking failures must never change a successful submission into an error.
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'limik_lead_success', form_source: options.source || '', form_id: form.id || '' });
    } catch (error) { /* Analytics is optional. */ }
    try {
      if (typeof window.oaiq === 'function') window.oaiq('measure', 'lead_created', { type: 'customer_action' });
    } catch (error) { /* Analytics is optional. */ }
  };
})();

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
    dialog.innerHTML = "<button type=\"button\" class=\"limik-confirmation-close\" aria-label=\"Close confirmation\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\"/></svg></button>\n\n    <div class=\"ty-icon\">\n      <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <polyline points=\"20 6 9 17 4 12\"/>\n      </svg>\n    </div>\n\n    <h2 id=\"limik-confirmation-title\">Thank you</h2>\n\n    <div class=\"ty-divider\"></div>\n\n    <p class=\"ty-message\" id=\"limik-confirmation-message\">Your request has been submitted. Our team will contact you about your project.</p>\n\n    <div class=\"ty-actions\">\n      <button type=\"button\" class=\"ty-link limik-confirmation-continue\" autofocus>\n        <span class=\"ty-link-icon\">\n          <svg width=\"22\" height=\"16\" viewBox=\"0 -2 22 20\" fill=\"none\"><path d=\"M3 8H19M19 8L12 1M19 8L12 15\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        </span>\n        Continue browsing\n      </button>\n    </div>\n";
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

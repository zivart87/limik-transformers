(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  var FIRST_TOUCH_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // окно first-touch атрибуции — 90 дней
  var params = new URLSearchParams(window.location.search);

  KEYS.forEach(function (k) {
    if (params.get(k)) sessionStorage.setItem('limik_' + k, params.get(k));
  });

  (function expireFirstTouchIfStale() {
    var ts = localStorage.getItem('limik_first_touch_ts');
    if (ts && (Date.now() - parseInt(ts, 10)) <= FIRST_TOUCH_MAX_AGE_MS) return;
    KEYS.concat('ga_client_id').forEach(function (k) { localStorage.removeItem('limik_first_' + k); });
    localStorage.removeItem('limik_first_touch_ts');
  })();

  function recordFirstTouch(key, value) {
    if (!value || localStorage.getItem('limik_first_' + key)) return;
    localStorage.setItem('limik_first_' + key, value);
    if (!localStorage.getItem('limik_first_touch_ts')) {
      localStorage.setItem('limik_first_touch_ts', String(Date.now()));
    }
  }

  KEYS.forEach(function (k) {
    if (params.get(k)) recordFirstTouch(k, params.get(k));
  });

  function getGaClientIdFromDataLayer() {
    var dl = window.dataLayer || [];
    for (var i = dl.length - 1; i >= 0; i--) {
      var entry = dl[i];
      if (!entry) continue;
      var result = entry.gtagApiResult || (entry.value && entry.value.gtagApiResult);
      if (result && result.client_id) return result.client_id;
    }
    return '';
  }

  function getGaClientIdFromCookie() {
    var match = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
    if (!match) return '';
    var parts = match[1].split('.');
    if (parts.length < 4) return '';
    return parts.slice(-2).join('.');
  }

  window.getUtmPayload = function () {
    var result = { pageUrl: window.location.href };
    KEYS.forEach(function (k) {
      var val = params.get(k) || sessionStorage.getItem('limik_' + k) || '';
      if (val) result[k] = val;
    });
    var gaClientId = getGaClientIdFromDataLayer() || getGaClientIdFromCookie();
    if (gaClientId) {
      result.ga_client_id = gaClientId;
      recordFirstTouch('ga_client_id', gaClientId);
    }
    KEYS.concat('ga_client_id').forEach(function (k) {
      var firstVal = localStorage.getItem('limik_first_' + k);
      if (firstVal) result['first_' + k] = firstVal;
    });
    return result;
  };
})();

/* ================================================================
   PULSE FASHION — CONVIVA APP ANALYTICS
   SDK: conviva-js-script-appanalytics (script tag integration)
   Docs: https://github.com/Conviva/conviva-js-script-appanalytics
   ================================================================ */

// ── Step 1: Async stub ──────────────────────────────────────────
// Queues all tracker calls made before the CDN SDK finishes loading,
// then replays them once the real SDK is available.
(function (p, i) {
  if (!p[i]) {
    p.GlobalConvivaNamespace = p.GlobalConvivaNamespace || [];
    p.GlobalConvivaNamespace.push(i);
    p[i] = function () { (p[i].q = p[i].q || []).push(arguments); };
    p[i].q = p[i].q || [];
  }
}(window, 'apptracker'));

// ── Step 2: Initialize tracker ──────────────────────────────────
// Replace 'YOUR_CONVIVA_CUSTOMER_KEY' with the key from Pulse dashboard.
window.apptracker('convivaAppTracker', {
  appId:               'PULSE Fashion Store',
  convivaCustomerKey:  '75aead16e5bdf64e6cf2587edaa9cc0276b404e7',
  appVersion:          '1.0.0',
});

// ── Step 3: Helper functions used throughout app.js ─────────────

/**
 * Track an explicit page view.
 * Must be called on every SPA navigation — SDK does NOT auto-collect these.
 * @param {string} [title] - Optional override; defaults to document.title.
 */
function convivaPageView(title) {
  window.apptracker('trackPageView', title ? { title } : undefined);
}

/**
 * Track a named custom event with an arbitrary data payload.
 * @param {string} eventName
 * @param {Object} [data]
 */
function convivaTrack(eventName, data) {
  window.apptracker('trackCustomEvent', { name: eventName, data: data || {} });
}

/**
 * Identify the current user (viewer ID).
 * Call as soon as the user's identity is known (e.g. after email entry).
 * @param {string} userId
 */
function convivaSetUser(userId) {
  window.apptracker('setUserId', userId);
}

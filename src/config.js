/**
 * ============================================================
 *  config.js — Edit ALL your content here in plain English
 *  This is the ONLY file you need to change.
 * ============================================================
 */

const CONFIG = {

  // ── Phone Number ─────────────────────────────────────────
  // The number that gets called when user taps Fix Problem / OK
  phoneNumber: '+18773575393',        // used for the actual call (no spaces)
  phoneDisplay: '+1 (877) 357-5393',  // shown to the user in the popup

  // ── Popup Title ──────────────────────────────────────────
  alertTitle: 'Billing Alert',

  // ── Popup Timing ─────────────────────────────────────────
  // How many seconds before the popup appears (in milliseconds)
  // 2000 = 2 seconds, 3000 = 3 seconds
  popupDelay: 1500,

  // ── Main Message Text ─────────────────────────────────────
  // This is the main paragraph shown in the popup
  alertMessage:
    'Your Apple ID was recently used to make a purchase of $278 via APPLE-PAY Pre-Authorization' +
    'in New York. If this was you, you can disregard this message. If you did not ' +
    'authorize this purchase, your account may be compromised. Please call Apple Support  ' +
    'to stop this payment and verify your payment information .',

  // ── Call Banner ───────────────────────────────────────────
  callBannerLabel: 'Call Apple Support',
  callBannerSub:   'Tap to call now',

  // ── Call Sheet (bottom sheet that slides up) ──────────────
  callSheetLabel:  'Apple Support',
  callSheetCancel: 'Cancel',

  // ── Warning Tag ───────────────────────────────────────────
  warningText: 'Not you? Your account may be at risk',

};

export default CONFIG;

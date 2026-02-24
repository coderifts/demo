// Feature flags in production code
const featureFlags = require('./flags');

function processCheckout(cart) {
  if (featureFlags.isEnabled('new-checkout-flow')) {
    return newCheckoutFlow(cart);
  }
  
  if (process.env.FEATURE_DARK_MODE === 'true') {
    applyDarkTheme();
  }
  
  if (featureFlags.isEnabled('beta-payment-gateway')) {
    return betaPayment(cart);
  }
  
  // Old flag that should have been cleaned up
  if (featureFlags.isEnabled('holiday-promo-2024')) {
    applyHolidayDiscount(cart);
  }
  
  if (process.env.FF_ENABLE_ANALYTICS === 'true') {
    trackCheckout(cart);
  }
}

module.exports = { processCheckout };
// trigger
// flag scan trigger 1771972309
// v3 flag fix trigger 1771972703
// canary test 1771973319
// canary2 1771973550

require('dotenv').config(); // Load environment variables
const { getReturnDetails } = require('../api/returnData');

// Replace with an actual return_id, order_id, or order_name from your dev environment
const input = {
  return_id: '77349096',
  // order_id: 'optional_shopify_order_id'
  // order_name: 'optional_order_name'
};

(async () => {
  try {
    const data = await getReturnDetails(input);
    console.log('🎯 Return Details:\n', JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('❌ Failed to fetch return details:', err.message || err);
  }
})();

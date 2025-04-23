const { loopApiRequest } = require('./core');

/**
 * Get return details using return_id, order_id, or order_name
 * @param {object} params - One of { return_id, order_id, order_name }
 * @returns {Promise<object>} Single return object
 */
async function getReturnDetails(params) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/warehouse/return/details?${query}`);
}

/**
 * Get a detailed, paginated list of returns filtered by date and state
 * @param {object} params - { from, to, filter, state }
 * @returns {Promise<object[]>} Array of return objects
 */
async function getDetailedReturnsList(params) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/warehouse/return/list?${query}`);
}

/**
 * Get a bulk ASN (Advanced Shipping Notice) report by date range
 * @param {object} params - { from, to }
 * @returns {Promise<object[]>} Array of ASN entries
 */
async function getReturnASNReport(params) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/warehouse/reporting/asn?${query}`);
}

module.exports = {
  getReturnDetails,
  getDetailedReturnsList,
  getReturnASNReport,
};

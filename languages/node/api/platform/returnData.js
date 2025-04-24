const { loopApiRequest } = require('../core');

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
 * Auto-paginate through all return results for a date range + state
 * @param {object} params - Must include `from`, `to`, and optional `state`
 * @returns {Promise<object[]>} Combined array of all return results
 */
async function getAllDetailedReturns(params) {
  const limit = 100;
  let page = 1;
  let allReturns = [];

  while (true) {
    const response = await getDetailedReturnsList({ ...params, page, limit });

    const results = response || []; // ✅ fallback
    console.log(`🔁 Page ${page}: Got ${results.length} results`);
    console.log(results);
    if (!Array.isArray(results)) {
      throw new Error(`Expected array but got: ${typeof results}`);
    }

    allReturns.push(...results);

    if (results.length < limit) break;
    page++;
  }

  return allReturns;
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
  getAllDetailedReturns,
};

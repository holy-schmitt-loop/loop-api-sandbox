const { loopApiRequest } = require('../core');

/**
 * Create a fraud report for a return
 * @param {number|string} returnId - Loop return ID
 * @param {object} body - { category: string, comment?: string }
 * @returns {Promise<object>} Fraud report object
 *
 * Available categories:
 * - package-never-received
 * - package-is-empty
 * - package-is-missing-items
 * - instant-return-charge-failed
 * - keep-item-abuse
 * - splitting-returns-to-avoid-restrictions
 * - item-is-worn
 * - other (requires `comment`)
 */
async function createFraudReport(returnId, body) {
  return await loopApiRequest(
    `/returns/${returnId}/fraud-report`,
    'POST',
    body
  );
}

module.exports = {
  createFraudReport,
};

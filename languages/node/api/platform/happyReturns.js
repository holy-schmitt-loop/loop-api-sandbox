const { loopApiRequest } = require('../core');

/**
 * Get high-level info about a specific Happy Returns shipment.
 * @param {string} happyReturnsShipmentId - HR-assigned shipment ID (string, not numeric)
 * @returns {Promise<object>} Shipment info object
 */
async function getShipmentInfo(happyReturnsShipmentId) {
  return await loopApiRequest(
    `/happy-returns/shipments/${happyReturnsShipmentId}`
  );
}

/**
 * List all Happy Returns shipments within a given timeframe.
 * Defaults to last 24 hours if no range provided.
 * @param {object} [params] - { from?: string, to?: string }
 * @returns {Promise<object>} Paginated shipments list
 */
async function getShipments(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(
    `/happy-returns/shipments${query ? `?${query}` : ''}`
  );
}

/**
 * Get all items associated with a Loop shipment ID.
 * @param {number|string} loopShipmentId - Internal Loop shipment ID
 * @returns {Promise<object>} Paginated list of shipment items
 */
async function getShipmentItems(loopShipmentId) {
  return await loopApiRequest(
    `/happy-returns/shipments/${loopShipmentId}/items`
  );
}

module.exports = {
  getShipmentInfo,
  getShipments,
  getShipmentItems,
};

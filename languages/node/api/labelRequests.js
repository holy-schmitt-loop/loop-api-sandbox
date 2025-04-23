const { loopApiRequest } = require('./core');

/**
 * List all label requests (filtered by return_id, date, status, etc.)
 * @param {object} [params] - Optional query params
 * @returns {Promise<object>} Paginated label request results
 */
async function listLabelRequests(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/label-requests${query ? `?${query}` : ''}`);
}

/**
 * Get details of a specific label request
 * @param {number|string} id - Label request ID
 * @returns {Promise<object>} Label request object
 */
async function getLabelRequestById(id) {
  return await loopApiRequest(`/label-requests/${id}`);
}

/**
 * Notify Loop that a label could not be generated
 * @param {number|string} id - Label request ID
 * @param {object} body - { reason: string, message: string }
 * @returns {Promise<object>} Error response from Loop
 */
async function createLabelRequestError(id, body) {
  return await loopApiRequest(`/label-requests/${id}/errors`, 'POST', body);
}

/**
 * Create a shipping label for a given label request
 * @param {object} body - Must include label_request_id, tracking_number, label_url, carrier, rate
 * @returns {Promise<object>} Created label response
 */
async function createLabel(body) {
  return await loopApiRequest(`/labels`, 'POST', body);
}

/**
 * Update the shipping status of a label (e.g. pre_transit, in_transit, delivered)
 * @param {number|string} id - Label ID
 * @param {object} body - { status: string }
 * @returns {Promise<void>}
 */
async function updateLabelStatus(id, body) {
  return await loopApiRequest(`/labels/${id}`, 'PUT', body);
}

module.exports = {
  listLabelRequests,
  getLabelRequestById,
  createLabelRequestError,
  createLabel,
  updateLabelStatus,
};

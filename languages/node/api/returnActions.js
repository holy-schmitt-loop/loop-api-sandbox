const { loopApiRequest } = require('./core');

/**
 * Process a return manually (e.g. for refund, exchange, store credit)
 * @param {object} body - Includes return_id and action details
 */
async function processReturn(body) {
  return await loopApiRequest(`/return/action/process`, 'POST', body);
}

/**
 * Remove specific line items from a return
 * @param {object} body - { return_id, line_item_ids }
 */
async function removeLineItems(body) {
  return await loopApiRequest(`/return/action/remove_line_items`, 'POST', body);
}

/**
 * Cancel a return
 * @param {object} body - { return_id }
 */
async function cancelReturn(body) {
  return await loopApiRequest(`/return/action/cancel`, 'POST', body);
}

/**
 * Flag a return with a reason (e.g. fraud, review needed)
 * @param {object} body - { return_id, reason }
 */
async function flagReturn(body) {
  return await loopApiRequest(`/return/action/flag`, 'POST', body);
}

/**
 * Close a return to prevent further action
 * @param {object} body - { return_id }
 */
async function closeReturn(body) {
  return await loopApiRequest(`/return/action/close`, 'POST', body);
}

/**
 * Retrieve internal notes associated with a return
 * @param {object} params - { return_id }
 */
async function getReturnNotes(params) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/return/notes?${query}`);
}

/**
 * Add an internal note to a return
 * @param {object} body - { return_id, author, note }
 */
async function createReturnNote(body) {
  return await loopApiRequest(`/return/notes`, 'POST', body);
}

/**
 * Generate a deep link to a return
 * @param {object} body - { return_id }
 */
async function createReturnDeeplink(body) {
  return await loopApiRequest(`/return/deeplink`, 'POST', body);
}

/**
 * Generate a deep link + QR code for a return
 * @param {object} body - { return_id }
 */
async function createReturnDeeplinkQR(body) {
  return await loopApiRequest(`/return/deeplink_qr`, 'POST', body);
}

module.exports = {
  processReturn,
  removeLineItems,
  cancelReturn,
  flagReturn,
  closeReturn,
  getReturnNotes,
  createReturnNote,
  createReturnDeeplink,
  createReturnDeeplinkQR,
};

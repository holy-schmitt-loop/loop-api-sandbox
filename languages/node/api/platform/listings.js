const { loopApiRequest } = require('../core');

//
// 🔒 Blocklist
//

/**
 * List all blocklist entries (paginated)
 * @returns {Promise<object>} Paginated blocklist response
 */
async function listBlocklistItems() {
  return await loopApiRequest(`/blocklists`);
}

/**
 * Create a new blocklist entry
 * @param {object} body - { type: 'email' | 'order' | 'product' | 'product_tag', value: string, secondary_value?: string }
 * @returns {Promise<object>} Created blocklist entry
 */
async function createBlocklistItem(body) {
  return await loopApiRequest(`/blocklists`, 'POST', body);
}

/**
 * Get a specific blocklist item by ID
 * @param {number|string} id - ID of the blocklist entry
 * @returns {Promise<object>} Blocklist entry data
 */
async function getBlocklistItem(id) {
  return await loopApiRequest(`/blocklists/${id}`);
}

/**
 * Delete a blocklist entry by ID
 * @param {number|string} id - ID of the blocklist entry
 * @returns {Promise<void>}
 */
async function deleteBlocklistItem(id) {
  return await loopApiRequest(`/blocklists/${id}`, 'DELETE');
}

//
// ✅ Allowlist
//

/**
 * List all allowlist entries (paginated)
 * @returns {Promise<object>} Paginated allowlist response
 */
async function listAllowlistItems() {
  return await loopApiRequest(`/allowlists`);
}

/**
 * Create a new allowlist entry
 * @param {object} body - { type: 'email' | 'order', value: string, secondary_value?: string }
 * @returns {Promise<object>} Created allowlist entry
 */
async function createAllowlistItem(body) {
  return await loopApiRequest(`/allowlists`, 'POST', body);
}

/**
 * Get a specific allowlist item by ID
 * @param {number|string} id - ID of the allowlist entry
 * @returns {Promise<object>} Allowlist entry data
 */
async function getAllowlistItem(id) {
  return await loopApiRequest(`/allowlists/${id}`);
}

/**
 * Delete an allowlist entry by ID
 * @param {number|string} id - ID of the allowlist entry
 * @returns {Promise<void>}
 */
async function deleteAllowlistItem(id) {
  return await loopApiRequest(`/allowlists/${id}`, 'DELETE');
}

module.exports = {
  // Blocklist
  listBlocklistItems,
  createBlocklistItem,
  getBlocklistItem,
  deleteBlocklistItem,
  // Allowlist
  listAllowlistItems,
  createAllowlistItem,
  getAllowlistItem,
  deleteAllowlistItem,
};

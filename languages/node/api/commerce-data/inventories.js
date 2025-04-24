const { loopApiRequest } = require('../core');

/**
 * List inventory records with optional filters and pagination
 * @param {object} params - Optional filters: { location_id, product_variant_id, limit, sort_order, cursor }
 * @returns {Promise<object>} { inventories, next_page_url, previous_page_url }
 */
async function listInventories(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/inventories${query ? `?${query}` : ''}`);
}

/**
 * Get inventory for a specific productVariantId at a locationId
 * @param {number|string} productVariantId
 * @param {number|string} locationId
 * @returns {Promise<object>} Inventory object
 */
async function getInventory(productVariantId, locationId) {
  return await loopApiRequest(`/inventories/${productVariantId}/${locationId}`);
}

/**
 * Create a new inventory record
 * @param {number|string} productVariantId
 * @param {number|string} locationId
 * @param {object} body - { available_count }
 * @returns {Promise<object>} Created inventory
 */
async function createInventory(productVariantId, locationId, body) {
  return await loopApiRequest(
    `/inventories/${productVariantId}/${locationId}`,
    'POST',
    body
  );
}

/**
 * Update an inventory record for a product variant + location
 * @param {number|string} productVariantId
 * @param {number|string} locationId
 * @param {object} body - { available_count }
 * @returns {Promise<object>} Updated inventory
 */
async function updateInventory(productVariantId, locationId, body) {
  return await loopApiRequest(
    `/inventories/${productVariantId}/${locationId}`,
    'PUT',
    body
  );
}

/**
 * Delete an inventory record
 * @param {number|string} productVariantId
 * @param {number|string} locationId
 * @returns {Promise<object>} { product_variant_id, location_id, success }
 */
async function deleteInventory(productVariantId, locationId) {
  return await loopApiRequest(
    `/inventories/${productVariantId}/${locationId}`,
    'DELETE'
  );
}

module.exports = {
  listInventories,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};

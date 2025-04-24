const { loopApiRequest } = require('../core');

/**
 * List orders with optional sorting, limit, cursor, or external_id.
 * @param {object} params - Optional: { sort_order, limit, cursor, external_id }
 * @returns {Promise<object>} { orders, next_page_url, previous_page_url }
 */
async function listOrders(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/orders${query ? `?${query}` : ''}`);
}

/**
 * Create a new order
 * @param {object} body - Order creation payload (see OpenAPI spec for shape)
 * @returns {Promise<object>} Newly created order
 */
async function createOrder(body) {
  return await loopApiRequest(`/orders`, 'POST', body);
}

/**
 * Upsert an order by external_id
 * @param {object} body - Upsert payload including `external_id`
 * @returns {Promise<object>} Upserted order object
 */
async function upsertOrder(body) {
  return await loopApiRequest(`/orders`, 'PUT', body);
}

/**
 * Get details about a specific order by ID
 * @param {number|string} id - Loop order ID
 * @returns {Promise<object>} Order detail
 */
async function getOrderById(id) {
  return await loopApiRequest(`/orders/${id}`);
}

/**
 * Update an existing order by ID
 * @param {number|string} id - Loop order ID
 * @param {object} body - Fields to update
 * @returns {Promise<object>} Updated order
 */
async function updateOrder(id, body) {
  return await loopApiRequest(`/orders/${id}`, 'PUT', body);
}

/**
 * Delete an order by ID
 * @param {number|string} id - Loop order ID
 * @returns {Promise<object>} Deletion result (e.g. { id, success: true })
 */
async function deleteOrder(id) {
  return await loopApiRequest(`/orders/${id}`, 'DELETE');
}

module.exports = {
  listOrders,
  createOrder,
  upsertOrder,
  getOrderById,
  updateOrder,
  deleteOrder,
};

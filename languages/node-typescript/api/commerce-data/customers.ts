const { loopApiRequest } = require('../core');

/**
 * Create a new customer
 * @param {object} body - CreateCustomerRequest payload
 * @returns {Promise<object>} Created customer
 */
async function createCustomer(body) {
  return await loopApiRequest(`/customers`, 'POST', body);
}

/**
 * List customers with optional filters and pagination
 * @param {object} params - { external_id, limit, sort_order, cursor }
 * @returns {Promise<object>} { customers, next_page_url, previous_page_url }
 */
async function listCustomers(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/customers${query ? `?${query}` : ''}`);
}

/**
 * Upsert a customer by external_id
 * @param {object} body - UpsertCustomerRequest payload
 * @returns {Promise<object>} Created or updated customer
 */
async function upsertCustomer(body) {
  return await loopApiRequest(`/customers`, 'PUT', body);
}

/**
 * Get details of a single customer by Loop customer ID
 * @param {number|string} id - Customer ID
 * @returns {Promise<object>} Customer object
 */
async function getCustomerById(id) {
  return await loopApiRequest(`/customers/${id}`);
}

/**
 * Update a customer by ID
 * @param {number|string} id - Customer ID
 * @param {object} body - Update payload (same as CreateCustomerRequest)
 * @returns {Promise<object>} Updated customer object
 */
async function updateCustomer(id, body) {
  return await loopApiRequest(`/customers/${id}`, 'PUT', body);
}

/**
 * Delete a customer by ID
 * @param {number|string} id - Customer ID
 * @returns {Promise<object>} { id, success }
 */
async function deleteCustomer(id) {
  return await loopApiRequest(`/customers/${id}`, 'DELETE');
}

module.exports = {
  createCustomer,
  listCustomers,
  upsertCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};

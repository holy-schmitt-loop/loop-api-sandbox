const { loopApiRequest } = require('./core');

/**
 * Retrieve all webhook subscriptions (programmatic + admin-created)
 * @returns {Promise<object[]>} Array of webhook objects
 */
async function getWebhooks() {
  return await loopApiRequest(`/webhooks`);
}

/**
 * Create a new webhook subscription
 * @param {object} body - { topic, trigger, url, status (optional: 'active' | 'inactive') }
 * @returns {Promise<object>} Created webhook
 */
async function createWebhook(body) {
  return await loopApiRequest(`/webhooks`, 'POST', body);
}

/**
 * Update an existing webhook subscription by ID
 * @param {number|string} id - The webhook ID to update
 * @param {object} body - { topic, trigger, url, status }
 * @returns {Promise<void>} No response body, just status code
 */
async function updateWebhook(id, body) {
  return await loopApiRequest(`/webhooks/${id}`, 'PUT', body);
}

/**
 * Delete a webhook subscription by ID
 * @param {number|string} id - The webhook ID to delete
 * @returns {Promise<void>} No response body, just status code
 */
async function deleteWebhook(id) {
  return await loopApiRequest(`/webhooks/${id}`, 'DELETE');
}

module.exports = {
  getWebhooks,
  createWebhook,
  updateWebhook,
  deleteWebhook,
};

const { loopApiRequest } = require('../core');

/**
 * List collections with optional filters, pagination, and sort order
 * @param {object} params - { external_id, limit, sort_order, cursor }
 * @returns {Promise<object>} { collections, next_page_url, previous_page_url }
 */
async function listCollections(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/collections${query ? `?${query}` : ''}`);
}

/**
 * Create a new collection
 * @param {object} body - CreateCollectionRequest payload
 * @returns {Promise<object>} Created collection
 */
async function createCollection(body) {
  return await loopApiRequest(`/collections`, 'POST', body);
}

/**
 * Upsert a collection using external_id + name
 * @param {object} body - UpsertCollectionRequest payload
 * @returns {Promise<object>} Created or updated collection
 */
async function upsertCollection(body) {
  return await loopApiRequest(`/collections`, 'PUT', body);
}

/**
 * Get a specific collection by Loop-assigned ID
 * @param {number|string} id - Collection ID
 * @returns {Promise<object>} Collection object
 */
async function getCollectionById(id) {
  return await loopApiRequest(`/collections/${id}`);
}

/**
 * Update an existing collection
 * @param {number|string} id - Collection ID
 * @param {object} body - UpdateCollectionRequest payload
 * @returns {Promise<object>} Updated collection
 */
async function updateCollection(id, body) {
  return await loopApiRequest(`/collections/${id}`, 'PUT', body);
}

/**
 * Delete a collection by ID
 * @param {number|string} id
 * @returns {Promise<object>} { id, success }
 */
async function deleteCollection(id) {
  return await loopApiRequest(`/collections/${id}`, 'DELETE');
}

/**
 * Attach a product to a collection
 * @param {number|string} collectionId
 * @param {number|string} productId
 * @returns {Promise<object>} Updated collection
 */
async function addProductToCollection(collectionId, productId) {
  return await loopApiRequest(
    `/collections/${collectionId}/products/${productId}`,
    'POST'
  );
}

/**
 * Remove a product from a collection
 * @param {number|string} collectionId
 * @param {number|string} productId
 * @returns {Promise<object>} Updated collection
 */
async function removeProductFromCollection(collectionId, productId) {
  return await loopApiRequest(
    `/collections/${collectionId}/products/${productId}`,
    'DELETE'
  );
}

module.exports = {
  listCollections,
  createCollection,
  upsertCollection,
  getCollectionById,
  updateCollection,
  deleteCollection,
  addProductToCollection,
  removeProductFromCollection,
};

const { loopApiRequest } = require('../core');

/**
 * List all locations with optional filters and pagination
 * @param {object} params - Optional: { external_id, limit, sort_order, cursor }
 * @returns {Promise<object>} { locations, next_page_url, previous_page_url }
 */
async function listLocations(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/locations${query ? `?${query}` : ''}`);
}

/**
 * Create a new location
 * @param {object} body - CreateLocationRequest payload
 * @returns {Promise<object>} Created location
 */
async function createLocation(body) {
  return await loopApiRequest(`/locations`, 'POST', body);
}

/**
 * Upsert a location by external_id
 * @param {object} body - UpsertLocationRequest payload
 * @returns {Promise<object>} Upserted location
 */
async function upsertLocation(body) {
  return await loopApiRequest(`/locations`, 'PUT', body);
}

/**
 * Get a location by Loop-assigned ID
 * @param {number|string} id
 * @returns {Promise<object>} Location object
 */
async function getLocationById(id) {
  return await loopApiRequest(`/locations/${id}`);
}

/**
 * Update an existing location by ID
 * @param {number|string} id
 * @param {object} body - UpdateLocationRequest payload
 * @returns {Promise<object>} Updated location
 */
async function updateLocation(id, body) {
  return await loopApiRequest(`/locations/${id}`, 'PUT', body);
}

/**
 * Delete a location by ID
 * @param {number|string} id
 * @returns {Promise<object>} { id, success }
 */
async function deleteLocation(id) {
  return await loopApiRequest(`/locations/${id}`, 'DELETE');
}

module.exports = {
  listLocations,
  createLocation,
  upsertLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
};

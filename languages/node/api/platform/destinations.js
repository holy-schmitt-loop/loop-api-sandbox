const { loopApiRequest } = require('../core');

/**
 * Fetch all return destinations for the shop
 * @returns {Promise<object[]>} Array of destination objects
 */
async function getAllDestinations() {
  return await loopApiRequest(`/destinations`);
}

/**
 * Create a new destination (e.g. warehouse, donation center)
 * @param {object} body - Includes name, type, enabled, address
 * @returns {Promise<object>} Newly created destination
 */
async function createDestination(body) {
  return await loopApiRequest(`/destinations`, 'POST', body);
}

/**
 * Retrieve details for a single destination
 * @param {number|string} id - Destination ID
 * @returns {Promise<object>} Destination object
 */
async function getDestinationById(id) {
  return await loopApiRequest(`/destinations/${id}`);
}

/**
 * Update an existing destination by ID
 * @param {number|string} id - Destination ID
 * @param {object} body - Any fields to update (e.g. name, address, enabled)
 * @returns {Promise<object>} Updated destination
 */
async function updateDestination(id, body) {
  return await loopApiRequest(`/destinations/${id}`, 'PUT', body);
}

/**
 * Delete a destination by ID
 * @param {number|string} id - Destination ID
 * @returns {Promise<object>} Deletion result or confirmation
 */
async function deleteDestination(id) {
  return await loopApiRequest(`/destinations/${id}`, 'DELETE');
}

module.exports = {
  getAllDestinations,
  createDestination,
  getDestinationById,
  updateDestination,
  deleteDestination,
};

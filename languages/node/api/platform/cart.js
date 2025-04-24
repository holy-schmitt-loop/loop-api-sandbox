const { loopApiRequest } = require('../core');

/**
 * Create a cart object with one or more variant IDs.
 * Optionally pass a base64-encoded Shopify cart object as `shopify`.
 * @param {object} body - { cart: [variantIds], shopify?: base64CartString }
 * @returns {Promise<object>} The created cart + token
 */
async function createCart(body) {
  return await loopApiRequest(`/cart`, 'POST', body);
}

/**
 * Get a cart by its unique token (provided after creation).
 * @param {string} token - The cart's token ID
 * @returns {Promise<object>} The cart object and its contents
 */
async function getCart(token) {
  return await loopApiRequest(`/cart/${token}`);
}

/**
 * Overwrite the contents of an existing cart with new variant IDs.
 * @param {string} token - The cart token to update
 * @param {object} body - { cart: [variantIds] }
 * @returns {Promise<object>} Updated cart result
 */
async function updateCart(token, body) {
  return await loopApiRequest(`/cart/${token}`, 'POST', body);
}

/**
 * Delete a cart using its token
 * @param {string} token - The cart token to delete
 * @returns {Promise<object>} Confirmation response
 */
async function deleteCart(token) {
  return await loopApiRequest(`/cart/${token}`, 'DELETE');
}

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
};

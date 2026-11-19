const { loopApiRequest } = require('../core');

//
// 🛍️ Products
//

/**
 * List products with optional filters and pagination
 * @param {object} params - { external_id, tags, barcode, as_of_date, limit, cursor, sort_order }
 * @returns {Promise<object>} { products, next_page_url, previous_page_url }
 */
async function listProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/products${query ? `?${query}` : ''}`);
}

/**
 * Get a product by Loop product ID
 * @param {number|string} id
 * @returns {Promise<object>} Product object
 */
async function getProductById(id) {
  return await loopApiRequest(`/products/${id}`);
}

/**
 * Create a new product
 * @param {object} body - CreateProductRequest payload
 * @returns {Promise<object>} Newly created product
 */
async function createProduct(body) {
  return await loopApiRequest(`/products`, 'POST', body);
}

/**
 * Upsert a product (by external_id)
 * @param {object} body - UpsertProductRequest payload
 * @returns {Promise<object>} Upserted product
 */
async function upsertProduct(body) {
  return await loopApiRequest(`/products`, 'PUT', body);
}

/**
 * Update an existing product by ID
 * @param {number|string} id
 * @param {object} body - UpdateProductRequest payload
 * @returns {Promise<object>} Updated product
 */
async function updateProduct(id, body) {
  return await loopApiRequest(`/products/${id}`, 'PUT', body);
}

/**
 * Delete a product by ID
 * @param {number|string} id
 * @returns {Promise<object>} { id, success }
 */
async function deleteProduct(id) {
  return await loopApiRequest(`/products/${id}`, 'DELETE');
}

//
// 🎯 Product Variants
//

/**
 * List variants for a given product ID
 * @param {number|string} productId
 * @param {object} params - Optional filters: { external_id, ids, barcode, limit, cursor, sort_order }
 * @returns {Promise<object>} { product_variants, next_page_url, previous_page_url }
 */
async function listProductVariants(productId, params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(
    `/products/${productId}/product-variants${query ? `?${query}` : ''}`
  );
}

/**
 * Get details of a single product variant
 * @param {number|string} productId
 * @param {number|string} variantId
 * @returns {Promise<object>} Product variant object
 */
async function getProductVariant(productId, variantId) {
  return await loopApiRequest(
    `/products/${productId}/product-variants/${variantId}`
  );
}

/**
 * Create a variant under a product
 * @param {number|string} productId
 * @param {object} body - CreateProductVariantRequest payload
 * @returns {Promise<object>} Created variant
 */
async function createProductVariant(productId, body) {
  return await loopApiRequest(
    `/products/${productId}/product-variants`,
    'POST',
    body
  );
}

/**
 * Upsert a variant under a product (by external_id)
 * @param {number|string} productId
 * @param {object} body - UpsertProductVariantRequest payload
 * @returns {Promise<object>} Upserted variant
 */
async function upsertProductVariant(productId, body) {
  return await loopApiRequest(
    `/products/${productId}/product-variants`,
    'PUT',
    body
  );
}

/**
 * Update a variant under a product
 * @param {number|string} productId
 * @param {number|string} variantId
 * @param {object} body - UpdateProductVariantRequest payload
 * @returns {Promise<object>} Updated variant
 */
async function updateProductVariant(productId, variantId, body) {
  return await loopApiRequest(
    `/products/${productId}/product-variants/${variantId}`,
    'PATCH',
    body
  );
}

/**
 * Delete a product variant by product + variant ID
 * @param {number|string} productId
 * @param {number|string} variantId
 * @returns {Promise<object>} { id, success }
 */
async function deleteProductVariant(productId, variantId) {
  return await loopApiRequest(
    `/products/${productId}/product-variants/${variantId}`,
    'DELETE'
  );
}

module.exports = {
  // Products
  listProducts,
  getProductById,
  createProduct,
  upsertProduct,
  updateProduct,
  deleteProduct,

  // Product Variants
  listProductVariants,
  getProductVariant,
  createProductVariant,
  upsertProductVariant,
  updateProductVariant,
  deleteProductVariant,
};

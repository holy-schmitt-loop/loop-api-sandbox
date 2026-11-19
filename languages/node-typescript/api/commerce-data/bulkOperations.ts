const { loopApiRequest } = require('../core');

/**
 * Create a new bulk operation by uploading a JSONL file
 * @param {FormData} formData - Must include `file` field as multipart/form-data
 * @returns {Promise<object>} The created bulk operation
 *
 * NOTE: This request must be made with a multipart/form-data body.
 * Use `form-data` library or axios + FormData in Node.
 */
async function createBulkOperation(formData) {
  return await loopApiRequest(`/bulk-operations`, 'POST', formData, {
    headers: formData.getHeaders(),
  });
}

/**
 * List all bulk operations with optional pagination
 * @param {object} params - Optional: { limit, sort_order, cursor }
 * @returns {Promise<object>} { bulk_operations, next_page_url, previous_page_url }
 */
async function listBulkOperations(params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(`/bulk-operations${query ? `?${query}` : ''}`);
}

/**
 * Get metadata about a specific bulk operation
 * @param {number|string} id - Bulk operation ID
 * @returns {Promise<object>} Bulk operation detail
 */
async function getBulkOperation(id) {
  return await loopApiRequest(`/bulk-operations/${id}`);
}

/**
 * List all jobs associated with a bulk operation
 * @param {number|string} id - Bulk operation ID
 * @param {object} params - Optional: { limit, sort_order, cursor }
 * @returns {Promise<object>} { bulk_operation_jobs, next_page_url, previous_page_url }
 */
async function listBulkOperationJobs(id, params = {}) {
  const query = new URLSearchParams(params).toString();
  return await loopApiRequest(
    `/bulk-operations/${id}/jobs${query ? `?${query}` : ''}`
  );
}

module.exports = {
  createBulkOperation,
  listBulkOperations,
  getBulkOperation,
  listBulkOperationJobs,
};

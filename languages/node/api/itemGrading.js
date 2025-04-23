const { loopApiRequest } = require('./core');

/**
 * Grade the condition of return line items (up to 20 at a time).
 * @param {object} body - Must include an `items` array with item condition info
 * @returns {Promise<object[]>} Conditioned item results
 */
async function gradeItems(body) {
  return await loopApiRequest(`/dispositioning/grade`, 'POST', body);
}

/**
 * Submit disposition outcomes for return line items (e.g. recycle, donate)
 * @param {object} body - Must include an `items` array with disposition info
 * @returns {Promise<object[]>} Dispositioned item results
 */
async function assessDispositions(body) {
  return await loopApiRequest(`/dispositioning/assess`, 'POST', body);
}

module.exports = {
  gradeItems,
  assessDispositions,
};

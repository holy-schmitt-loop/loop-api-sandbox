const { loopApiRequest } = require('./core');

async function getReturnById(returnId) {
  return await loopApiRequest(`/returns/${returnId}`);
}

module.exports = {
  getReturnById,
};

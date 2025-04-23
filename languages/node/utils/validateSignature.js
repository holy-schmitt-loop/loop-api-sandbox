const crypto = require('crypto');
const { LOOP_WEBHOOK_SECRET } = require('../config/loopConfig');

function validateSignature(rawBody, signature) {
  const hash = crypto
    .createHmac('sha256', LOOP_WEBHOOK_SECRET)
    .update(rawBody)
    .digest('base64');

  return hash === signature;
}

module.exports = validateSignature;

// Import the helper that verifies webhook authenticity using HMAC + your Loop secret
const validateSignature = require('../utils/validateSignature');

module.exports = async function webhookHandler(req, res) {
  // Extract the signature header from the request
  const signature = req.headers['x-loop-signature'];

  // Destructure key fields from the webhook body
  const { topic, trigger } = req.body;

  // Validate the webhook signature using raw body + shared secret
  if (!validateSignature(req.rawBody, signature)) {
    console.warn('🚫 Invalid webhook signature');
    return res.status(401).send('Invalid signature'); // Stop here if it fails
  }

  // Log the successfully validated webhook event
  console.log('✅ Valid webhook received!');
  console.log('🧠 Topic:', topic || 'N/A');
  console.log('⚡ Trigger:', trigger || 'N/A');

  // Route logic based on the webhook's topic — this defines what the event is "about"
  switch (topic) {
    case 'return':
      console.log('📦 Handling return event...');
      // Optional: further logic here depending on the trigger (e.g. return.created)
      break;

    case 'label':
      console.log('🏷️ Handling label event...');
      // e.g. label.created, label.updated
      break;

    case 'label_request':
      console.log('📤 Handling label request event...');
      // e.g. label_request.issued, label_request.cancelled
      break;

    case 'restock':
      console.log('📥 Handling restock event...');
      // e.g. restock.requested
      break;

    case 'giftcard':
      console.log('🎁 Handling giftcard event...');
      // e.g. giftcard.requested
      break;

    case 'happy_returns_shipment':
      console.log('🚚 Handling Happy Returns shipment event...');
      // e.g. shipment.processed
      break;

    default:
      console.log('❓ Unhandled webhook topic:', topic);
    // Consider logging or alerting unknown topic types here
  }

  // Always respond with 200 OK so Loop knows the webhook was received
  res.status(200).send('OK');
};

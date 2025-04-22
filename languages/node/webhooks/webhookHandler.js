module.exports = async function webhookHandler(req, res) {
  console.log(
    '📦 Incoming Webhook Payload:',
    JSON.stringify(req.body, null, 2)
  );
  res.status(200).send('Webhook received');
};

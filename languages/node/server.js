const express = require('express');
const bodyParser = require('body-parser');
const { setupNgrok } = require('./ngrok');
const webhookHandler = require('./webhooks/webhookHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/webhook', webhookHandler);

app.listen(PORT, async () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  await setupNgrok(PORT);
});

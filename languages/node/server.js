const express = require('express');
const bodyParser = require('body-parser');
const webhookHandler = require('./webhooks/webhookHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Capture raw body string
app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.post('/webhook', webhookHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

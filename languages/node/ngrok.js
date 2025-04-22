const ngrok = require('ngrok');

async function setupNgrok(port) {
  try {
    const url = await ngrok.connect(port);
    console.log(`🔗 Public URL (copy this into Loop): ${url}/webhook`);
  } catch (err) {
    console.error('Failed to start ngrok:', err);
  }
}

module.exports = { setupNgrok };

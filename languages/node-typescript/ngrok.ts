const ngrok = require('ngrok');

async function setupNgrok(port) {
  try {
    const url = await ngrok.connect({
      addr: port,
      authtoken_from_env: true,
    });
    console.log(`🔗 Public URL (copy into Loop): ${url}/webhook`);
  } catch (err) {
    console.error('❌ Failed to start ngrok:', err);
  }
}

module.exports = { setupNgrok };

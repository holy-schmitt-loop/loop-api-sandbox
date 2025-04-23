require('dotenv').config();

const config = {
  LOOP_API_BASE_URL: 'https://api.loopreturns.com/api/v1',
  LOOP_API_KEY: process.env.LOOP_API_KEY,
  LOOP_WEBHOOK_SECRET: process.env.LOOP_WEBHOOK_SECRET,
};

if (!config.LOOP_API_KEY) {
  console.warn('⚠️ Warning: LOOP_API_KEY is not set in .env');
}

module.exports = config;

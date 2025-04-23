const axios = require('axios');
const { LOOP_API_BASE_URL, LOOP_API_KEY } = require('../config/loopConfig');

/**
 * Make an API request to Loop with basic 429 retry protection
 */
async function loopApiRequest(
  endpoint,
  method = 'GET',
  data = null,
  retryCount = 0
) {
  const url = `${LOOP_API_BASE_URL}${endpoint}`;

  try {
    const response = await axios({
      method,
      url,
      headers: {
        'X-Authorization': LOOP_API_KEY,
        'Content-Type': 'application/json',
      },
      data,
    });

    return response.data;
  } catch (err) {
    const status = err.response?.status;
    const isRateLimited = status === 429;

    if (isRateLimited && retryCount < 3) {
      const waitMs = 5000;
      console.warn(
        `⏳ Rate limit hit. Retrying in ${waitMs / 1000} seconds...`
      );
      await new Promise((res) => setTimeout(res, waitMs));
      return loopApiRequest(endpoint, method, data, retryCount + 1);
    }

    console.error(
      `❌ API Error [${method} ${endpoint}]:`,
      err.response?.data || err.message
    );
    throw err;
  }
}

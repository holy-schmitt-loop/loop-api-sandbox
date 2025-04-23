const fetch = require('node-fetch');
const { LOOP_API_BASE_URL, LOOP_API_KEY } = require('../config/loopConfig');

async function loopApiRequest(endpoint, method = 'GET', body = null) {
  const url = `${LOOP_API_BASE_URL}${endpoint}`;

  const options = {
    method,
    headers: {
      Authorization: `Bearer ${LOOP_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }
    return data;
  } catch (err) {
    console.error(`❌ API Error: ${err.message}`);
    throw err;
  }
}

module.exports = {
  loopApiRequest,
};

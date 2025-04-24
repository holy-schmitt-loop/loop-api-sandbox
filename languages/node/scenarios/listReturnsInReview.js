/**
 * 📝 Scenario: List Returns in Review (Last 30 Days)
 *
 * This script uses Loop's `GET /warehouse/return/list` endpoint to retrieve all returns
 * created in the last 30 days that are currently in the `review` state.
 *
 * It:
 * - Formats a UTC time window using Day.js
 * - Queries returns filtered by `created_at` and `state=review`
 * - Handles pagination under the hood using getAllDetailedReturns()
 * - Prints the full JSON result to stdout
 *
 * Use this for audits, review queue exports, or return validation workflows.
 */

require('dotenv').config(); // Load Loop API key from .env

const { getAllDetailedReturns } = require('../api/returnData');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

(async () => {
  // Format UTC time window: last 30 days
  const from = dayjs().subtract(1, 'month').utc().format('YYYY-MM-DD HH:mm:ss');
  const to = dayjs().utc().format('YYYY-MM-DD HH:mm:ss');

  console.log(`🕓 From: ${from}`);
  console.log(`🕓 To:   ${to}`);

  try {
    // Fetch all returns in 'review' state from the past 30 days
    const returns = await getAllDetailedReturns({
      filter: 'created_at', // Required for from/to filtering to work
      from,
      to,
      state: 'review',
    });

    console.log(
      `✅ Found ${returns.length} returns in review from ${from} to ${to}\n`
    );

    // Output full return list
    console.log(JSON.stringify(returns, null, 2));
  } catch (err) {
    console.error('❌ Failed to fetch reviewed returns:', err.message || err);
  }
})();

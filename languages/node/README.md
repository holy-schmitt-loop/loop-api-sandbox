# 🧠 Loop API Sandbox (Node.js)

This folder contains a sandbox environment for working with the Loop Returns API using Node.js.

It includes:

- ✅ API helper modules organized into `platform/` and `commerce-data/` domains
- ✅ Scenario scripts that demonstrate real-world use cases
- ✅ Core request handling via `axios`, with automatic retry for rate limits
- ✅ Support for Loop’s platform-agnostic Commerce Data APIs

---

## 📂 Folder Structure

```
languages/node/
├── api/
│   ├── core.js
│   ├── platform/               # Native Loop platform APIs
│   │   ├── returnData.js
│   │   ├── returnActions.js
│   │   ├── webhooks.js
│   │   ├── destinations.js
│   │   ├── labelRequests.js
│   │   ├── listings.js
│   │   ├── fraudReports.js
│   │   ├── happyReturns.js
│   │   └── itemGrading.js
│   ├── commerce-data/         # Platform-agnostic data model (Loop as system of record)
│   │   ├── orders.js
│   │   ├── products.js
│   │   ├── customers.js
│   │   ├── locations.js
│   │   ├── inventories.js
│   │   ├── collections.js
│   │   └── bulkOperations.js
├── scenarios/
│   └── listReturnsInReview.js
│   └── getReturnDetails.js
├── utils/
│   ├── validateSignature.js
│   └── multipart.js
├── .env
└── package.json
```

---

## 📖 Scenario Scripts

This folder contains example scripts under `scenarios/` that demonstrate how to use the Loop Returns API in real-world situations. Below is a list of each scenario and what it does:

### `listReturnsInReview.js`

Lists all returns created in the last 30 days that are currently in the `review` state. This script:

- Uses Loop's `GET /warehouse/return/list` endpoint
- Filters returns by creation date and review state
- Handles pagination automatically
- Prints a JSON list of all matching returns

**Use cases:** Auditing, exporting review queues, or validating returns in review.

### `getReturnDetails.js`

Fetches detailed information about a specific return using its `return_id`, `order_id`, or `order_name`. This script:

- Calls a helper function to retrieve return details
- Prints the full return details as JSON

**Use cases:** Investigating the status of a particular return, debugging, or integrating with other systems that need return data.

### ▶️ How to Run Scenario Scripts

To run any scenario script:

1. Open your terminal and navigate to the `languages/node/` folder:
   ```sh
   cd languages/node/
   ```
2. Make sure you've installed dependencies:
   ```sh
   npm install
   ```
3. Add your API key to a `.env` file in this folder:
   ```sh
   LOOP_API_KEY=your-loop-api-key
   ```
4. Run a scenario using Node.js from within the `languages/node/` directory, for example:
   ```sh
   node scenarios/listReturnsInReview.js
   node scenarios/getReturnDetails.js
   ```

---

## 🧱 API Helper Modules

### `platform/` – Loop platform-native APIs

- Returns
- Return actions
- Webhooks
- Label requests
- Destinations
- Blocklist/allowlist
- Fraud reports
- Happy Returns shipments
- Item grading

### `commerce-data/` – Loop as system of record

- Orders
- Products + Variants
- Customers
- Locations
- Inventories
- Collections
- Bulk Operations

---

## 🧠 Adding Your Own

1. Create a new script in `scenarios/`
2. Import what you need from `api/`
3. Run with `node scenarios/yourScript.js` from within the `node/` folder.

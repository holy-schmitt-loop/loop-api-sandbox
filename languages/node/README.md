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

## 🚀 Getting Started

1. Run `npm install`
2. Add your API key to a `.env` file in this folder:
   ```
   LOOP_API_KEY=your-loop-api-key
   ```
3. Run a scenario:
   ```
   node scenarios/listReturnsInReview.js
   ```

---

## 🧪 Scenarios

Scenarios are simple `.js` scripts under `/scenarios` that demonstrate how to combine API helpers into functional flows.

- `listReturnsInReview.js`  
  Fetches all returns in the `review` state created in the last 30 days (auto-paginated)

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

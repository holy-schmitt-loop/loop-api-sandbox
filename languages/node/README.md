# 🧠 Loop API Sandbox (Node.js)

This folder contains a sandbox environment for working with the Loop Returns API using Node.js.

It includes:

- ✅ API helper modules organized by function
- ✅ Scenario scripts that demonstrate real-world use cases
- ✅ Core request handling via `axios`, with automatic retry for rate limits
- ✅ Experimental support for Loop’s Commerce Data APIs (headless + platform-agnostic)

---

## 📂 Folder Structure

```
languages/node/
├── api/
│   ├── core.js                # Axios wrapper + retry logic
│   ├── returnData.js          # GET /warehouse/return/details, /list, etc.
│   ├── returnActions.js       # Actions: process, cancel, flag, etc.
│   ├── webhooks.js            # Programmatic webhook management
│   ├── labelRequests.js       # Label + status handling
│   ├── destinations.js        # Return destination config
│   ├── listings.js            # Blocklist / Allowlist APIs
│   ├── fraudReports.js        # Flagging fraud cases
│   ├── happyReturns.js        # Shipment tracking via Happy Returns
│   ├── itemGrading.js         # Grade/assess item condition
│   └── commerce-data/
│       ├── orders.js
│       ├── products.js
│       ├── customers.js
│       ├── locations.js
│       ├── inventories.js
│       ├── collections.js
│       └── bulkOperations.js
├── scenarios/
│   └── listReturnsInReview.js  # Sample scenario script
├── utils/
│   ├── validateSignature.js    # Webhook signature check
│   └── multipart.js            # Helper to build FormData for uploads
├── .env                         # Your API key (not committed)
└── package.json
```

---

## 🚀 Getting Started

1. Run `npm install` to install dependencies
2. Add your API key to a `.env` file:
   ```
   LOOP_API_KEY=your-loop-api-key
   ```
3. Run a scenario:
   ```
   node scenarios/listReturnsInReview.js
   ```

---

## 🧪 Scenarios

Each file in `/scenarios` demonstrates how to combine helpers and implement a real-world integration flow.

- `listReturnsInReview.js`  
  Fetches all returns in the `review` state over the last 30 days

---

## 🧱 Commerce Data API Support

Under `api/commerce-data/` you'll find helper modules for Loop’s platform-agnostic object models:

- Orders
- Products & Variants
- Customers
- Locations
- Inventory
- Collections
- Bulk Operations

These power modern headless setups and merchant integrations outside Shopify.

---

## 🧠 Want to Contribute a Scenario?

Just drop a `.js` file in `scenarios/`, import any helpers from `/api`, and wire up a focused use case.

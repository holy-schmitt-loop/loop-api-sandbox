# 🧪 loop-api-sandbox

A developer sandbox for testing and exploring [Loop Returns](https://help.loopreturns.com/hc/en-us/categories/11378293482075-API-Documentation) APIs and webhooks.

This is **not a production-ready repo** — it's a lightweight playground to help developers:

- Receive and log webhook events from Loop
- Experiment with authenticated API calls to Loop endpoints
- Prototype return automation and middleware logic

Currently implemented in **Node.js** (see [`languages/node`](languages/node)) with Express.

---

## 🚀 Quick Start (Node Version)

```bash
cd languages/node
cp .env.example .env         # Add your Loop API key
npm install
```

### In one terminal:

```bash
npm run dev
```

### In a second terminal:

```bash
ngrok http 3000
```

The app will:

- Spin up an Express server on `localhost:3000`
- Log incoming webhook payloads to `/webhook`
- Let `ngrok` expose a public URL (shown in your second terminal)

---

## 🔗 Configuring Webhooks in Loop

1. Go to your Loop Admin → Settings → Webhooks
2. Add your ngrok URL + `/webhook` path (e.g. `https://abc123.ngrok.io/webhook`)
3. Trigger return events to see them logged in your terminal

---

## 📂 Project Structure

```bash
loop-api-sandbox/
├── README.md               ← This file
├── languages/
│   └── node/               ← Node.js version (Express)
│       ├── server.js
│       ├── webhooks/
│       ├── utils/
│       └── ...
```

Other languages (Python, Ruby, etc.) can be added in the `languages/` folder in the future.

---

## ⚠️ Disclaimer

This is a developer sandbox. Use at your own risk. Not maintained for production deployments.

<p align="center">
  <img src="graphics/loop-se-banner.png" alt="Virtual SE Logo" width="100%"/>
</p>

# 🧪 loop-api-sandbox

This repository is a **developer sandbox for exploring, testing, and integrating with Loop Returns’ APIs and webhooks**. It serves as both a playground and a reference implementation for developers building into Loop.

---

## 💡 What’s Included

- 🛠️ Modular helper functions for every public Loop API
- 🧪 Real-world scenario scripts for tasks like:
- 🔁 Webhook handling and validation utilities
- 🧱 Support for both:
  - **Platform APIs** – tightly coupled to Loop’s return system
  - **Commerce Data APIs** – decoupled, headless-first models (e.g. products, variants, inventory)

Whether you’re testing return flows, integrating with an OMS, or experimenting with Loop’s APIs — this repo gives you a running start.

---

## 📂 Project Structure

```bash
loop-api-sandbox/
├── README.md               ← This file
├── languages/
│   └── node/               ← Node.js implementation (see its README)
│       ├── api/
│       │   ├── platform/       # Core Loop-native APIs
│       │   └── commerce-data/  # Headless data model helpers
│       ├── scenarios/          # Sample automation & API usage scripts
│       ├── utils/              # Helper functions (e.g. signature verification)
│       ├── .env                # API key lives here (not committed)
│       └── ...
```

Other languages (e.g. Python, Go, Ruby) can be added to `languages/` over time.

---

## 🔐 API Access

To use any scripts or helpers, you’ll need a valid **Loop API key** from an active Loop instance. API docs can be found at:

👉 https://docs.loopreturns.com/api-reference/

---

## ⚠️ Disclaimer

This is a developer sandbox. It is not maintained for production use.

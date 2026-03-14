# PULSE Fashion Store — Demo Credentials

Training / testing reference for the dummy checkout flow.

---

## Demo Accounts

Selecting an account auto-fills the shipping address.

| Name          | Email                | Ships To                          |
|---------------|----------------------|-----------------------------------|
| Jane Doe      | test@pulse.com       | 123 Main Street, New York NY 10001 |
| John Smith    | shopper@pulse.com    | 456 Oak Avenue, Los Angeles CA 90001 |
| Alex Johnson  | demo@pulse.com       | 789 Elm Street, Chicago IL 60601  |

> Any other email that contains `@` and `.` is also accepted (shipping must be filled manually).

---

## Demo Payment Card

| Field       | Value            |
|-------------|------------------|
| Card Number | 123456789012     |
| Expiry      | Any future MM/YY (e.g. 12/27) |
| CVV         | Any 3–4 digits (e.g. 123)     |
| Name        | Auto-filled from selected account |

---

## How to Place a Test Order

1. Add one or more items to the bag (click a product → "Add to Bag", or use "Quick Add").
2. Click **Secure Checkout** in the cart sidebar.
3. **Step 1 — Account**: Click any demo account button (email auto-fills), then click **Continue**.
4. **Step 2 — Shipping**: Address is pre-filled for demo accounts. Click **Continue to Payment**.
5. **Step 3 — Payment**: Enter card `123456789012`, any expiry (e.g. `12/27`), any CVV (e.g. `123`). Click **Place Order**.
6. **Confirmation**: An order reference number (`PULSE-XXXXXX`) is shown. Cart is cleared.

---

## Local Server

```bash
cd /Users/avmishra/Documents/Pulse_Activation/fashion-store
python3 -m http.server 8888
```

Visit: http://localhost:8888

## Internet Tunnel (temporary)

```bash
ssh -R 80:localhost:8888 nokey@localhost.run
```

## Deploy Permanently (Netlify)

```bash
brew install netlify-cli
netlify login
netlify deploy --prod --dir=/Users/avmishra/Documents/Pulse_Activation/fashion-store
```

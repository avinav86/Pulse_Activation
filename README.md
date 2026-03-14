# PULSE Fashion Store — Conviva Activation Demo

A fully-featured, cloud-hosted e-commerce demo store built to showcase **Conviva App Analytics** instrumentation in a realistic retail context. The site runs 24/7 on Railway with a companion traffic simulator that generates continuous, realistic user sessions — keeping the Conviva dashboard populated with live data at all times.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Railway Project                       │
│                                                         │
│  ┌──────────────────────┐   ┌─────────────────────────┐ │
│  │   pulse-site         │   │   lavish-reflection     │ │
│  │   (nginx:alpine)     │   │   (Playwright runner)   │ │
│  │                      │   │                         │ │
│  │  Static SPA served   │◄──│  150 browser sessions   │ │
│  │  via nginx + Railway │   │  every 30 minutes       │ │
│  │  edge CDN            │   │  (runs forever)         │ │
│  └──────────────────────┘   └─────────────────────────┘ │
│           │                                             │
└───────────┼─────────────────────────────────────────────┘
            │
            ▼
  https://pulse-site-production.up.railway.app
            │
            ▼
  ┌──────────────────────┐
  │  Conviva Dashboard   │
  │  (App Analytics)     │
  │  Page views, events, │
  │  e-commerce funnel   │
  └──────────────────────┘
```

Two Railway services share a single project:

| Service | Role | Docker Base |
|---|---|---|
| `pulse-site` | Serves the static SPA via nginx | `nginx:alpine` |
| `lavish-reflection` | Runs 150 Playwright sessions every 30 min | `mcr.microsoft.com/playwright/python:v1.42.0-jammy` |

Both services have `restartPolicyType: ALWAYS` — they recover automatically from crashes.

---

## Project Structure

```
Pulse_Activation/
│
├── fashion-store/              # Source of truth for the website
│   ├── index.html              # Single-page app shell + all static HTML
│   ├── app.js                  # All SPA logic (routing, cart, checkout, analytics)
│   ├── style.css               # Full stylesheet (CSS variables, components, responsive)
│   ├── conviva-config.js       # Conviva SDK init + helper functions
│   └── _redirects              # Netlify-style SPA redirect (/* → /index.html)
│
├── railway-site/               # Railway deployment copy of the website
│   ├── index.html              # Synced from fashion-store/ before each deploy
│   ├── app.js                  # Synced from fashion-store/
│   ├── style.css               # Synced from fashion-store/
│   ├── conviva-config.js       # Synced from fashion-store/
│   ├── Dockerfile              # nginx:alpine, copies files + nginx config
│   ├── nginx.conf              # SPA routing, gzip, cache headers, $PORT injection
│   └── railway.json            # Builder + restart policy config
│
├── railway-runner/             # Traffic simulator — Railway service
│   ├── runner.py               # Infinite loop: 5 batches × 30 sessions every 30 min
│   ├── simulate_visits.py      # Playwright session logic (5 user journeys)
│   ├── requirements.txt        # playwright==1.42.0
│   ├── Dockerfile              # Playwright Python image + chromium
│   └── railway.json            # Builder + restart policy config
│
├── PULSE_DEMO_CREDENTIALS.md   # Demo accounts + payment card for live checkout demos
├── run_traffic_schedule.sh     # Local fallback: run traffic bursts from Mac
└── simulate_visits.py          # Local copy of the simulator (for ad-hoc runs)
```

---

## The Website (`fashion-store/`)

### Product Catalogue — 33 Products across 3 Collections

| Collection | Categories | Products |
|---|---|---|
| Men's | T-Shirts, Jeans, Accessories | 13 products |
| Women's | T-Shirts, Jeans, Accessories | 7 products |
| Kids' | T-Shirts, Jeans, Accessories | 13 products |

### Features

- **SPA routing** — URL updates on every navigation (`/collections/mens`, `/products/slim-fit-dark-wash-jeans`, `/checkout`, `/search?q=...`) using the History API
- **Product pages** — full-screen slide-in with image, description, size picker, reviews tab, and star ratings
- **Cart sidebar** — persistent via `localStorage`, add/remove/quantity, subtotal
- **Checkout flow** — 3-step modal (Account → Shipping → Payment) with demo auto-fill
- **Search** — live filtering as you type; pressing Enter lands on a dedicated search results page with a dismissible banner
- **Category filters** — nav links (All / Men's / Women's / Kids) + sub-category tabs (T-Shirts, Jeans, Accessories per gender)
- **Sort** — Featured, Price Low→High, Price High→Low, Name A–Z
- **Responsive** — mobile, tablet, desktop breakpoints; hamburger menu on mobile
- **SEO** — Open Graph, Twitter Cards, Schema.org JSON-LD (updated dynamically per page)
- **Performance tracking** — LCP, CLS, TTFB reported as custom Conviva events

### Conviva Instrumentation (`conviva-config.js` + `app.js`)

Every meaningful user interaction fires both a **Conviva event** and a **GA4-format dataLayer push**:

| User Action | Conviva Event | dataLayer Event |
|---|---|---|
| Page load / SPA navigation | `convivaPageView()` | `page_view` |
| View product list | — | `view_item_list` |
| Open product page | `product_view` | `view_item` |
| Add to cart | `add_to_cart` | `add_to_cart` |
| Remove from cart | `remove_from_cart` | `remove_from_cart` |
| Open checkout | `checkout_started` | `begin_checkout` |
| Enter email | `checkout_email_entered` | `add_payment_info` (step 1) |
| Enter shipping | `checkout_shipping_entered` | `add_shipping_info` |
| Place order | `purchase` | `purchase` |
| Search | `search` | `search` |
| Scroll depth | `scroll_depth` (25/50/75/100%) | `scroll` |
| Web vitals | `web_vital` (LCP/CLS/TTFB) | — |

**SDK loading pattern:** The Conviva JS SDK loads asynchronously (`defer`). `conviva-config.js` installs a synchronous stub that queues all calls before the SDK is ready, then replays them once loaded.

---

## Traffic Simulator (`railway-runner/`)

Generates realistic, diverse browser sessions to keep the Conviva dashboard populated 24/7.

### User Journey Scenarios

| Scenario | Frequency | What happens |
|---|---|---|
| `browse_only` | 3/14 | Picks a random category, scrolls the product grid |
| `product_view` | 4/14 | Browse → clicks a product card, reads details |
| `add_to_cart` | 3/14 | Product view → selects a size → adds to cart |
| `checkout_start` | 2/14 | Add to cart → opens cart → clicks Checkout |
| `full_checkout` | 2/14 | Checkout → fills email + shipping → reaches payment step |

### Session Diversity

Each session gets a randomised combination of:
- **30 unique User-Agent strings** (Chrome, Firefox, Safari, Edge, Opera; desktop + mobile + tablet)
- **9 viewport sizes** (1920×1080 down to 360×780)
- **4 locales** (en-US, en-GB, en-CA, en-AU)
- **7 time zones** (New York, Chicago, Los Angeles, Denver, London, Paris, Singapore)

### Throughput

```
150 sessions per run  ×  ~2 runs per hour  =  ~300 sessions/hour
Sessions run 3 at a time with 2–4 s gaps between sub-batches
```

---

## Deployment

### Live URL

```
https://pulse-site-production.up.railway.app
```

### Deploying a Site Change

1. Edit files in `fashion-store/` (this is the source of truth).
2. Sync to the Railway deploy directory:
   ```bash
   cp fashion-store/{index.html,app.js,style.css,conviva-config.js} railway-site/
   ```
3. **Bump the asset version** in `railway-site/index.html` (prevents Railway's edge CDN from serving stale cached files):
   ```html
   <!-- Change v=4 → v=5 (or whatever is next) -->
   <link rel="stylesheet" href="style.css?v=5">
   <script src="conviva-config.js?v=5"></script>
   <script src="app.js?v=5"></script>
   ```
4. Deploy:
   ```bash
   cd railway-site
   railway up --service "pulse-site" --detach
   ```

> **Why the version string?** nginx serves JS/CSS with `Cache-Control: public, immutable` (7-day). Railway's globally-distributed edge CDN honours this and never re-fetches the same URL — even after a redeploy. Changing the query string (`?v=N`) creates a new URL that bypasses both the CDN cache and any browser cache, guaranteeing every user gets the updated files.

### Deploying a Simulator Change

```bash
cd railway-runner
railway up --service "lavish-reflection" --detach
```

### Linking a Directory to Railway (first-time setup)

```bash
cd railway-site
railway link --project "lavish-reflection"  # or project ID
railway service pulse-site

cd ../railway-runner
railway link --project "lavish-reflection"
railway service lavish-reflection
```

---

## Running Locally

### Serve the site

```bash
cd fashion-store
python3 -m http.server 8888
# Visit: http://localhost:8888
```

### Run the traffic simulator locally (one batch of 30 sessions)

```bash
pip install playwright==1.42.0
playwright install chromium
python3 simulate_visits.py
```

---

## Demo Credentials

See [PULSE_DEMO_CREDENTIALS.md](PULSE_DEMO_CREDENTIALS.md) for demo accounts and the test payment card used in live checkout demonstrations.

Quick reference:

| Email | Auto-fills shipping to |
|---|---|
| `test@pulse.com` | New York, NY |
| `shopper@pulse.com` | Los Angeles, CA |
| `demo@pulse.com` | Chicago, IL |

**Test card:** `123456789012` — any future expiry, any CVV.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla JS (ES6), HTML5, CSS3 — zero frameworks |
| Hosting | Railway (Docker / nginx:alpine) |
| CDN | Railway edge (global) |
| Fonts | Google Fonts — Inter |
| Icons | Font Awesome 6.5 |
| Images | picsum.photos (seeded, consistent per product) |
| Analytics | Conviva App Analytics SDK v1.5.5 |
| Traffic simulation | Python 3 + Playwright 1.42 (Chromium headless) |
| CI/Restart | Railway `restartPolicyType: ALWAYS` |

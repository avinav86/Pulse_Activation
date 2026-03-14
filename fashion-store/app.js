/* ================================================================
   PULSE FASHION — APP.JS
   20 Products: Men's & Women's (T-Shirts, Jeans, Accessories)
   ================================================================ */

// ========== PRODUCT DATA ==========
const PRODUCTS = [

  // ── MEN'S T-SHIRTS ──────────────────────────────────────────
  {
    id: 1,
    name: "Classic White Essential Tee",
    category: "mens-tshirts",
    categoryLabel: "Men's T-Shirts",
    price: 29.99,
    rating: 4.8, reviews: 124,
    badge: "New",
    sizes: ["XS","S","M","L","XL","XXL"],
    image: "https://picsum.photos/seed/pulse-m-tee-1/600/800",
    description: "A wardrobe cornerstone crafted from 100% GOTS-certified organic cotton. The perfect weight — not too heavy, not too light. Pre-washed for instant softness and minimal shrinkage."
  },
  {
    id: 2,
    name: "Urban Graphic Tee",
    category: "mens-tshirts",
    categoryLabel: "Men's T-Shirts",
    price: 34.99,
    rating: 4.6, reviews: 89,
    badge: "Popular",
    sizes: ["S","M","L","XL","XXL"],
    image: "https://picsum.photos/seed/pulse-m-tee-2/600/800",
    description: "Bold screen-print artwork on 240 GSM premium cotton. Relaxed fit with dropped shoulders. Each design is a limited-edition collaboration with emerging street artists."
  },
  {
    id: 3,
    name: "Striped Nautical Tee",
    category: "mens-tshirts",
    categoryLabel: "Men's T-Shirts",
    price: 32.99,
    rating: 4.5, reviews: 67,
    badge: null,
    sizes: ["XS","S","M","L","XL"],
    image: "https://picsum.photos/seed/pulse-m-tee-3/600/800",
    description: "Classic Breton stripes on a timeless crew-neck silhouette. Made from a soft cotton-modal blend for extra drape and comfort. A style that never goes out of fashion."
  },
  {
    id: 4,
    name: "Performance Dry-Fit Tee",
    category: "mens-tshirts",
    categoryLabel: "Men's T-Shirts",
    price: 39.99,
    rating: 4.7, reviews: 203,
    badge: "Sale",
    sizes: ["S","M","L","XL","XXL"],
    image: "https://picsum.photos/seed/pulse-m-tee-4/600/800",
    description: "Advanced moisture-wicking fabric keeps you cool and dry. 4-way stretch, anti-odor treatment, and built-in UPF 30+ sun protection. From gym to street seamlessly."
  },

  // ── MEN'S JEANS ─────────────────────────────────────────────
  {
    id: 5,
    name: "Slim Fit Dark Wash Jeans",
    category: "mens-jeans",
    categoryLabel: "Men's Jeans",
    price: 69.99,
    rating: 4.9, reviews: 312,
    badge: "New",
    sizes: ["28×30","30×30","32×30","32×32","34×32","36×32"],
    image: "https://picsum.photos/seed/pulse-m-jean-1/600/800",
    description: "Premium Japanese selvedge denim in deep indigo. Slim through hip and thigh with a tapered leg. 2% elastane for comfortable all-day stretch without bagging out."
  },
  {
    id: 6,
    name: "Relaxed Straight Leg Jeans",
    category: "mens-jeans",
    categoryLabel: "Men's Jeans",
    price: 74.99,
    rating: 4.6, reviews: 178,
    badge: null,
    sizes: ["28×30","30×30","32×30","32×32","34×32","36×34"],
    image: "https://picsum.photos/seed/pulse-m-jean-2/600/800",
    description: "The definition of effortless cool. Relaxed through seat and thigh, straight leg opening. Mid-rise waist in a medium-wash stonewashed denim. A classic done right."
  },
  {
    id: 7,
    name: "Distressed Skinny Jeans",
    category: "mens-jeans",
    categoryLabel: "Men's Jeans",
    price: 79.99,
    rating: 4.4, reviews: 95,
    badge: "Popular",
    sizes: ["28×30","30×32","32×30","32×32","34×32"],
    image: "https://picsum.photos/seed/pulse-m-jean-3/600/800",
    description: "Artfully distressed — whisker fades, knee rips, and chevron sanding — on a sleek skinny silhouette. High-stretch denim ensures genuine all-day comfort."
  },

  // ── MEN'S ACCESSORIES ────────────────────────────────────────
  {
    id: 8,
    name: "Full-Grain Leather Belt",
    category: "mens-accessories",
    categoryLabel: "Men's Accessories",
    price: 34.99,
    rating: 4.8, reviews: 156,
    badge: null,
    sizes: ["S (28–32\")", "M (32–36\")", "L (36–40\")", "XL (40–44\")"],
    image: "https://picsum.photos/seed/pulse-m-acc-1/600/800",
    description: "Vegetable-tanned full-grain leather with a brushed-nickel buckle. Ages beautifully with wear. Cut from a single piece of hide — no bonding, no composite filler."
  },
  {
    id: 9,
    name: "Minimalist Chronograph Watch",
    category: "mens-accessories",
    categoryLabel: "Men's Accessories",
    price: 129.99,
    rating: 4.9, reviews: 241,
    badge: "Premium",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-m-acc-2/600/800",
    description: "Swiss-inspired design with Japanese quartz movement. Scratch-resistant mineral crystal, 5ATM water resistance, and a 316L stainless-steel case with anti-reflective coating."
  },
  {
    id: 10,
    name: "Heritage Canvas Backpack",
    category: "mens-accessories",
    categoryLabel: "Men's Accessories",
    price: 64.99,
    rating: 4.7, reviews: 189,
    badge: "New",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-m-acc-3/600/800",
    description: "16L waxed cotton canvas with vegetable-leather trim and YKK zippers. Padded laptop sleeve (fits 15\"), hidden rear security pocket, and adjustable padded straps. Built to last decades."
  },

  // ── WOMEN'S T-SHIRTS ─────────────────────────────────────────
  {
    id: 11,
    name: "Floral Bloom Crop Tee",
    category: "womens-tshirts",
    categoryLabel: "Women's T-Shirts",
    price: 29.99,
    rating: 4.7, reviews: 198,
    badge: "New",
    sizes: ["XS","S","M","L","XL"],
    image: "https://picsum.photos/seed/pulse-w-tee-1/600/800",
    description: "Delicate botanical print on a chic cropped silhouette. Lightweight jersey with a relaxed-but-cropped fit. Pairs effortlessly with high-waisted bottoms of any kind."
  },
  {
    id: 12,
    name: "Oversized Comfort Tee",
    category: "womens-tshirts",
    categoryLabel: "Women's T-Shirts",
    price: 27.99,
    rating: 4.8, reviews: 334,
    badge: "Popular",
    sizes: ["XS","S","M","L","XL","XXL"],
    image: "https://picsum.photos/seed/pulse-w-tee-2/600/800",
    description: "Your weekend essential. 220 GSM heavyweight cotton in a generous oversized fit. Boxy silhouette, dropped shoulders, relaxed hem. Pre-washed for instant lived-in softness."
  },
  {
    id: 13,
    name: "Fitted Ribbed V-Neck Tee",
    category: "womens-tshirts",
    categoryLabel: "Women's T-Shirts",
    price: 24.99,
    rating: 4.6, reviews: 267,
    badge: null,
    sizes: ["XS","S","M","L","XL"],
    image: "https://picsum.photos/seed/pulse-w-tee-3/600/800",
    description: "Slim-fitted ribbed cotton-Lyocell blend in a flattering V-neck cut. Naturally breathable, moisture-managing. A wardrobe staple that transitions seamlessly day to evening."
  },
  {
    id: 14,
    name: "Color Block Statement Tee",
    category: "womens-tshirts",
    categoryLabel: "Women's T-Shirts",
    price: 34.99,
    rating: 4.5, reviews: 112,
    badge: "Sale",
    sizes: ["XS","S","M","L","XL"],
    image: "https://picsum.photos/seed/pulse-w-tee-4/600/800",
    description: "Bold geometric color-blocking in a modern boxy silhouette. 100% GOTS-certified organic cotton. Each panel is individually dyed for richness and depth — effortlessly statement-making."
  },

  // ── WOMEN'S JEANS ────────────────────────────────────────────
  {
    id: 15,
    name: "High-Rise Skinny Jeans",
    category: "womens-jeans",
    categoryLabel: "Women's Jeans",
    price: 74.99,
    rating: 4.9, reviews: 421,
    badge: "Popular",
    sizes: ["24","25","26","27","28","29","30","31"],
    image: "https://picsum.photos/seed/pulse-w-jean-1/600/800",
    description: "Our bestselling silhouette. High-rise waist in premium stretch denim that hugs in all the right places. Enzyme-washed for a broken-in feel from the very first wear."
  },
  {
    id: 16,
    name: "Wide Leg Palazzo Jeans",
    category: "womens-jeans",
    categoryLabel: "Women's Jeans",
    price: 79.99,
    rating: 4.7, reviews: 178,
    badge: "New",
    sizes: ["24","25","26","27","28","29","30"],
    image: "https://picsum.photos/seed/pulse-w-jean-2/600/800",
    description: "The silhouette of the season. High-rise waist with a dramatically wide leg that flows effortlessly. Lightweight chambray-weight denim with a subtle linen-like natural texture."
  },
  {
    id: 17,
    name: "Distressed Boyfriend Jeans",
    category: "womens-jeans",
    categoryLabel: "Women's Jeans",
    price: 69.99,
    rating: 4.5, reviews: 203,
    badge: null,
    sizes: ["24","25","26","27","28","29","30","31","32"],
    image: "https://picsum.photos/seed/pulse-w-jean-3/600/800",
    description: "Relaxed boyfriend fit with artful hand-sanding and strategic distressing. Mid-rise, relaxed through seat and thigh, straight leg. The lived-in look — elevated and curated."
  },

  // ── WOMEN'S ACCESSORIES ──────────────────────────────────────
  {
    id: 18,
    name: "Layered Gold Necklace Set",
    category: "womens-accessories",
    categoryLabel: "Women's Accessories",
    price: 34.99,
    rating: 4.8, reviews: 312,
    badge: "Popular",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-w-acc-1/600/800",
    description: "Set of 3 dainty 18k gold-plated necklaces in varying lengths (16\", 18\", 20\"). Lobster-clasp closure. Hypoallergenic, tarnish-resistant, and safe for sensitive skin."
  },
  {
    id: 19,
    name: "Structured Vegan Tote",
    category: "womens-accessories",
    categoryLabel: "Women's Accessories",
    price: 89.99,
    rating: 4.9, reviews: 267,
    badge: "Premium",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-w-acc-2/600/800",
    description: "Roomy structured tote in pebbled vegan leather. Magnetic snap-top closure, 4 interior pockets including a zip pocket and key clip. Fits a 15\" laptop. Spot-clean care."
  },
  {
    id: 20,
    name: "Silk Scrunchie Bundle",
    category: "womens-accessories",
    categoryLabel: "Women's Accessories",
    price: 16.99,
    rating: 4.7, reviews: 489,
    badge: "Sale",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-w-acc-3/600/800",
    description: "Set of 5 pure mulberry silk scrunchies in an assorted seasonal palette. Reduces breakage, prevents pillow creases, and keeps hair looking smooth. Gentle on all hair types."
  },

  // ── KIDS' T-SHIRTS ───────────────────────────────────────────
  {
    id: 21,
    name: "Kids' Graphic Adventure Tee",
    category: "kids-tshirts",
    categoryLabel: "Kids' T-Shirts",
    price: 19.99,
    rating: 4.8, reviews: 143,
    badge: "New",
    sizes: ["2T","3T","4T","5","6","7","8","10","12"],
    image: "https://picsum.photos/seed/pulse-k-tee-1/600/800",
    description: "Bold adventure-themed print on soft 100% organic cotton. Pre-washed for instant softness. Reinforced neckline and tagless label for all-day comfort."
  },
  {
    id: 22,
    name: "Kids' Rainbow Stripe Tee",
    category: "kids-tshirts",
    categoryLabel: "Kids' T-Shirts",
    price: 17.99,
    rating: 4.7, reviews: 98,
    badge: "Popular",
    sizes: ["2T","3T","4T","5","6","7","8","10","12"],
    image: "https://picsum.photos/seed/pulse-k-tee-2/600/800",
    description: "Cheerful multi-colour stripes on a relaxed-fit tee. Soft cotton-jersey with gentle stretch for easy movement. Machine washable and fade-resistant."
  },
  {
    id: 23,
    name: "Kids' Dinosaur Print Tee",
    category: "kids-tshirts",
    categoryLabel: "Kids' T-Shirts",
    price: 18.99,
    rating: 4.9, reviews: 211,
    badge: "Popular",
    sizes: ["2T","3T","4T","5","6","7","8","10","12"],
    image: "https://picsum.photos/seed/pulse-k-tee-3/600/800",
    description: "All-over dino print on heavyweight jersey. Glow-in-the-dark details for bedtime fun. Pre-shrunk, tagless comfort label — parent and kid approved."
  },
  {
    id: 24,
    name: "Kids' Superhero Logo Tee",
    category: "kids-tshirts",
    categoryLabel: "Kids' T-Shirts",
    price: 21.99,
    rating: 4.6, reviews: 87,
    badge: null,
    sizes: ["4","5","6","7","8","10","12","14"],
    image: "https://picsum.photos/seed/pulse-k-tee-4/600/800",
    description: "Empowering graphic tee with embossed logo print. 200GSM jersey built for durability through all adventures. Ribbed collar that holds its shape wash after wash."
  },

  // ── KIDS' JEANS ──────────────────────────────────────────────
  {
    id: 25,
    name: "Kids' Classic Straight Jeans",
    category: "kids-jeans",
    categoryLabel: "Kids' Jeans",
    price: 34.99,
    rating: 4.8, reviews: 167,
    badge: "New",
    sizes: ["4","5","6","7","8","10","12","14"],
    image: "https://picsum.photos/seed/pulse-k-jean-1/600/800",
    description: "Durable mid-weight denim with adjustable internal waistband. Straight-leg cut with reinforced knees. Soft brushed inner lining for extra warmth and comfort."
  },
  {
    id: 26,
    name: "Kids' Pull-On Jogger Jeans",
    category: "kids-jeans",
    categoryLabel: "Kids' Jeans",
    price: 29.99,
    rating: 4.9, reviews: 302,
    badge: "Popular",
    sizes: ["2T","3T","4T","5","6","7","8","10","12"],
    image: "https://picsum.photos/seed/pulse-k-jean-2/600/800",
    description: "The comfort of joggers with the look of jeans. Elastic waistband with faux fly — easy for kids to put on themselves. Stretchy denim that moves with them."
  },
  {
    id: 27,
    name: "Kids' Slim Fit Dark Wash Jeans",
    category: "kids-jeans",
    categoryLabel: "Kids' Jeans",
    price: 37.99,
    rating: 4.5, reviews: 89,
    badge: null,
    sizes: ["5","6","7","8","10","12","14","16"],
    image: "https://picsum.photos/seed/pulse-k-jean-3/600/800",
    description: "Grown-up style in a kid-friendly fit. Slim-cut dark-wash denim with 2% stretch for comfort. Reinforced seat and knees. Adjustable interior waistband."
  },

  // ── KIDS' ACCESSORIES ─────────────────────────────────────────
  {
    id: 28,
    name: "Kids' Mini Canvas Backpack",
    category: "kids-accessories",
    categoryLabel: "Kids' Accessories",
    price: 24.99,
    rating: 4.8, reviews: 224,
    badge: "Popular",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-k-acc-1/600/800",
    description: "Perfectly sized for little ones. Padded back panel, adjustable straps. Water-resistant canvas with wipe-clean lining. Fits all school essentials and a snack."
  },
  {
    id: 29,
    name: "Kids' Embroidered Baseball Cap",
    category: "kids-accessories",
    categoryLabel: "Kids' Accessories",
    price: 14.99,
    rating: 4.7, reviews: 156,
    badge: "New",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-k-acc-2/600/800",
    description: "Structured 6-panel cap with fun embroidered patch. Adjustable snap-back closure for a perfect fit. UPF 30+ sun protection for outdoor adventures."
  },
  {
    id: 30,
    name: "Kids' Cozy Zip Hoodie",
    category: "kids-accessories",
    categoryLabel: "Kids' Accessories",
    price: 32.99,
    rating: 4.9, reviews: 178,
    badge: "New",
    sizes: ["4","5","6","7","8","10","12","14"],
    image: "https://picsum.photos/seed/pulse-k-acc-3/600/800",
    description: "Ultra-soft fleece hoodie with full zip and kangaroo pocket. Ribbed cuffs and hem for a snug fit. Pill-resistant fabric that stays looking new wash after wash."
  },
  {
    id: 31,
    name: "Kids' Rainbow Sock Bundle",
    category: "kids-accessories",
    categoryLabel: "Kids' Accessories",
    price: 12.99,
    rating: 4.6, reviews: 312,
    badge: "Sale",
    sizes: ["S (Shoe 4–7)","M (Shoe 8–12)","L (Shoe 13–3)"],
    image: "https://picsum.photos/seed/pulse-k-acc-4/600/800",
    description: "Pack of 7 bright rainbow-striped cotton socks — one for each day. Cushioned sole, arch support, and reinforced heel and toe. Machine washable."
  },
  {
    id: 32,
    name: "Kids' Insulated Sport Bottle",
    category: "kids-accessories",
    categoryLabel: "Kids' Accessories",
    price: 16.99,
    rating: 4.8, reviews: 445,
    badge: "Popular",
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-k-acc-5/600/800",
    description: "BPA-free 500ml insulated stainless steel bottle. Keeps drinks cold for 12 hours. Leak-proof sport lid with carry loop. Dishwasher safe."
  },
  {
    id: 33,
    name: "Kids' Patterned Beanie",
    category: "kids-accessories",
    categoryLabel: "Kids' Accessories",
    price: 13.99,
    rating: 4.7, reviews: 134,
    badge: null,
    sizes: ["One Size"],
    image: "https://picsum.photos/seed/pulse-k-acc-6/600/800",
    description: "Stretchy jacquard-knit beanie with fun all-over pattern. Soft fleece lining keeps little ears warm. One size fits most kids aged 3–12."
  }
];

// ========== STATE ==========
let cart          = JSON.parse(localStorage.getItem('pulse-cart') || '[]');
let currentFilter = 'all';
let currentSearch = '';
let currentSort   = 'default';
let searchLanded  = false;   // true when user pressed Enter to land on search results page
let _prevCollectionPath  = '/';
let _prevCollectionTitle = 'PULSE — Modern Fashion';

// ========== DOM REFS ==========
const productsGrid   = document.getElementById('products-grid');
const cartSidebar    = document.getElementById('cart-sidebar');
const cartOverlay    = document.getElementById('cart-overlay');
const cartBadge      = document.getElementById('cart-badge');
const cartItemsEl    = document.getElementById('cart-items');
const cartEmpty      = document.getElementById('cart-empty');
const cartFooter     = document.getElementById('cart-footer');
const cartSubtotal   = document.getElementById('cart-subtotal');
const cartItemCount  = document.getElementById('cart-item-count');
const modalOverlay   = document.getElementById('modal-overlay');
const modalContent   = document.getElementById('modal-content');
const resultsCount   = document.getElementById('results-count');
const noResults      = document.getElementById('no-results');
const toastEl        = document.getElementById('toast');
const toastMsg       = document.getElementById('toast-message');
const searchBar      = document.getElementById('search-bar');
const searchInput    = document.getElementById('search-input');
const headerEl       = document.getElementById('header');

// ========== HELPERS ==========
const fmt   = n  => '$' + n.toFixed(2);
const stars = r  => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
const PRODUCT_BY_SLUG = {};
PRODUCTS.forEach(p => { PRODUCT_BY_SLUG[slugify(p.name)] = p.id; });

function filterToPath(f) {
  return f === 'all' ? '/' : '/collections/' + f;
}
function filterToTitle(f) {
  const m = {
    mens:                 "Men's Collection — PULSE",
    womens:               "Women's Collection — PULSE",
    'mens-tshirts':       "Men's T-Shirts — PULSE",
    'mens-jeans':         "Men's Jeans — PULSE",
    'mens-accessories':   "Men's Accessories — PULSE",
    'womens-tshirts':     "Women's T-Shirts — PULSE",
    'womens-jeans':       "Women's Jeans — PULSE",
    'womens-accessories': "Women's Accessories — PULSE",
    'kids':               "Kids' Collection — PULSE",
    'kids-tshirts':       "Kids' T-Shirts — PULSE",
    'kids-jeans':         "Kids' Jeans — PULSE",
    'kids-accessories':   "Kids' Accessories — PULSE",
  };
  return m[f] || 'PULSE — Modern Fashion';
}

// ========== DATA LAYER — Standard e-commerce event bus ==========
// Industry-standard GTM/GA4 dataLayer pattern used by Flipkart, Amazon,
// Myntra etc. Analytics tools read from this object automatically.
// Format follows GA4 e-commerce spec (view_item, add_to_cart, purchase…).
window.dataLayer = window.dataLayer || [];

function dlPush(eventName, payload) {
  window.dataLayer.push(Object.assign(
    { event: eventName, timestamp: new Date().toISOString() },
    payload
  ));
}

/**
 * Update all page-level meta tags on every SPA navigation.
 * Mirrors what server-rendered pages (Flipkart, Amazon) do per route.
 */
function updatePageMeta({ title, description, url, image, type } = {}) {
  const BASE = 'https://procivic-addyson-kaleidoscopically.ngrok-free.dev';
  const fullUrl = url ? (url.startsWith('http') ? url : BASE + url) : BASE + window.location.pathname;
  if (title) {
    document.title = title;
    const el = document.getElementById('og-title');   if (el) el.content = title;
    const tw = document.getElementById('tw-title');   if (tw) tw.content = title;
  }
  if (description) {
    const m = document.querySelector('meta[name="description"]'); if (m) m.content = description;
    const o = document.getElementById('og-description');          if (o) o.content = description;
    const t = document.getElementById('tw-description');          if (t) t.content = description;
  }
  const cu = document.getElementById('canonical-url');  if (cu) cu.href    = fullUrl;
  const ou = document.getElementById('og-url');         if (ou) ou.content = fullUrl;
  if (image) {
    const oi = document.getElementById('og-image');  if (oi) oi.content = image;
    const ti = document.getElementById('tw-image');  if (ti) ti.content = image;
  }
  if (type) {
    const ot = document.getElementById('og-type');   if (ot) ot.content = type;
  }
}

/**
 * Inject / replace the page-level JSON-LD structured data block.
 * Search engines and analytics crawlers read this to understand page context.
 */
function updatePageSchema(graph) {
  const el = document.getElementById('page-schema');
  if (el) el.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

/**
 * Build a GA4-compatible ecommerce item object from a PRODUCTS entry.
 * Standard format used across Flipkart, Myntra, Nykaa data layers.
 */
function toEcomItem(p, extras) {
  return Object.assign({
    item_id:       String(p.id),
    item_name:     p.name,
    item_brand:    'PULSE',
    item_category: p.categoryLabel,
    item_variant:  null,
    price:         p.price,
    currency:      'USD',
  }, extras || {});
}

function applyFilter(filter, push = true) {
  currentFilter = filter;
  document.querySelectorAll('.nav-link').forEach(l => {
    const lf = l.dataset.filter;
    l.classList.toggle('active',
      lf === 'all'    ? filter === 'all' :
      lf === 'mens'   ? filter === 'mens'   || filter.startsWith('mens-') :
      lf === 'womens' ? filter === 'womens' || filter.startsWith('womens-') :
      lf === 'kids'   ? filter === 'kids'   || filter.startsWith('kids-') :
      false
    );
  });
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  const matchTab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);
  if (matchTab) matchTab.classList.add('active');
  else document.querySelector('.filter-tab[data-filter="all"]').classList.add('active');

  renderProducts();

  const path  = filterToPath(filter);
  const title = filterToTitle(filter);
  const _isHome = filter === 'all';

  if (push) {
    history.pushState({ page: 'collection', filter }, title, path);
    document.querySelector('.filters-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Always update title, meta, schema, and fire page view — even on initial load (push=false)
  document.title       = title;
  _prevCollectionPath  = path;
  _prevCollectionTitle = title;
  convivaPageView(title);
  updatePageMeta({
    title,
    url:         path,
    description: _isHome
      ? 'Shop PULSE Fashion — curated men\'s and women\'s clothing. Free shipping over $75.'
      : `Shop ${title.replace(' — PULSE', '')} at PULSE Fashion. Free shipping over $75.`,
    image:  _isHome ? 'https://picsum.photos/seed/pulse-og/1200/630' : undefined,
    type:   'website',
  });
  updatePageSchema([
    { '@type': 'CollectionPage', 'name': title, 'url': window.location.href,
      'breadcrumb': { '@type': 'BreadcrumbList', 'itemListElement': [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://procivic-addyson-kaleidoscopically.ngrok-free.dev' },
        ...(!_isHome ? [{ '@type': 'ListItem', position: 2, name: title.replace(' — PULSE', '') }] : []),
      ]},
    },
  ]);
  dlPush('page_view', {
    page_type:     _isHome ? 'home' : 'plp',
    page_title:    title,
    page_url:      window.location.href,
    page_location: window.location.href,
    page_referrer: document.referrer || '',
    page_category: filter,
    cart_count:    getCartCount(),
    cart_value:    parseFloat(getCartTotal().toFixed(2)),
  });
}

function generateReviews(p) {
  const pool = [
    { name: 'Sarah M.', avatar: 'SM' }, { name: 'James K.', avatar: 'JK' },
    { name: 'Priya R.', avatar: 'PR' }, { name: 'Tyler W.', avatar: 'TW' },
    { name: 'Aisha L.', avatar: 'AL' }, { name: 'Luca D.',  avatar: 'LD' },
  ];
  const phrases = {
    'mens-tshirts':       ['Super soft and fits perfectly — bought two more!', 'Great quality, washed 10× and still looks new.', 'Really comfortable, wore it all weekend.', 'Color is exactly as shown. Excellent fit.', 'Lightweight but still feels premium.'],
    'womens-tshirts':     ['Love how it drapes — very flattering silhouette.', 'Fabric is so lightweight and breathable.', 'Perfect with high-waisted jeans.', 'Exactly as described. Fast delivery too.', 'Great staple piece — already re-ordered.'],
    'mens-jeans':         ["Best jeans I've owned. Fits like they were made for me.", 'Great stretch — can actually move in these.', 'True to size and very well-constructed.', 'The denim quality is fantastic, feels premium.', 'Held up great after many washes.'],
    'womens-jeans':       ['Obsessed! The waist stays up all day.', 'Finally jeans that fit my shape properly.', 'Soft denim and the color is gorgeous.', 'Runs true to size — very comfortable.', 'Got so many compliments wearing these.'],
    'mens-accessories':   ['Incredibly well-made. Looks way more expensive.', 'Solid construction — zero complaints after months of use.', 'Perfect gift — looks premium in person.', 'Exactly what I was looking for. Fast shipping.', 'Great everyday piece, highly recommend.'],
    'womens-accessories': ['Absolutely love it — gets so many compliments.', 'The quality is amazing for the price.', 'Looks much more expensive than it is.', 'Perfect size and super stylish.', 'Shipped fast and packaged beautifully.'],
    'kids-tshirts':       ['My kid absolutely loves it — wears it every week!', 'Washes well and the colour stays vibrant.', 'Super soft, my toddler refused to take it off.', 'Great quality and true to size.', 'Fast delivery and the print is excellent.'],
    'kids-jeans':         ['Finally jeans my son actually wants to wear!', 'The adjustable waist is a lifesaver.', 'Held up brilliantly — even with playground rough-housing.', 'Look great and super comfortable for school.', 'Fits perfectly and the denim is good quality.'],
    'kids-accessories':   ['My daughter uses it every single day.', 'Great quality for the price — very durable.', 'So cute — my kid gets compliments on it constantly!', 'Exactly as described, arrived quickly.', 'Perfect gift — my son was thrilled.'],
  };
  const catPhrases = phrases[p.category] || phrases['mens-tshirts'];
  const reviewers  = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
  return reviewers.map((r, i) => ({
    ...r,
    rating:  Math.random() > 0.25 ? 5 : 4,
    text:    catPhrases[i % catPhrases.length],
    daysAgo: Math.floor(Math.random() * 60) + 1,
    helpful: Math.floor(Math.random() * 18) + 1,
  }));
}

// ========== FILTERING & SORTING ==========
function getFiltered() {
  let list = [...PRODUCTS];

  if (currentFilter !== 'all') {
    list = list.filter(p =>
      currentFilter === 'mens'    ? p.category.startsWith('mens') :
      currentFilter === 'womens'  ? p.category.startsWith('womens') :
      currentFilter === 'kids'    ? p.category.startsWith('kids') :
      p.category === currentFilter
    );
  }

  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (currentSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (currentSort === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  const filtered = getFiltered();
  productsGrid.innerHTML = '';

  if (filtered.length === 0) {
    productsGrid.style.display = 'none';
    noResults.style.display    = 'block';
    resultsCount.textContent   = 'No products found';
    return;
  }

  productsGrid.style.display = 'grid';
  noResults.style.display    = 'none';
  resultsCount.textContent   = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  // Standard e-commerce: push product list impression to dataLayer
  dlPush('view_item_list', {
    ecommerce: {
      item_list_name: filterToTitle(currentFilter).replace(' — PULSE', ''),
      item_list_id:   currentFilter,
      currency:       'USD',
      items: filtered.map((p, idx) => toEcomItem(p, { index: idx + 1, item_list_name: currentFilter })),
    },
  });

  filtered.forEach((p, _listIdx) => {
    const card = document.createElement('div');
    card.className    = 'product-card';
    card.dataset.id   = p.id;
    // Standard microdata attributes — analytics crawlers read these
    card.dataset.itemId       = p.id;
    card.dataset.itemName     = p.name;
    card.dataset.itemPrice    = p.price;
    card.dataset.itemCategory = p.categoryLabel;
    card.dataset.itemBrand    = 'PULSE';
    card.dataset.itemPosition = _listIdx + 1;

    const badgeHTML = p.badge
      ? `<span class="card-badge badge-${p.badge.toLowerCase()}">${p.badge}</span>`
      : '';

    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/Product');
    card.innerHTML = `
      <meta itemprop="sku" content="${p.id}">
      <meta itemprop="brand" content="PULSE">
      <meta itemprop="url" content="/products/${slugify(p.name)}">
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" itemprop="image">
        ${badgeHTML}
        <div class="card-actions">
          <button class="quick-add-btn" data-id="${p.id}">
            <i class="fas fa-plus"></i> Quick Add
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-category" itemprop="category">${p.categoryLabel}</div>
        <div class="card-name" itemprop="name">${p.name}</div>
        <div class="card-footer-row">
          <div class="card-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <meta itemprop="priceCurrency" content="USD">
            <span itemprop="price" content="${p.price}">${fmt(p.price)}</span>
            <link itemprop="availability" href="https://schema.org/InStock">
          </div>
          <div class="card-rating" itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
            <span class="stars">${stars(p.rating)}</span>
            <meta itemprop="ratingValue" content="${p.rating}">
            <meta itemprop="reviewCount" content="${p.reviews}">
            <span>(${p.reviews})</span>
          </div>
        </div>
      </div>
    `;

    // Click card → open product page (unless quick-add was clicked)
    card.addEventListener('click', e => {
      if (!e.target.closest('.quick-add-btn')) openProductPage(p.id);
    });

    // Quick add — picks a mid-range default size
    card.querySelector('.quick-add-btn').addEventListener('click', e => {
      e.stopPropagation();
      const defaultSize = p.sizes[Math.floor(p.sizes.length / 2)];
      addToCart(p.id, defaultSize);
      convivaTrack('quick_add', { product_id: p.id, product_name: p.name, size: defaultSize });
      showToast(`"${p.name}" added to bag!`);
    });

    productsGrid.appendChild(card);
  });
}

// ========== CART LOGIC ==========
function saveCart() {
  localStorage.setItem('pulse-cart', JSON.stringify(cart));
}

function addToCart(productId, size) {
  const key      = `${productId}-${size}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ key, productId, size, qty: 1 });
  }
  saveCart();
  updateCartUI();
  // Conviva: add to cart
  const _atcProduct = PRODUCTS.find(x => x.id === productId);
  if (_atcProduct) {
    convivaTrack('add_to_cart', {
      product_id: productId, product_name: _atcProduct.name,
      size, price: _atcProduct.price, category: _atcProduct.category,
    });
    // GA4 standard e-commerce dataLayer push
    dlPush('add_to_cart', {
      ecommerce: {
        currency: 'USD',
        value:    _atcProduct.price,
        items:    [toEcomItem(_atcProduct, { item_variant: size, quantity: 1 })],
      },
    });
  }
}

function removeFromCart(key) {
  // Conviva: remove from cart (capture before filtering)
  const _rfcItem    = cart.find(i => i.key === key);
  const _rfcProduct = _rfcItem ? PRODUCTS.find(x => x.id === _rfcItem.productId) : null;
  if (_rfcProduct) {
    convivaTrack('remove_from_cart', {
      product_id: _rfcProduct.id, product_name: _rfcProduct.name, size: _rfcItem.size,
    });
    dlPush('remove_from_cart', {
      ecommerce: {
        currency: 'USD',
        value:    _rfcProduct.price,
        items:    [toEcomItem(_rfcProduct, { item_variant: _rfcItem.size, quantity: _rfcItem.qty })],
      },
    });
  }
  cart = cart.filter(i => i.key !== key);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(key); return; }
  saveCart();
  updateCartUI();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  cartBadge.textContent = count;
  cartBadge.classList.toggle('visible', count > 0);
  cartItemCount.textContent = `(${count})`;
  cartSubtotal.textContent  = fmt(getCartTotal());

  const hasItems = cart.length > 0;
  cartEmpty.style.display  = hasItems ? 'none'  : 'flex';
  cartFooter.style.display = hasItems ? 'flex'  : 'none';
}

function renderCartItems() {
  // Remove existing item rows (keep cart-empty div)
  cartItemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());

  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    if (!p) return;

    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-key="${item.key}" data-delta="-1">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-key="${item.key}" data-delta="1">+</button>
        </div>
        <span class="remove-item" data-key="${item.key}">Remove</span>
      </div>
      <div class="cart-item-price">${fmt(p.price * item.qty)}</div>
    `;

    el.querySelectorAll('.qty-btn').forEach(btn =>
      btn.addEventListener('click', () => updateQty(btn.dataset.key, parseInt(btn.dataset.delta)))
    );
    el.querySelector('.remove-item').addEventListener('click', () => removeFromCart(item.key));

    // Insert before the empty-state div
    cartItemsEl.insertBefore(el, cartEmpty);
  });
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  renderCartItems();
  document.body.style.overflow = 'hidden';
  // Standard: view_cart event with full cart snapshot
  dlPush('view_cart', {
    ecommerce: {
      currency:   'USD',
      value:      getCartTotal(),
      item_count: getCartCount(),
      items: cart.map(i => {
        const p = PRODUCTS.find(x => x.id === i.productId);
        return p ? toEcomItem(p, { item_variant: i.size, quantity: i.qty }) : null;
      }).filter(Boolean),
    },
  });
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ========== PRODUCT PAGE ==========
const mainSections = () => [
  document.querySelector('.hero'),
  document.querySelector('.filters-section'),
  document.querySelector('.main-content'),
];

function openProductPage(productId, push = true, activeTab = 'overview') {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  let selectedSize = p.sizes[Math.floor(p.sizes.length / 2)];
  const slug       = slugify(p.name);
  const reviews    = generateReviews(p);
  const avgRating  = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  // Related: same category first, then same gender to fill to 4
  let related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  if (related.length < 4) {
    const gender = p.category.startsWith('mens') ? 'mens' : 'womens';
    const extras = PRODUCTS.filter(x => x.category.startsWith(gender) && x.id !== p.id && !related.find(r => r.id === x.id));
    related = related.concat(extras).slice(0, 4);
  }

  const reviewsHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="reviewer-avatar">${r.avatar}</div>
        <div class="reviewer-meta">
          <span class="reviewer-name">${r.name}</span>
          <span class="review-date">${r.daysAgo}d ago</span>
        </div>
        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      </div>
      <p class="review-text">${r.text}</p>
      <div class="review-footer">
        <span class="verified-badge"><i class="fas fa-check-circle"></i> Verified Purchase</span>
        <button class="helpful-btn" onclick="this.textContent='👍 Helpful!'">Helpful (${r.helpful})</button>
      </div>
    </div>
  `).join('');

  const relatedHTML = related.map(rp => `
    <div class="related-card" data-id="${rp.id}" role="button" tabindex="0">
      <div class="related-img-wrap">
        <img src="${rp.image}" alt="${rp.name}" loading="lazy">
        ${rp.badge ? `<span class="card-badge badge-${rp.badge.toLowerCase()}">${rp.badge}</span>` : ''}
      </div>
      <div class="related-info">
        <div class="related-name">${rp.name}</div>
        <div class="related-price">${fmt(rp.price)}</div>
      </div>
    </div>
  `).join('');

  const productPage = document.getElementById('product-page');
  productPage.innerHTML = `
    <div class="pp-inner">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/" class="bc-link" data-filter="all">PULSE</a>
        <span class="breadcrumb-sep">›</span>
        <a href="/collections/${p.category}" class="bc-link" data-filter="${p.category}">${p.categoryLabel}</a>
        <span class="breadcrumb-sep">›</span>
        <span>${p.name}</span>
      </nav>

      <div class="pp-grid">
        <div class="pp-img-container">
          <div class="pp-img-wrap">
            <img src="${p.image}" alt="${p.name}">
          </div>
          ${p.badge ? `<span class="card-badge badge-${p.badge.toLowerCase()} pp-badge-overlay">${p.badge}</span>` : ''}
        </div>

        <div class="pp-info">
          <div class="pp-cat">${p.categoryLabel}</div>
          <h1 class="pp-name">${p.name}</h1>
          <div class="pp-rating-row">
            <span class="stars">${stars(p.rating)}</span>
            <button class="pp-rating-link" id="pp-rating-link">${p.rating} · ${p.reviews} reviews</button>
          </div>
          <div class="pp-price">${fmt(p.price)}</div>
          <hr class="modal-divider">
          <div class="size-label">
            <span>Select Size</span>
            <a href="#">Size Guide</a>
          </div>
          <div class="size-options">
            ${p.sizes.map(s => `<button class="size-btn ${s === selectedSize ? 'selected' : ''}" data-size="${s}">${s}</button>`).join('')}
          </div>
          <button class="btn btn-primary btn-full pp-add-btn" id="pp-add-btn">
            <i class="fas fa-shopping-bag"></i> Add to Bag &mdash; ${fmt(p.price)}
          </button>
          <div class="pp-trust">
            <div class="pp-trust-item"><i class="fas fa-truck"></i> Free shipping on orders over $75</div>
            <div class="pp-trust-item"><i class="fas fa-undo"></i> Free 30-day returns</div>
            <div class="pp-trust-item"><i class="fas fa-shield-alt"></i> Secure checkout</div>
          </div>
        </div>
      </div>

      <div class="pp-tabs-wrap">
        <button class="pp-tab ${activeTab === 'overview' ? 'active' : ''}" data-tab="overview">Description</button>
        <button class="pp-tab ${activeTab === 'reviews'  ? 'active' : ''}" data-tab="reviews">Reviews (${reviews.length})</button>
      </div>
      <div class="pp-panel ${activeTab === 'overview' ? 'active' : ''}" data-panel="overview">
        <p class="pp-desc">${p.description}</p>
      </div>
      <div class="pp-panel ${activeTab === 'reviews' ? 'active' : ''}" data-panel="reviews">
        <div class="reviews-summary">
          <span class="avg-num">${avgRating}</span>
          <span class="stars">${stars(parseFloat(avgRating))}</span>
          <span class="review-count">${reviews.length} reviews</span>
        </div>
        <div class="review-list">${reviewsHTML}</div>
      </div>

      ${related.length ? `
      <div class="related-section">
        <h3>You Might Also Like</h3>
        <div class="related-grid">${relatedHTML}</div>
      </div>` : ''}
    </div>
  `;

  // Breadcrumb links
  productPage.querySelectorAll('.bc-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      closeProductPage(false);
      applyFilter(link.dataset.filter);
    });
  });

  // Tab switching
  productPage.querySelectorAll('.pp-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const t = tab.dataset.tab;
      productPage.querySelectorAll('.pp-tab').forEach(x => x.classList.toggle('active', x.dataset.tab === t));
      productPage.querySelectorAll('.pp-panel').forEach(x => x.classList.toggle('active', x.dataset.panel === t));
      const tabPath  = `/products/${slug}${t === 'reviews' ? '/reviews' : ''}`;
      const tabTitle = t === 'reviews' ? `${p.name} — Reviews — PULSE` : `${p.name} — PULSE`;
      history.replaceState({ page: 'product', productId, activeTab: t }, tabTitle, tabPath);
      document.title = tabTitle;
      convivaPageView(tabTitle);
    });
  });

  // Rating link → jump to reviews tab
  productPage.querySelector('#pp-rating-link').addEventListener('click', () => {
    productPage.querySelectorAll('.pp-tab').forEach(x => x.classList.toggle('active', x.dataset.tab === 'reviews'));
    productPage.querySelectorAll('.pp-panel').forEach(x => x.classList.toggle('active', x.dataset.panel === 'reviews'));
    const tabPath = `/products/${slug}/reviews`;
    history.replaceState({ page: 'product', productId, activeTab: 'reviews' }, `${p.name} — Reviews — PULSE`, tabPath);
    document.title = `${p.name} — Reviews — PULSE`;
    convivaPageView(`${p.name} — Reviews — PULSE`);
    productPage.querySelector('.pp-tabs-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Size selection
  productPage.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      productPage.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
    });
  });

  // Add to bag
  productPage.querySelector('#pp-add-btn').addEventListener('click', () => {
    addToCart(p.id, selectedSize);
    showToast(`"${p.name}" added to bag!`);
    setTimeout(openCart, 300);
  });

  // Related product clicks
  productPage.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', () => openProductPage(parseInt(card.dataset.id)));
  });

  // Hide main sections, show product page
  mainSections().forEach(s => { if (s) s.style.display = 'none'; });
  productPage.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Conviva: page view + product view event
  const _ppTitle = activeTab === 'reviews' ? `${p.name} — Reviews — PULSE` : `${p.name} — PULSE`;
  convivaPageView(_ppTitle);
  convivaTrack('product_view', {
    product_id: p.id, product_name: p.name, category: p.category,
    price: p.price, badge: p.badge || null, rating: p.rating,
  });
  // Standard e-commerce: update page meta + inject Product schema + view_item
  const _slug = slugify(p.name);
  updatePageMeta({
    title:       _ppTitle,
    description: `${p.name} — ${p.categoryLabel} — $${p.price.toFixed(2)}. ${p.description ? p.description.slice(0, 120) + '…' : ''}`,
    url:         `/products/${_slug}`,
    image:       p.image,
    type:        'product',
  });
  updatePageSchema([
    {
      '@type':       'Product',
      name:          p.name,
      sku:           String(p.id),
      url:           `https://procivic-addyson-kaleidoscopically.ngrok-free.dev/products/${_slug}`,
      image:         p.image,
      description:   p.description || '',
      brand:         { '@type': 'Brand', name: 'PULSE' },
      category:      p.categoryLabel,
      offers: {
        '@type':       'Offer',
        priceCurrency: 'USD',
        price:         p.price,
        availability:  'https://schema.org/InStock',
        url:           `https://procivic-addyson-kaleidoscopically.ngrok-free.dev/products/${_slug}`,
        seller:        { '@type': 'Organization', name: 'PULSE Fashion' },
      },
      aggregateRating: {
        '@type':      'AggregateRating',
        ratingValue:  p.rating,
        reviewCount:  p.reviews,
        bestRating:   5,
        worstRating:  1,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',              item: 'https://procivic-addyson-kaleidoscopically.ngrok-free.dev' },
        { '@type': 'ListItem', position: 2, name: p.categoryLabel,     item: `https://procivic-addyson-kaleidoscopically.ngrok-free.dev/collections/${p.category}` },
        { '@type': 'ListItem', position: 3, name: p.name },
      ],
    },
  ]);
  dlPush('view_item', {
    page_type: 'pdp',
    ecommerce: {
      currency: 'USD',
      value:    p.price,
      items:    [toEcomItem(p, { item_variant: null, quantity: 1 })],
    },
  });

  if (push) {
    const tabPath  = `/products/${slug}${activeTab === 'reviews' ? '/reviews' : ''}`;
    const tabTitle = activeTab === 'reviews' ? `${p.name} — Reviews — PULSE` : `${p.name} — PULSE`;
    history.pushState({ page: 'product', productId, activeTab }, tabTitle, tabPath);
    document.title = tabTitle;
  }
}

function closeProductPage(pushUrl = true) {
  const productPage = document.getElementById('product-page');
  if (!productPage || productPage.style.display === 'none' || productPage.style.display === '') return;
  productPage.style.display = 'none';
  productPage.innerHTML = '';
  mainSections().forEach(s => { if (s) s.style.display = ''; });
  if (pushUrl && location.pathname.startsWith('/products/')) {
    history.pushState({ page: 'collection', filter: currentFilter }, _prevCollectionTitle, _prevCollectionPath);
    document.title = _prevCollectionTitle;
    convivaPageView(_prevCollectionTitle);
    updatePageMeta({ title: _prevCollectionTitle, url: _prevCollectionPath, type: 'website' });
    dlPush('page_view', {
      page_type:     currentFilter === 'all' ? 'home' : 'plp',
      page_title:    _prevCollectionTitle,
      page_url:      window.location.href,
      page_location: window.location.href,
      page_referrer: document.referrer || '',
      page_category: currentFilter,
      cart_count:    getCartCount(),
      cart_value:    parseFloat(getCartTotal().toFixed(2)),
    });
  }
}

// ========== SEARCH LANDING PAGE ==========
function enterSearchLanding(q) {
  searchLanded = true;
  searchBar.classList.remove('open');

  const banner = document.getElementById('search-landing-bar');
  document.getElementById('search-landing-term').textContent = q;
  banner.style.display = 'block';

  // Keep hero visible but scroll to results
  document.querySelector('.filters-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

  const title = `Search: "${q}" — PULSE`;
  history.pushState({ page: 'search', q, landed: true }, title, `/search?q=${encodeURIComponent(q)}`);
  document.title = title;
  convivaPageView(title);
  updatePageMeta({ title, url: `/search?q=${encodeURIComponent(q)}`, type: 'website',
    description: `Search results for "${q}" at PULSE Fashion.` });
  dlPush('page_view', {
    page_type: 'search_landing', page_title: title,
    page_url: window.location.href, page_location: window.location.href,
    page_referrer: document.referrer || '', search_term: q,
    results_count: getFiltered().length,
  });
}

function exitSearchLanding() {
  searchLanded = false;
  document.getElementById('search-landing-bar').style.display = 'none';
  searchInput.value = '';
  currentSearch = '';
  renderProducts();
  history.pushState({ page: 'collection', filter: currentFilter }, _prevCollectionTitle, _prevCollectionPath);
  document.title = _prevCollectionTitle;
  convivaPageView(_prevCollectionTitle);
  updatePageMeta({ title: _prevCollectionTitle, url: _prevCollectionPath, type: 'website' });
  dlPush('page_view', {
    page_type: currentFilter === 'all' ? 'home' : 'plp',
    page_title: _prevCollectionTitle,
    page_url: window.location.href, page_location: window.location.href,
    page_referrer: document.referrer || '',
  });
}

// ========== TOAST ==========
let toastTimer;
function showToast(msg) {
  toastMsg.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3200);
}

// ========== EVENTS ==========

// Sticky header shadow
window.addEventListener('scroll', () => {
  headerEl.classList.toggle('scrolled', window.scrollY > 8);
});

// Nav links + hero CTA buttons
document.querySelectorAll('[data-filter]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    applyFilter(el.dataset.filter);
  });
});

// Filter tabs
document.getElementById('filter-tabs').addEventListener('click', e => {
  const tab = e.target.closest('.filter-tab');
  if (!tab) return;
  applyFilter(tab.dataset.filter);
});

// Sort
document.getElementById('sort-select').addEventListener('change', e => {
  currentSort = e.target.value;
  renderProducts();
});

// Search toggle
document.getElementById('search-toggle').addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) searchInput.focus();
});
document.getElementById('search-close').addEventListener('click', () => {
  if (searchLanded) { exitSearchLanding(); return; }
  searchBar.classList.remove('open');
  searchInput.value = '';
  currentSearch = '';
  renderProducts();
  history.pushState({ page: 'collection', filter: currentFilter }, _prevCollectionTitle, _prevCollectionPath);
  document.title = _prevCollectionTitle;
  convivaPageView(_prevCollectionTitle);
  updatePageMeta({ title: _prevCollectionTitle, url: _prevCollectionPath, type: 'website' });
  dlPush('page_view', {
    page_type: currentFilter === 'all' ? 'home' : 'plp',
    page_title: _prevCollectionTitle,
    page_url: window.location.href,
    page_location: window.location.href,
    page_referrer: document.referrer || '',
    page_category: currentFilter,
  });
});

// Enter key on search → go to search landing page
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && currentSearch.trim()) {
    enterSearchLanding(currentSearch.trim());
  }
});
searchInput.addEventListener('input', e => {
  currentSearch = e.target.value;
  renderProducts();
  if (currentSearch) {
    const title = `Search: "${currentSearch}" — PULSE`;
    // Conviva + dataLayer: debounced search event (fires 600 ms after user stops typing)
    clearTimeout(window._searchTrackTimer);
    window._searchTrackTimer = setTimeout(() => {
      convivaTrack('search', { query: currentSearch, results: getFiltered().length });
      dlPush('search', { search_term: currentSearch, results_count: getFiltered().length });
    }, 600);
    history.replaceState({ page: 'search', q: currentSearch }, title, `/search?q=${encodeURIComponent(currentSearch)}`);
    document.title = title;
    convivaPageView(title);
    updatePageMeta({ title, url: `/search?q=${encodeURIComponent(currentSearch)}`, type: 'website',
      description: `Search results for "${currentSearch}" at PULSE Fashion.` });
    dlPush('page_view', {
      page_type: 'search',
      page_title: title,
      page_url: window.location.href,
      page_location: window.location.href,
      page_referrer: document.referrer || '',
      search_term: currentSearch,
    });
  } else {
    history.replaceState({ page: 'collection', filter: currentFilter }, _prevCollectionTitle, _prevCollectionPath);
    document.title = _prevCollectionTitle;
    convivaPageView(_prevCollectionTitle);
    updatePageMeta({ title: _prevCollectionTitle, url: _prevCollectionPath, type: 'website' });
  }
});

// Search landing clear button
document.getElementById('search-landing-clear').addEventListener('click', exitSearchLanding);

// Cart
document.getElementById('cart-toggle').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.getElementById('continue-shopping').addEventListener('click', closeCart);
document.getElementById('continue-shopping-2').addEventListener('click', closeCart);

// Modal close (unused for products now, kept as no-op safety)
document.getElementById('modal-close').addEventListener('click', () => closeProductPage());
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeProductPage(); });

// Mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProductPage(); closeCart();
    if (searchLanded) exitSearchLanding();
    else searchBar.classList.remove('open');
  }
});

// Checkout → open checkout modal
document.querySelector('.checkout-btn').addEventListener('click', openCheckout);

// ========== CHECKOUT ==========

const DUMMY_USERS = {
  'test@pulse.com':    { name: 'Jane Doe',     address: '123 Main Street',  city: 'New York',    state: 'NY', zip: '10001' },
  'shopper@pulse.com': { name: 'John Smith',   address: '456 Oak Avenue',   city: 'Los Angeles', state: 'CA', zip: '90001' },
  'demo@pulse.com':    { name: 'Alex Johnson', address: '789 Elm Street',   city: 'Chicago',     state: 'IL', zip: '60601' },
};
const DEMO_CARD = '123456789012';

let checkoutEmail = '';
const checkoutOverlay = document.getElementById('checkout-overlay');

function openCheckout(push = true) {
  if (cart.length === 0) { showToast('Your bag is empty — add items first!'); return; }
  closeCart();
  populateSummary();
  resetCheckout();
  checkoutOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (push) {
    history.pushState({ page: 'checkout' }, 'Checkout — PULSE', '/checkout');
    document.title = 'Checkout — PULSE';
  }
  // Conviva: checkout started
  convivaPageView('Checkout — PULSE');
  updatePageMeta({ title: 'Checkout — PULSE', url: '/checkout', type: 'website',
    description: 'Secure checkout at PULSE Fashion. Free shipping on orders over $75.' });
  convivaTrack('checkout_started', {
    item_count: getCartCount(),
    total:      getCartTotal(),
    items: cart.map(i => {
      const _p = PRODUCTS.find(x => x.id === i.productId);
      return { product_id: i.productId, product_name: _p ? _p.name : '', size: i.size, qty: i.qty };
    }),
  });
  dlPush('begin_checkout', {
    page_type: 'checkout',
    ecommerce: {
      currency:   'USD',
      value:      getCartTotal(),
      item_count: getCartCount(),
      items: cart.map(i => {
        const _p = PRODUCTS.find(x => x.id === i.productId);
        return _p ? toEcomItem(_p, { item_variant: i.size, quantity: i.qty }) : null;
      }).filter(Boolean),
    },
  });
}

function closeCheckout() {
  checkoutOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (location.pathname === '/checkout') {
    history.pushState({ page: 'collection', filter: currentFilter }, _prevCollectionTitle, _prevCollectionPath);
    document.title = _prevCollectionTitle;
  }
}

function resetCheckout() {
  goToStep(1);
  document.getElementById('checkout-email').value = '';
  document.querySelectorAll('.quick-account-btn').forEach(b => b.classList.remove('selected'));
}

function goToStep(step) {
  const panelIds = ['panel-login', 'panel-shipping', 'panel-payment', 'panel-confirmation'];
  document.querySelectorAll('.checkout-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(panelIds[step - 1]).classList.add('active');
  document.querySelectorAll('.progress-step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 <= step);
    s.classList.toggle('done',   i + 1 < step);
  });
  document.querySelectorAll('.progress-line').forEach((l, i) => {
    l.style.background = i + 1 < step ? '#22863a' : '';
  });
}

function populateSummary() {
  const container = document.getElementById('summary-items');
  container.innerHTML = '';
  cart.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.productId);
    if (!p) return;
    const el = document.createElement('div');
    el.className = 'summary-item';
    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="summary-item-info">
        <span>${p.name}</span>
        <small>Size: ${item.size} &nbsp;·&nbsp; Qty: ${item.qty}</small>
      </div>
      <span>${fmt(p.price * item.qty)}</span>
    `;
    container.appendChild(el);
  });
  const total = getCartTotal();
  document.getElementById('summary-subtotal').textContent = fmt(total);
  document.getElementById('summary-total').textContent    = fmt(total);
  document.getElementById('order-total-btn').textContent  = fmt(total);
}

function shakeField(id, msg) {
  const el = document.getElementById(id);
  el.classList.add('shake');
  el.style.borderColor = 'var(--danger)';
  showToast(msg);
  setTimeout(() => { el.classList.remove('shake'); el.style.borderColor = ''; }, 400);
}

// Quick account selection
document.querySelectorAll('.quick-account-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('checkout-email').value = btn.dataset.email;
    document.querySelectorAll('.quick-account-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Step 1 → 2
document.getElementById('btn-to-shipping').addEventListener('click', () => {
  const email = document.getElementById('checkout-email').value.trim();
  if (!email || !email.includes('@') || !email.includes('.')) {
    shakeField('checkout-email', 'Please enter a valid email address.');
    return;
  }
  checkoutEmail = email;
  // Conviva: identify user + step 1 complete
  convivaSetUser(email);
  convivaTrack('checkout_step_completed', { step: 1, step_name: 'Account', email });
  // Standard: push user_id to dataLayer — Myntra/Flipkart do this after sign-in
  window.dataLayer.push({ user_id: email, user_logged_in: true });
  dlPush('login', { method: 'email', user_id: email });
  const user = DUMMY_USERS[email];
  if (user) {
    document.getElementById('ship-name').value    = user.name;
    document.getElementById('ship-address').value = user.address;
    document.getElementById('ship-city').value    = user.city;
    document.getElementById('ship-state').value   = user.state;
    document.getElementById('ship-zip').value     = user.zip;
    document.getElementById('card-name').value    = user.name;
  }
  goToStep(2);
});

// Step 2 → 3
document.getElementById('btn-to-payment').addEventListener('click', () => {
  const name    = document.getElementById('ship-name').value.trim();
  const address = document.getElementById('ship-address').value.trim();
  const city    = document.getElementById('ship-city').value.trim();
  if (!name)    { shakeField('ship-name',    'Please enter your name.'); return; }
  if (!address) { shakeField('ship-address', 'Please enter your address.'); return; }
  if (!city)    { shakeField('ship-city',    'Please enter your city.'); return; }
  // Conviva: step 2 complete
  convivaTrack('checkout_step_completed', { step: 2, step_name: 'Shipping' });
  dlPush('add_shipping_info', {
    ecommerce: {
      currency:        'USD',
      value:           getCartTotal(),
      shipping_tier:   'Free Standard',
      items: cart.map(i => {
        const _p = PRODUCTS.find(x => x.id === i.productId);
        return _p ? toEcomItem(_p, { item_variant: i.size, quantity: i.qty }) : null;
      }).filter(Boolean),
    },
  });
  goToStep(3);
});

// Step 3 → Place Order
document.getElementById('btn-place-order').addEventListener('click', () => {
  const rawCard = document.getElementById('card-number').value.replace(/\s/g, '');
  const expiry  = document.getElementById('card-expiry').value.trim();
  const cvv     = document.getElementById('card-cvv').value.trim();
  if (rawCard.length < 12) {
    shakeField('card-number', `Use demo card: ${DEMO_CARD}`);
    return;
  }
  if (expiry.replace(/[\s/]/g, '').length < 4) {
    shakeField('card-expiry', 'Enter expiry date (MM/YY).');
    return;
  }
  if (cvv.length < 3) {
    shakeField('card-cvv', 'Enter a valid CVV (3–4 digits).');
    return;
  }
  placeOrder();
});

function placeOrder() {
  const orderNum = 'PULSE-' + Math.random().toString(36).toUpperCase().slice(2, 8);
  // GA4 add_payment_info (card entered, order button clicked)
  dlPush('add_payment_info', {
    ecommerce: {
      currency:       'USD',
      value:          getCartTotal(),
      payment_type:   'Credit Card',
      items: cart.map(i => {
        const _p = PRODUCTS.find(x => x.id === i.productId);
        return _p ? toEcomItem(_p, { item_variant: i.size, quantity: i.qty }) : null;
      }).filter(Boolean),
    },
  });
  // Conviva: order placed — must capture cart data BEFORE cart is cleared below
  convivaTrack('order_placed', {
    order_id:   orderNum,
    email:      checkoutEmail,
    total:      getCartTotal(),
    item_count: getCartCount(),
    items: cart.map(i => {
      const _p = PRODUCTS.find(x => x.id === i.productId);
      return { product_id: i.productId, product_name: _p ? _p.name : '', size: i.size, qty: i.qty, price: _p ? _p.price : 0 };
    }),
  });
  // GA4 purchase event — standard e-commerce conversion event
  dlPush('purchase', {
    page_type: 'confirmation',
    ecommerce: {
      transaction_id:  orderNum,
      currency:        'USD',
      value:           getCartTotal(),
      tax:             parseFloat((getCartTotal() * 0.08).toFixed(2)),
      shipping:        0,
      coupon:          null,
      items: cart.map(i => {
        const _p = PRODUCTS.find(x => x.id === i.productId);
        return _p ? toEcomItem(_p, { item_variant: i.size, quantity: i.qty }) : null;
      }).filter(Boolean),
    },
  });
  const _confTitle = `Order Confirmed — ${orderNum} — PULSE`;
  convivaPageView(_confTitle);
  updatePageMeta({ title: _confTitle, url: '/order-confirmed', type: 'website',
    description: `Your PULSE order ${orderNum} is confirmed. Thank you for shopping with us.` });
  dlPush('page_view', {
    page_type: 'confirmation', page_title: _confTitle,
    page_url: window.location.href, page_location: window.location.href,
    transaction_id: orderNum,
  });
  document.getElementById('order-number').textContent = orderNum;
  document.getElementById('conf-email').textContent   = checkoutEmail;
  const confItems = document.getElementById('conf-items');
  confItems.innerHTML =
    cart.map(item => {
      const p = PRODUCTS.find(x => x.id === item.productId);
      return p
        ? `<div class="conf-item"><span>${p.name} ×${item.qty}</span><span>${fmt(p.price * item.qty)}</span></div>`
        : '';
    }).join('') +
    `<div class="conf-item conf-total"><span>Total Paid</span><span>${fmt(getCartTotal())}</span></div>`;
  cart = [];
  saveCart();
  updateCartUI();
  goToStep(4);
}

// Back buttons
document.getElementById('btn-back-to-login').addEventListener('click',    () => goToStep(1));
document.getElementById('btn-back-to-shipping').addEventListener('click', () => goToStep(2));
document.getElementById('btn-done-shopping').addEventListener('click', closeCheckout);

// Close
document.getElementById('checkout-modal-close').addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', e => { if (e.target === checkoutOverlay) closeCheckout(); });

// Card number formatting (groups of 4)
document.getElementById('card-number').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 16);
  e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
  e.target.style.borderColor = '';
});
// Expiry formatting (MM / YY)
document.getElementById('card-expiry').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').slice(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + ' / ' + v.slice(2);
  e.target.value = v;
  e.target.style.borderColor = '';
});
// CVV — digits only
document.getElementById('card-cvv').addEventListener('input', e => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
  e.target.style.borderColor = '';
});

// ========== ROUTING ==========
function handleRoute() {
  const path   = location.pathname;
  const params = new URLSearchParams(location.search);

  // Product page / review page
  const productMatch = path.match(/^\/products\/([^/]+)(\/reviews)?$/);
  if (productMatch) {
    const slug = productMatch[1];
    const isReviews = !!productMatch[2];
    const pid  = PRODUCT_BY_SLUG[slug];
    if (pid) { openProductPage(pid, false, isReviews ? 'reviews' : 'overview'); return; }
  }

  // Close product page if open (URL already changed — no URL push needed)
  closeProductPage(false);
  // Close other overlays
  if (modalOverlay.classList.contains('open'))     { modalOverlay.classList.remove('open'); document.body.style.overflow = ''; }
  if (checkoutOverlay.classList.contains('open'))  { checkoutOverlay.classList.remove('open'); document.body.style.overflow = ''; }

  // Checkout
  if (path === '/checkout') { openCheckout(false); return; }

  // Search
  const q = params.get('q');
  if (q) {
    currentSearch     = q;
    searchInput.value = q;
    renderProducts();
    // Show as search landing page (not just the inline search bar)
    searchLanded = true;
    document.getElementById('search-landing-bar').style.display = 'block';
    document.getElementById('search-landing-term').textContent  = q;
    const _sTitle = `Search: "${q}" — PULSE`;
    document.title = _sTitle;
    convivaPageView(_sTitle);
    return;
  }

  // Collection
  const collMatch = path.match(/^\/collections\/(.+)$/);
  if (collMatch) { applyFilter(collMatch[1], false); return; }

  // Home / fallback
  applyFilter('all', false);
}

window.addEventListener('popstate', handleRoute);

// ========== INIT ==========
updateCartUI();
handleRoute();

// ── Scroll depth tracking ─────────────────────────────────────
// Real e-commerce sites track 25 / 50 / 75 / 100 % milestones per page.
(function () {
  const milestones = [25, 50, 75, 100];
  const reached    = new Set();
  let   lastPage   = window.location.href;

  window.addEventListener('scroll', function () {
    // Reset milestones when the user navigates to a new page
    if (window.location.href !== lastPage) { reached.clear(); lastPage = window.location.href; }

    const scrollPct = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    milestones.forEach(m => {
      if (scrollPct >= m && !reached.has(m)) {
        reached.add(m);
        dlPush('scroll_depth', {
          page_url:       window.location.href,
          page_title:     document.title,
          scroll_percent: m,
        });
        convivaTrack('scroll_depth', { percent: m, page: document.title });
      }
    });
  }, { passive: true });
}());

// ── Error tracking — 4xx / 5xx / JS errors / unhandled rejections ─
// Standard on all major e-commerce sites. Lets analytics tools (Conviva,
// GA4, Datadog) surface errors without a separate error monitoring SDK.
(function () {
  // 1. JavaScript runtime errors
  window.addEventListener('error', function (e) {
    const payload = {
      error_type:    'js_error',
      error_message: e.message,
      error_source:  e.filename ? (e.filename + ':' + e.lineno + ':' + e.colno) : 'unknown',
      page_url:      window.location.href,
      page_title:    document.title,
    };
    dlPush('error', payload);
    convivaTrack('error', payload);
  });

  // 2. Unhandled promise rejections
  window.addEventListener('unhandledrejection', function (e) {
    const msg = e.reason instanceof Error ? e.reason.message : String(e.reason);
    const payload = {
      error_type:    'unhandled_promise_rejection',
      error_message: msg,
      page_url:      window.location.href,
      page_title:    document.title,
    };
    dlPush('error', payload);
    convivaTrack('error', payload);
  });

  // 3. Network / resource errors (images, scripts, stylesheets that fail to load)
  window.addEventListener('error', function (e) {
    const el = e.target;
    if (el && el.tagName && ['IMG', 'SCRIPT', 'LINK'].includes(el.tagName)) {
      const payload = {
        error_type:    'resource_error',
        resource_tag:  el.tagName,
        resource_src:  el.src || el.href || 'unknown',
        page_url:      window.location.href,
        page_title:    document.title,
      };
      dlPush('error', payload);
      convivaTrack('error', payload);
    }
  }, true /* capture phase — required for resource errors */);

  // 4. Fetch / XHR network errors (4xx, 5xx responses)
  // Patch window.fetch to intercept HTTP error status codes.
  const _origFetch = window.fetch;
  window.fetch = function (...args) {
    return _origFetch.apply(this, args).then(function (response) {
      if (!response.ok) {
        const payload = {
          error_type:    response.status >= 500 ? 'server_error_5xx' : 'client_error_4xx',
          http_status:   response.status,
          request_url:   typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || 'unknown',
          page_url:      window.location.href,
          page_title:    document.title,
        };
        dlPush('error', payload);
        convivaTrack('error', payload);
      }
      return response;
    }).catch(function (err) {
      const payload = {
        error_type:    'network_error',
        error_message: err.message,
        request_url:   typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || 'unknown',
        page_url:      window.location.href,
        page_title:    document.title,
      };
      dlPush('error', payload);
      convivaTrack('error', payload);
      throw err;
    });
  };
}());

// ── Web Vitals (LCP / FCP / CLS / TTFB / INP) ───────────────
// Myntra, Flipkart, Amazon all report Core Web Vitals to analytics.
// Uses PerformanceObserver — zero dependencies, no external library needed.
(function () {
  function reportVital(name, value, rating) {
    const payload = {
      metric_name:   name,
      metric_value:  name === 'CLS' ? parseFloat(value.toFixed(4)) : Math.round(value),
      metric_rating: rating,   // 'good' | 'needs-improvement' | 'poor'
      page_url:      window.location.href,
      page_title:    document.title,
    };
    dlPush('web_vitals', payload);
    convivaTrack('web_vitals', payload);
  }

  // FCP — First Contentful Paint
  try {
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) {
        if (e.name === 'first-contentful-paint') {
          var v = e.startTime;
          reportVital('FCP', v, v < 1800 ? 'good' : v < 3000 ? 'needs-improvement' : 'poor');
        }
      });
    }).observe({ type: 'paint', buffered: true });
  } catch (e) {}

  // LCP — Largest Contentful Paint (updates until user interaction)
  try {
    var _lcpObs = new PerformanceObserver(function (list) {
      var entries = list.getEntries();
      var last = entries[entries.length - 1];
      if (last) {
        var v = last.startTime;
        reportVital('LCP', v, v < 2500 ? 'good' : v < 4000 ? 'needs-improvement' : 'poor');
      }
    });
    _lcpObs.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {}

  // CLS — Cumulative Layout Shift (reported on page hide)
  try {
    var _clsValue = 0;
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) { if (!e.hadRecentInput) _clsValue += e.value; });
    }).observe({ type: 'layout-shift', buffered: true });
    window.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        reportVital('CLS', _clsValue, _clsValue < 0.1 ? 'good' : _clsValue < 0.25 ? 'needs-improvement' : 'poor');
      }
    }, { once: true });
  } catch (e) {}

  // TTFB — Time to First Byte (navigation timing)
  try {
    new PerformanceObserver(function (list) {
      list.getEntries().forEach(function (e) {
        var v = e.responseStart;
        reportVital('TTFB', v, v < 800 ? 'good' : v < 1800 ? 'needs-improvement' : 'poor');
      });
    }).observe({ type: 'navigation', buffered: true });
  } catch (e) {}
}());

// ── Page Load Timing & Resource Timing ───────────────────────
// Fires once after the window load event — all resources are done by then.
// Captures the full navigation timing breakdown + per-resource network timings.
window.addEventListener('load', function () {
  // Small defer so the browser has flushed all timing entries.
  setTimeout(function () {

    // ── 1. Full page load breakdown (Navigation Timing API) ──
    try {
      var nav = performance.getEntriesByType('navigation')[0];
      if (nav) {
        var payload = {
          // Key durations (all in ms, rounded)
          dns_ms:           Math.round(nav.domainLookupEnd  - nav.domainLookupStart),
          tcp_ms:           Math.round(nav.connectEnd        - nav.connectStart),
          ssl_ms:           Math.round(nav.connectEnd        - nav.secureConnectionStart > 0
                              ? nav.connectEnd - nav.secureConnectionStart : 0),
          ttfb_ms:          Math.round(nav.responseStart     - nav.requestStart),
          response_ms:      Math.round(nav.responseEnd       - nav.responseStart),
          dom_interactive_ms: Math.round(nav.domInteractive  - nav.startTime),
          dom_complete_ms:  Math.round(nav.domComplete       - nav.startTime),
          load_event_ms:    Math.round(nav.loadEventEnd      - nav.startTime),
          // Transfer info
          transfer_size_kb: nav.transferSize ? parseFloat((nav.transferSize / 1024).toFixed(1)) : null,
          encoded_body_kb:  nav.encodedBodySize ? parseFloat((nav.encodedBodySize / 1024).toFixed(1)) : null,
          // Navigation meta
          nav_type:         nav.type,        // 'navigate' | 'reload' | 'back_forward'
          protocol:         nav.nextHopProtocol || null,  // 'h2', 'http/1.1', etc.
          page_url:         window.location.href,
          page_title:       document.title,
        };
        // Network Information API (Chrome/Android only)
        var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (conn) {
          payload.network_type        = conn.effectiveType || null;  // '4g', '3g', '2g', 'slow-2g'
          payload.network_downlink_mbps = conn.downlink    || null;
          payload.network_rtt_ms      = conn.rtt           || null;
          payload.network_save_data   = conn.saveData      || false;
        }
        dlPush('page_load_timing', payload);
        convivaTrack('page_load_timing', payload);
      }
    } catch (e) {}

    // ── 2. Per-resource network timings ──────────────────────
    // Captures every JS, CSS, image, and font loaded on the page.
    try {
      var resources = performance.getEntriesByType('resource');
      var summary = { js: [], css: [], img: [], font: [], other: [] };

      resources.forEach(function (r) {
        var ext = (r.name.split('?')[0].split('.').pop() || '').toLowerCase();
        var bucket = ext === 'js'                          ? 'js'
                   : ext === 'css'                         ? 'css'
                   : /^(png|jpg|jpeg|gif|webp|svg|ico)$/.test(ext) ? 'img'
                   : /^(woff2?|ttf|otf|eot)$/.test(ext)  ? 'font'
                   : 'other';

        var entry = {
          url:             r.name.replace(window.location.origin, ''),
          duration_ms:     Math.round(r.duration),
          transfer_kb:     r.transferSize ? parseFloat((r.transferSize / 1024).toFixed(1)) : null,
          protocol:        r.nextHopProtocol || null,
          cached:          r.transferSize === 0 && r.decodedBodySize > 0,
        };
        summary[bucket].push(entry);
      });

      // Roll up counts + slowest resource per type
      var rollup = {};
      ['js', 'css', 'img', 'font', 'other'].forEach(function (type) {
        var list = summary[type];
        if (!list.length) return;
        var slowest = list.reduce(function (a, b) { return a.duration_ms > b.duration_ms ? a : b; });
        rollup[type + '_count']          = list.length;
        rollup[type + '_total_kb']       = parseFloat(list.reduce(function (s, x) { return s + (x.transfer_kb || 0); }, 0).toFixed(1));
        rollup[type + '_slowest_ms']     = slowest.duration_ms;
        rollup[type + '_slowest_url']    = slowest.url;
        rollup[type + '_cached_count']   = list.filter(function (x) { return x.cached; }).length;
      });

      rollup.total_resources   = resources.length;
      rollup.total_transfer_kb = parseFloat(Object.keys(rollup)
        .filter(function (k) { return k.endsWith('_total_kb'); })
        .reduce(function (s, k) { return s + rollup[k]; }, 0).toFixed(1));
      rollup.page_url          = window.location.href;
      rollup.page_title        = document.title;

      dlPush('resource_timing', rollup);
      convivaTrack('resource_timing', rollup);
    } catch (e) {}

  }, 0);
});

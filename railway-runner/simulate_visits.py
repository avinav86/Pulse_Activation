"""
Simulates 30 unique test visits to the PULSE fashion store.
Each session uses a different user agent and follows a realistic browsing path.
Conviva SDK fires in the real browser context, so all events reach the dashboard.
"""

import asyncio
import random
from playwright.async_api import async_playwright

TARGET = "https://pulse-site-production.up.railway.app"

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14.3; rv:123.0) Gecko/20100101 Firefox/123.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.119 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:123.0) Gecko/20100101 Firefox/123.0",
    "Mozilla/5.0 (iPad; CPU OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/122.0.6261.89 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Linux; Android 12; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.105 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.8 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.178 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/122.0.6261.89 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/121.0.0.0",
]

VIEWPORTS = [
    {"width": 1920, "height": 1080},
    {"width": 1440, "height": 900},
    {"width": 1366, "height": 768},
    {"width": 1280, "height": 800},
    {"width": 390,  "height": 844},
    {"width": 414,  "height": 896},
    {"width": 360,  "height": 780},
    {"width": 768,  "height": 1024},
    {"width": 820,  "height": 1180},
]

CATEGORIES = ["all", "mens", "womens", "kids"]

# Building blocks for on-the-fly identity generation.
# Combinations: 80 first × 80 last × 8 domains × 1000 suffixes = 51.2M unique emails.
# Each checkout session generates a fresh identity — no fixed pool, no repeats.
_FIRST_NAMES = [
    "Emma","Liam","Olivia","Noah","Ava","Elijah","Sophia","James","Isabella","Benjamin",
    "Mia","Lucas","Charlotte","Henry","Amelia","Alexander","Harper","Mason","Evelyn","Ethan",
    "Abigail","Daniel","Emily","Jackson","Elizabeth","Sebastian","Sofia","Aiden","Scarlett","Gabriel",
    "Victoria","Carter","Riley","Penelope","Wyatt","Nora","Jayden","Lily","Dylan","Zoey",
    "Jack","Grace","Luke","Chloe","Owen","Layla","Julian","Aria","Grayson","Stella",
    "Logan","Hannah","Nathan","Addison","Ryan","Leah","Brandon","Samantha","Tyler","Natalie",
    "Caleb","Zoe","Justin","Lillian","Aaron","Savannah","Patrick","Audrey","Marcus","Claire",
    "Derek","Allison","Trevor","Kayla","Colin","Morgan","Seth","Hailey","Spencer","Brooke",
]
_LAST_NAMES = [
    "Johnson","Smith","Brown","Davis","Wilson","Martinez","Anderson","Taylor","Thomas","Lee",
    "Harris","Clark","Lewis","Robinson","Walker","Hall","Young","Allen","King","Wright",
    "Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts",
    "Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris",
    "Rogers","Reed","Cook","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward",
    "Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price",
    "Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long",
    "Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander",
]
_EMAIL_DOMAINS = [
    "gmail.com","yahoo.com","outlook.com","icloud.com",
    "hotmail.com","me.com","live.com","protonmail.com",
]
_STREETS = [
    "Maple Ave","Oak Street","Pine Road","Birch Lane","Cedar Blvd","Elm Court","Walnut Dr",
    "Spruce Way","Aspen Circle","Poplar Ave","Willow St","Sycamore Rd","Magnolia Lane",
    "Redwood Blvd","Juniper Dr","Hawthorn Ct","Cypress Ave","Dogwood Way","Hickory Blvd",
    "Chestnut St","Rosewood Dr","Peach Tree Ln","Blossom Ave","Fern Circle","Clover Rd",
    "Ivy Lane","Lotus Blvd","Azalea Dr","Dahlia Way","Orchid Ave","Tulip Court","Lavender Ln",
    "Violet Ave","Honeysuckle Dr","Sunflower Rd","Marigold Way","Periwinkle Ct","Pansy Lane",
]
_CITIES = [
    ("Austin","TX","73301"),("Denver","CO","80201"),("Seattle","WA","98101"),
    ("Portland","OR","97201"),("Nashville","TN","37201"),("Miami","FL","33101"),
    ("Atlanta","GA","30301"),("Chicago","IL","60601"),("Dallas","TX","75201"),
    ("Phoenix","AZ","85001"),("Los Angeles","CA","90001"),("San Diego","CA","92101"),
    ("Houston","TX","77001"),("San Francisco","CA","94101"),("Boston","MA","02101"),
    ("New York","NY","10001"),("Philadelphia","PA","19101"),("San Antonio","TX","78201"),
    ("Minneapolis","MN","55401"),("Detroit","MI","48201"),("Las Vegas","NV","89101"),
    ("Baltimore","MD","21201"),("Charlotte","NC","28201"),("Memphis","TN","38101"),
    ("Louisville","KY","40201"),("Washington","DC","20001"),("Raleigh","NC","27601"),
    ("Tampa","FL","33601"),("New Orleans","LA","70112"),("Oakland","CA","94601"),
    ("Cleveland","OH","44101"),("Wichita","KS","67201"),("Arlington","TX","76001"),
    ("Aurora","CO","80010"),("Omaha","NE","68101"),("Virginia Beach","VA","23451"),
]


def generate_shopper():
    """Generate a unique shopper identity for each checkout session.
    With millions of possible combinations, repeat users within a day are
    negligible — Conviva sees a fresh identified user on every purchase.
    """
    first  = random.choice(_FIRST_NAMES)
    last   = random.choice(_LAST_NAMES)
    suffix = random.randint(1, 999)
    sep    = random.choice([".", "_", ""])
    domain = random.choice(_EMAIL_DOMAINS)
    # e.g. emma.johnson847@gmail.com  or  olivia_brown12@yahoo.com
    email  = f"{first.lower()}{sep}{last.lower()}{suffix}@{domain}"
    city, state, base_zip = random.choice(_CITIES)
    zip_code = str(int(base_zip) + random.randint(0, 50)).zfill(5)
    address  = f"{random.randint(1, 999)} {random.choice(_STREETS)}"
    return {
        "name":    f"{first} {last}",
        "email":   email,
        "address": address,
        "city":    city,
        "state":   state,
        "zip":     zip_code,
    }

# Realistic funnel mix — mirrors real e-commerce drop-off at each stage
# browse/view → add to cart → open checkout → email → shipping → purchase
SCENARIOS = [
    "browse_only",           # lands, scrolls, leaves
    "bounce",                # lands and leaves almost immediately
    "product_view",          # views a product but doesn't add
    "product_view",
    "product_view",
    "add_to_cart",           # adds to cart but never opens checkout
    "cart_abandon",          # opens checkout modal then closes it
    "cart_abandon",          # opens checkout modal then closes it
    "email_abandon",         # types email then exits
    "checkout_start",        # opens checkout, doesn't fill anything
    "full_checkout",         # completes email + shipping, abandons at payment
    "full_checkout",
    "complete_purchase",     # goes all the way — buys
    "complete_purchase",
    "complete_purchase",
    "complete_purchase",
]

# Browser args required for running inside a container (no sandbox)
BROWSER_ARGS = [
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--disable-gpu",
    "--disable-setuid-sandbox",
    "--single-process",
]


async def wait(page, ms_min=600, ms_max=1800):
    await page.wait_for_timeout(random.randint(ms_min, ms_max))


async def dismiss_ngrok_warning(page):
    pass  # No longer needed — site is on Railway


async def scenario_bounce(page):
    """User lands on the page, glances briefly, and leaves — no interaction."""
    await wait(page, 800, 2000)
    await page.evaluate("window.scrollBy(0, 150)")
    await wait(page, 500, 1200)


async def scenario_browse_only(page):
    cat = random.choice(CATEGORIES)
    try:
        btn = page.locator(f"button[data-filter='{cat}']")
        if await btn.count() > 0:
            await btn.first.click()
            await wait(page, 1000, 2500)
    except Exception:
        pass
    await page.evaluate("window.scrollBy(0, 400)")
    await wait(page, 800, 1500)
    await page.evaluate("window.scrollBy(0, 400)")
    await wait(page, 500, 1000)


async def scenario_product_view(page):
    await scenario_browse_only(page)
    try:
        cards = page.locator(".product-card")
        count = await cards.count()
        if count > 0:
            await cards.nth(random.randint(0, min(count - 1, 7))).click()
            await wait(page, 1500, 3000)
            await page.evaluate("window.scrollBy(0, 300)")
            await wait(page, 800, 1500)
    except Exception:
        pass


async def scenario_add_to_cart(page):
    """Opens product page, selects a size, clicks Add to Bag.
    #pp-add-btn calls addToCart() then setTimeout(openCart, 300) —
    the cart sidebar opens automatically; no separate cart-icon click needed.
    """
    await scenario_product_view(page)
    try:
        sizes = page.locator(".size-btn")
        count = await sizes.count()
        if count > 0:
            await sizes.nth(random.randint(0, min(count - 1, 4))).click()
            await wait(page, 400, 800)
        atc = page.locator("#pp-add-btn")   # correct ID — was #add-to-cart-btn
        if await atc.count() > 0:
            await atc.first.click()
            await wait(page, 1200, 2000)    # must be > 300 ms so cart has time to open
    except Exception:
        pass


async def scenario_checkout_start(page):
    """Cart is already open after add-to-cart.
    Go straight to .checkout-btn — clicking #cart-toggle would close the cart.
    The button has no ID; selector is the class .checkout-btn.
    """
    await scenario_add_to_cart(page)
    try:
        checkout = page.locator(".checkout-btn")
        if await checkout.count() > 0:
            await checkout.first.click()
            await wait(page, 1000, 2000)
    except Exception:
        pass


async def scenario_cart_abandon(page):
    """Adds item to cart, opens checkout modal, then thinks better of it and closes."""
    await scenario_add_to_cart(page)
    try:
        checkout = page.locator(".checkout-btn")
        if await checkout.count() > 0:
            await checkout.first.click()
            await wait(page, 1500, 3000)   # user stares at checkout modal
            close_btn = page.locator("#checkout-modal-close")
            if await close_btn.count() > 0:
                await close_btn.first.click()
                await wait(page, 800, 1500)
    except Exception:
        pass


async def scenario_email_abandon(page):
    """Opens checkout, starts typing email, then closes without continuing."""
    await scenario_checkout_start(page)
    try:
        email_field = page.locator("#checkout-email")
        if await email_field.count() > 0:
            shopper = generate_shopper()
            # Type only the email — no Continue click
            await email_field.first.fill(shopper["email"])
            await wait(page, 1500, 3000)   # user hesitates
            close_btn = page.locator("#checkout-modal-close")
            if await close_btn.count() > 0:
                await close_btn.first.click()
                await wait(page, 500, 1000)
    except Exception:
        pass


async def scenario_full_checkout(page, shopper=None):
    """Step 1 (email) + Step 2 (shipping) — stops before payment.
    Uses a real shopper identity; anonymous sessions never reach this function.
    """
    if shopper is None:
        shopper = generate_shopper()
    await scenario_checkout_start(page)
    try:
        email_field = page.locator("#checkout-email")
        if await email_field.count() > 0:
            await email_field.first.fill(shopper["email"])
            await wait(page, 400, 800)
        next_btn = page.locator("#btn-to-shipping")
        if await next_btn.count() > 0:
            await next_btn.first.click()
            await wait(page, 800, 1500)
        for selector, value in [
            ("#ship-name",    shopper["name"]),
            ("#ship-address", shopper["address"]),
            ("#ship-city",    shopper["city"]),
            ("#ship-zip",     shopper["zip"]),
        ]:
            field = page.locator(selector)
            if await field.count() > 0:
                await field.first.fill(value)
                await wait(page, 200, 400)
        next_btn2 = page.locator("#btn-to-payment")
        if await next_btn2.count() > 0:
            await next_btn2.first.click()
            await wait(page, 800, 1500)
    except Exception:
        pass
    return shopper


async def scenario_complete_purchase(page):
    """Full funnel: browse → product → cart → checkout → payment → Place Order.
    Picks one shopper identity and uses it consistently through email,
    shipping name, and card-name fields.
    """
    shopper = generate_shopper()
    await scenario_full_checkout(page, shopper=shopper)
    try:
        for selector, value in [
            ("#card-number", "123456789012"),
            ("#card-expiry", "12/27"),
            ("#card-cvv",    "123"),
            ("#card-name",   shopper["name"]),
        ]:
            field = page.locator(selector)
            if await field.count() > 0:
                await field.first.fill(value)
                await wait(page, 200, 400)
        place_btn = page.locator("#btn-place-order")
        if await place_btn.count() > 0:
            await place_btn.first.click()
            # Wait for order confirmation screen + Conviva purchase beacon to send
            await wait(page, 2500, 4000)
    except Exception:
        pass


SCENARIO_FNS = {
    "bounce":             scenario_bounce,
    "browse_only":        scenario_browse_only,
    "product_view":       scenario_product_view,
    "add_to_cart":        scenario_add_to_cart,
    "cart_abandon":       scenario_cart_abandon,
    "email_abandon":      scenario_email_abandon,
    "checkout_start":     scenario_checkout_start,
    "full_checkout":      scenario_full_checkout,
    "complete_purchase":  scenario_complete_purchase,
}


SESSION_TIMEOUT = 120   # seconds — hard cap per session to prevent infinite hangs


async def _run_session_inner(playwright, session_num, ua, viewport, scenario_name):
    """Core session logic. Called inside asyncio.wait_for so it has a hard timeout."""
    browser = None
    context = None
    try:
        browser = await playwright.chromium.launch(headless=True, args=BROWSER_ARGS)
        context = await browser.new_context(
            user_agent=ua,
            viewport=viewport,
            locale=random.choice(["en-US", "en-GB", "en-CA", "en-AU"]),
            timezone_id=random.choice([
                "America/New_York", "America/Chicago", "America/Los_Angeles",
                "America/Denver", "Europe/London", "Europe/Paris", "Asia/Singapore",
            ]),
        )
        # Cap every element interaction (click, fill, locator) at 15s
        # so a single stuck await never blocks the whole session
        context.set_default_timeout(15000)
        page = await context.new_page()
        await page.goto(TARGET, wait_until="networkidle", timeout=45000)
        # Extra pause: lets window.load → page_load_timing / resource_timing
        # convivaTrack() calls complete and Conviva beacon dispatches
        # before the scenario starts interacting with the page.
        await wait(page, 1500, 2500)
        await SCENARIO_FNS[scenario_name](page)
        await wait(page, 1500, 2500)
        print(f"  [OK] Session {session_num:02d} | {scenario_name:<18} | {ua[50:90]}...", flush=True)
    except Exception as e:
        print(f"  [!!] Session {session_num:02d} | {scenario_name:<18} | {e}", flush=True)
    finally:
        try:
            if context:
                await context.close()
        except Exception:
            pass
        try:
            if browser:
                await browser.close()
        except Exception:
            pass


async def run_session(playwright, session_num, ua, viewport, scenario_name):
    """Wrapper that enforces a hard SESSION_TIMEOUT so a hung browser
    never blocks asyncio.gather indefinitely."""
    try:
        await asyncio.wait_for(
            _run_session_inner(playwright, session_num, ua, viewport, scenario_name),
            timeout=SESSION_TIMEOUT,
        )
    except asyncio.TimeoutError:
        print(f"  [TO] Session {session_num:02d} | {scenario_name:<18} | timed out after {SESSION_TIMEOUT}s", flush=True)


async def run_batch(batch_num=1):
    """Run one batch of 30 sessions, 2 concurrent at a time.
    A fresh async_playwright() context is created per sub-batch so memory
    from previous Chromium processes is fully released between pairs.
    return_exceptions=True means one session failure never kills its sibling.
    """
    print(f"\n[Batch {batch_num}] PULSE Fashion — 30 sessions starting", flush=True)
    print(f"Target: {TARGET}", flush=True)

    scenario_pool = (SCENARIOS * 2)[:30]
    random.shuffle(scenario_pool)

    sessions = [
        {
            "num":      i + 1,
            "ua":       USER_AGENTS[i % len(USER_AGENTS)],
            "viewport": random.choice(VIEWPORTS),
            "scenario": scenario_pool[i],
        }
        for i in range(30)
    ]

    for batch_start in range(0, 30, 2):
        sub = sessions[batch_start:batch_start + 2]
        sub_num = batch_start // 2 + 1
        print(f"  Sub-batch {sub_num}/15  "
              f"(sessions {sub[0]['num']}-{sub[-1]['num']})", flush=True)
        # Fresh playwright instance per sub-batch — fully releases Chromium
        # memory between pairs, preventing late-batch OOM crashes
        async with async_playwright() as playwright:
            await asyncio.gather(*[
                run_session(playwright, s["num"], s["ua"], s["viewport"], s["scenario"])
                for s in sub
            ], return_exceptions=True)
        await asyncio.sleep(random.uniform(2.0, 4.0))

    print(f"[Batch {batch_num}] Done — 30 sessions completed.", flush=True)


if __name__ == "__main__":
    asyncio.run(run_batch())

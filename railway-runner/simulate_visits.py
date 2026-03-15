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

# Demo accounts that trigger autofill in the checkout form
DEMO_EMAILS = [
    "test@pulse.com",
    "shopper@pulse.com",
    "demo@pulse.com",
]

# Increased conversion weight: 6 complete_purchase out of 18 = ~33% purchase rate
SCENARIOS = [
    "browse_only", "browse_only",
    "product_view", "product_view", "product_view",
    "add_to_cart", "add_to_cart",
    "checkout_start", "checkout_start",
    "full_checkout", "full_checkout",
    "complete_purchase", "complete_purchase", "complete_purchase",
    "complete_purchase", "complete_purchase", "complete_purchase",
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
    await scenario_product_view(page)
    try:
        sizes = page.locator(".size-btn")
        count = await sizes.count()
        if count > 0:
            await sizes.nth(random.randint(0, min(count - 1, 4))).click()
            await wait(page, 400, 800)
        atc = page.locator("#add-to-cart-btn")
        if await atc.count() > 0:
            await atc.first.click()
            await wait(page, 800, 1500)
    except Exception:
        pass


async def scenario_checkout_start(page):
    await scenario_add_to_cart(page)
    try:
        cart = page.locator("#cart-icon")
        if await cart.count() > 0:
            await cart.first.click()
            await wait(page, 800, 1500)
        checkout = page.locator("#checkout-btn")
        if await checkout.count() > 0:
            await checkout.first.click()
            await wait(page, 1000, 2000)
    except Exception:
        pass


async def scenario_full_checkout(page):
    """Step 1 (email) + Step 2 (shipping) — stops before payment."""
    await scenario_checkout_start(page)
    try:
        email_field = page.locator("#checkout-email")
        if await email_field.count() > 0:
            await email_field.first.fill(random.choice(DEMO_EMAILS))
            await wait(page, 400, 800)
        next_btn = page.locator("#btn-to-shipping")
        if await next_btn.count() > 0:
            await next_btn.first.click()
            await wait(page, 800, 1500)
        # Correct field IDs matching the actual HTML (#ship-* not #shipping-*)
        for selector, value in [
            ("#ship-name",    "Test User"),
            ("#ship-address", "123 Main St"),
            ("#ship-city",    "New York"),
            ("#ship-zip",     "10001"),
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


async def scenario_complete_purchase(page):
    """Full funnel: browse → product → cart → checkout → payment → Place Order."""
    await scenario_full_checkout(page)
    try:
        for selector, value in [
            ("#card-number", "123456789012"),
            ("#card-expiry", "12/27"),
            ("#card-cvv",    "123"),
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
    "browse_only":        scenario_browse_only,
    "product_view":       scenario_product_view,
    "add_to_cart":        scenario_add_to_cart,
    "checkout_start":     scenario_checkout_start,
    "full_checkout":      scenario_full_checkout,
    "complete_purchase":  scenario_complete_purchase,
}


async def run_session(playwright, session_num, ua, viewport, scenario_name):
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
    page = await context.new_page()
    try:
        await page.goto(TARGET, wait_until="networkidle", timeout=30000)
        await dismiss_ngrok_warning(page)
        # Extra pause: lets window.load → page_load_timing / resource_timing
        # convivaTrack() calls complete and Conviva's beacon dispatch before
        # the scenario starts interacting with the page.
        await wait(page, 1500, 2500)
        await SCENARIO_FNS[scenario_name](page)
        await wait(page, 1500, 2500)
        print(f"  [OK] Session {session_num:02d} | {scenario_name:<18} | {ua[50:90]}...", flush=True)
    except Exception as e:
        print(f"  [!!] Session {session_num:02d} error: {e}", flush=True)
    finally:
        await context.close()
        await browser.close()


async def run_batch(batch_num=1):
    """Run one batch of 30 sessions (5 × 6 concurrent)."""
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

    async with async_playwright() as playwright:
        for batch_start in range(0, 30, 3):
            batch = sessions[batch_start:batch_start + 3]
            print(f"  Sub-batch {batch_start // 3 + 1}/10  "
                  f"(sessions {batch[0]['num']}-{batch[-1]['num']})", flush=True)
            await asyncio.gather(*[
                run_session(playwright, s["num"], s["ua"], s["viewport"], s["scenario"])
                for s in batch
            ])
            await asyncio.sleep(random.uniform(2.0, 4.0))

    print(f"[Batch {batch_num}] Done — 30 sessions completed.", flush=True)


if __name__ == "__main__":
    asyncio.run(run_batch())

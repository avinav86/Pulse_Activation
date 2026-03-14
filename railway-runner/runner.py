"""
Continuous traffic runner for Railway deployment.
Runs 150 sessions (5 × 30) every 30 minutes, forever.
"""

import asyncio
import time
import sys
from datetime import datetime
from simulate_visits import run_batch

INTERVAL_SECONDS = 30 * 60   # 30 minutes
BATCHES_PER_RUN  = 5         # 5 × 30 sessions = 150 per interval


def log(msg):
    ts = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    print(f"[{ts}] {msg}", flush=True)


async def main():
    run_num = 0
    log("=== PULSE Traffic Runner started ===")
    log(f"Config: {BATCHES_PER_RUN} batches × 30 sessions = {BATCHES_PER_RUN * 30} sessions every {INTERVAL_SECONDS // 60} min")

    while True:
        run_num += 1
        run_start = time.time()
        log(f"--- Run #{run_num} START ({BATCHES_PER_RUN * 30} sessions) ---")

        for b in range(1, BATCHES_PER_RUN + 1):
            log(f"  Batch {b}/{BATCHES_PER_RUN} starting...")
            try:
                await run_batch(batch_num=f"{run_num}.{b}")
            except Exception as e:
                log(f"  Batch {b} failed: {e}")
            log(f"  Batch {b}/{BATCHES_PER_RUN} done.")

        elapsed = time.time() - run_start
        log(f"--- Run #{run_num} COMPLETE in {elapsed:.0f}s ({BATCHES_PER_RUN * 30} sessions) ---")

        sleep_for = max(0, INTERVAL_SECONDS - elapsed)
        if sleep_for > 0:
            log(f"Sleeping {sleep_for / 60:.1f} min until next run...")
            await asyncio.sleep(sleep_for)


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        log("Runner stopped.")
        sys.exit(0)

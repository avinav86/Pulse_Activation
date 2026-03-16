"""
Continuous traffic runner for Railway deployment.
Runs batches of 30 sessions back-to-back forever — no idle gaps.
"""

import asyncio
import time
import sys
from datetime import datetime
from simulate_visits import run_batch

BATCHES_PER_RUN = 5   # log a "run complete" marker every 5 batches (150 sessions)


def log(msg):
    ts = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    print(f"[{ts}] {msg}", flush=True)


async def main():
    run_num   = 0
    batch_num = 0
    log("=== PULSE Traffic Runner started — running continuously ===")

    while True:
        run_num  += 1
        run_start = time.time()
        log(f"--- Run #{run_num} START ({BATCHES_PER_RUN * 30} sessions) ---")

        for b in range(1, BATCHES_PER_RUN + 1):
            batch_num += 1
            log(f"  Batch {b}/{BATCHES_PER_RUN} starting...")
            try:
                await run_batch(batch_num=f"{run_num}.{b}")
            except Exception as e:
                log(f"  Batch {b} failed: {e}")
            log(f"  Batch {b}/{BATCHES_PER_RUN} done.")

        elapsed = time.time() - run_start
        log(f"--- Run #{run_num} COMPLETE in {elapsed:.0f}s ({BATCHES_PER_RUN * 30} sessions) — next run starting immediately ---")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        log("Runner stopped.")
        sys.exit(0)

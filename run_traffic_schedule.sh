#!/bin/bash
TOTAL_RUNS=12
INTERVAL_MINS=30
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG="$SCRIPT_DIR/traffic_schedule.log"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG"; }

log "=== TRAFFIC SCHEDULE STARTED: $TOTAL_RUNS runs × 150 sessions = $((TOTAL_RUNS * 150)) total ==="

for RUN in $(seq 1 $TOTAL_RUNS); do
  log "--- Run $RUN/$TOTAL_RUNS START (150 sessions = 5 × 30) ---"
  for BATCH in 1 2 3 4 5; do
    log "  Run $RUN | Batch $BATCH/5 starting..."
    cd "$SCRIPT_DIR" && python3 simulate_visits.py >> "$LOG" 2>&1
    log "  Run $RUN | Batch $BATCH/5 complete."
  done
  log "--- Run $RUN/$TOTAL_RUNS COMPLETE ($(( RUN * 150 )) sessions so far) ---"
  if [ "$RUN" -lt "$TOTAL_RUNS" ]; then
    log "Sleeping $INTERVAL_MINS minutes until next run..."
    sleep $(( INTERVAL_MINS * 60 ))
  fi
done

log "=== ALL DONE — $((TOTAL_RUNS * 150)) sessions completed. ==="

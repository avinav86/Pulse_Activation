# Use the official Playwright Python image — includes Chromium + all system deps
FROM mcr.microsoft.com/playwright/python:v1.42.0-jammy

WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install Playwright browsers (chromium only to keep image small)
RUN playwright install chromium

# Copy source
COPY simulate_visits.py .
COPY runner.py .

# Railway restarts the container on crash — keep it running forever
CMD ["python", "-u", "runner.py"]

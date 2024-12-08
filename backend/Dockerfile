# Base image
FROM python:3.9-slim

# Working directory
WORKDIR /app

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose the app port
EXPOSE 5000

# Command to run the app
CMD ["python", "app.py"]

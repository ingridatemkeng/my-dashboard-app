# Stage 1: Build
FROM node:14 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if you have a build step, for example, with React frontend)
# RUN npm run build

# Stage 2: Production
FROM node:14-alpine AS production

# Set working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/backend/server.js ./
COPY --from=builder /app/backend/routes ./routes
COPY --from=builder /app/backend/models ./models

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]


# Simple single-stage production Dockerfile
# Uses pre-built frontend from local dist/

FROM node:20-alpine

WORKDIR /app

# Copy backend package.json
COPY backend/package.json ./

# Install backend production dependencies only
RUN npm install --production

# Copy backend source
COPY backend/server.js ./

# Copy pre-built frontend (from local npm run build)
COPY dist ./dist

# Copy static assets
COPY public/vite.svg ./dist/vite.svg 2>/dev/null || true

# Expose Cloud Run default port
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "server.js"]

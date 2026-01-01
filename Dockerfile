# Build stage - Frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy ALL frontend files needed for build
COPY package.json package-lock.json* ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY index.tsx ./
COPY App.tsx ./
COPY components/ ./components/
COPY constants.ts ./
COPY types.ts ./

# Install ALL dependencies (including dev deps for build)
RUN npm install

# Build frontend
RUN npm run build

# Debug: show what was built
RUN ls -la dist/ && echo "=== FULL INDEX.HTML ===" && cat dist/index.html && echo "=== END ==="

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy backend package.json
COPY backend/package.json ./

# Install backend production dependencies only
RUN npm install --omit=dev

# Copy backend source
COPY backend/server.js ./

# Copy built frontend from build stage
COPY --from=frontend-builder /app/dist ./dist

# Expose Cloud Run default port
EXPOSE 8080

# Set environment to production
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "server.js"]

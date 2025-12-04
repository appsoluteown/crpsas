# Build stage - Frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy frontend package files
COPY package.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

# Install frontend dependencies
RUN npm install

# Copy frontend source
COPY index.html ./
COPY index.tsx ./
COPY App.tsx ./
COPY components/ ./components/
COPY constants.ts ./
COPY types.ts ./

# Build frontend
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy backend package.json
COPY backend/package.json ./

# Install backend production dependencies only
RUN npm install --production

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

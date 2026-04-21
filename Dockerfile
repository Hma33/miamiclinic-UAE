# Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all files and build the project
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled output from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port (Coolify uses 80 by default internally)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

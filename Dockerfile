# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Set environment variables to suppress warnings
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV GENERATE_SOURCEMAP=false
# Don't treat warnings as errors
ENV CI=false
# Suppress npm deprecation warnings
ENV NPM_CONFIG_LOGLEVEL=error

# Copy package files and install dependencies
COPY package.json package-lock.json npm-force-resolutions.js ./
# Install dependencies and apply security fixes
RUN npm install --no-fund --no-audit --loglevel=error && \
    node npm-force-resolutions.js && \
    npm install --no-fund --no-audit --loglevel=error && \
    npm install --save-dev --no-fund --no-audit --loglevel=error @babel/plugin-proposal-private-property-in-object

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build --no-fund --no-audit --loglevel=error

# Production stage
FROM nginx:alpine

# Copy the build output from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config with security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

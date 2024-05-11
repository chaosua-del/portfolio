# Stage 1: Build the application
FROM node:lts-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --production

# Build the Next.js application
COPY . .
RUN yarn build

# Stage 2: Run the application in production
FROM node:lts-alpine

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/next.config.mjs ./

# Install production dependencies
RUN yarn install --production

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port on which the application will run
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
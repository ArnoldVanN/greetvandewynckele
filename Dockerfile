# Stage 1: Build React app
FROM node:20-alpine as builder

RUN corepack enable

RUN corepack prepare pnpm@10.13.1 --activate

WORKDIR /app
COPY . .
RUN pnpm install && pnpm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
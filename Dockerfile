FROM node:20-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

RUN   echo "Before: corepack version => $(corepack --version || echo 'not installed')" && \
      npm install -g corepack@latest && \
      echo "After : corepack version => $(corepack --version)" && \
      corepack enable && \
      pnpm --version

RUN apt-get update

WORKDIR /app
COPY . .
RUN pnpm install && pnpm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

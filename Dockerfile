# Stage 1: Build React app
FROM node:18-alpine as builder

WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
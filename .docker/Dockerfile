FROM node:14-alpine3.12 as builder

COPY ./ /var/www/html
WORKDIR /var/www/html
RUN npm install && npm run build

FROM nginx:1.19
COPY --from=builder /var/www/html/public /usr/share/nginx/html
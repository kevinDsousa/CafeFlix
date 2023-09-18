FROM node:latest as angular
# ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app/
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/cafe /usr/share/nginx/html
COPY ./config/nginx.config /etc/nginx/conf.d/default.conf

# docker build -t cafeflix
# docker run -p 8081:80 cafeflix

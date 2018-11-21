FROM node:8.12.0-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

FROM nginx:1.15.6-alpine-perl
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/build .

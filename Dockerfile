## build image
FROM node:16 as build

WORKDIR /var/app

COPY package.json package-lock.json* ./
RUN npm ci \
    && npm cache clean --force

COPY . .
RUN npm run build

## host image
FROM nginx:alpine

# set timezone to GMT
# update distro packages
ENV TZ=GMT
RUN echo $TZ > /etc/timezone \
    && echo $TZ > /etc/localtime \
    && apk update \
    && apk upgrade

# specialized configs for serving single page applications
COPY --from=build /var/app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /var/app/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

COPY --from=build /var/app/build .

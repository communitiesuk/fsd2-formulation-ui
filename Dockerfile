FROM node:14 AS base
WORKDIR /usr/src/app

FROM base AS build
ARG EVENT_HUB_API_URL
ADD .babelrc package.json package-lock.json webpack.config.js ./
RUN npm ci
COPY public ./public
COPY src ./src
RUN EVENT_HUB_API_URL=$EVENT_HUB_API_URL npm run build

FROM nginx:1.19 AS production
EXPOSE 80
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=build /usr/src/app/dist /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html
CMD nginx -g 'daemon off;'

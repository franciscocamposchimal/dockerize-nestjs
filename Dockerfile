# develop stage
FROM node:12.16-alpine as develop-stage
WORKDIR /app
RUN yarn global add @nestjs/cli
# build stage & production stage
FROM develop-stage as build-stage
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start:prod"]
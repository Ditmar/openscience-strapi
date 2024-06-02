# Use una imagen base de Node.js
FROM node:18-alpine
ENV HOST some.host.com
ENV NODE_ENV production
WORKDIR /app
COPY public /app/public
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
RUN mkdir -p /app/public/uploads
COPY . .

RUN yarn build
EXPOSE 1337

CMD ["yarn", "start"]

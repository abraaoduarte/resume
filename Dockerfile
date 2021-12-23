FROM node:lts-alpine

COPY . .

RUN yarn install

EXPOSE 3002

ENTRYPOINT ["yarn","dev"]

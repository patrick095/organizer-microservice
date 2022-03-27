FROM node:lts-alpine as base

WORKDIR /home/node/app

COPY package*.json ./

EXPOSE 3000

FROM base as dev

COPY . .

CMD ["npm", "run dev"]
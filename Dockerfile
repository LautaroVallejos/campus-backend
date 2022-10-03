FROM node:16

RUN apt-get update && apt-get install libvips-dev -y

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app/

COPY ./package.json /usr/src/app/

COPY ./.env /usr/src/app/

COPY ./ .

ENV NODE_ENV .env

RUN npm install

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]
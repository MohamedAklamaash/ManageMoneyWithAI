FROM node:23-alpine

WORKDIR /app

COPY *.json /app/

RUN npm install --legacy-peer-deps

COPY . /app/

EXPOSE 3000

CMD [ "npm","run","dev" ]
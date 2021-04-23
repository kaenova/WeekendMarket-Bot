FROM node:lts-alpine3.12

WORKDIR /app
COPY package.json package.json
RUN npm install -g npm@latest

RUN apk add tzdata
RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime

COPY . .
RUN npm install .

CMD [ "npm", "run", "dev" ]
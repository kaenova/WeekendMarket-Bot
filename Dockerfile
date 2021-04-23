FROM node:lts-alpine3.12

WORKDIR /app
COPY package.json package.json
RUN npm install -g npm@latest

COPY . .
RUN npm install .
CMD [ "npm", "run", "dev" ]
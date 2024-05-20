FROM node:18
WORKDIR /usr/src/app
RUN npm install -g pm2
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "node /usr/src/app/mongo-init/index.js && npm start"]


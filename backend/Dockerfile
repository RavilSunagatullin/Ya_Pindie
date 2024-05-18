FROM node:18
RUN npm install -g pm2
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "node /usr/src/app/mongo-init/index.js && npm run dev"]


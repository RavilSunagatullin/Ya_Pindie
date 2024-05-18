FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g pm2
COPY . .
EXPOSE 3001
RUN npm run build
#CMD ["npm", "run", "dev"]
#CMD ["npm", "start"]
CMD ["pm2-runtime", "npm", "--", "start"]
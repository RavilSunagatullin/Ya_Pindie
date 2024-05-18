# Pindie

## Для запуска через Docker
1. Установите [Docker](https://docs.docker.com/get-docker/)
   и [Docker Compose](https://docs.docker.com/compose/install/), если у вас их еще нет
2. Запуситите команду `docker-compose up --build`
3. URL для [Frontend](http://localhost) и [Backend](http://localhost/backend)

## Для запуска локально
1. Нужо установить [NodeJS](https://nodejs.org/en) и [MongoDB](https://www.mongodb.com/) локально
2. Нужно поменять конфиг в папке `backend/src/config`
3. Также конфиг в папке `frontend/app/api/config`
4. Нужно поднять локально базу данных
   1. Windows: `mongod --port 27017 --dbpath "C:\data\db"`
   2. MacOS: intel `mongod --config /usr/local/etc/mongod.conf --fork`
   3. MacOS: arm `mongod --config /opt/homebrew/etc/mongod.conf --fork`
5. Для запуска, в каждой папке пропишите `npm run dev`
6. URL такие же  [Frontend](http://localhost) и [Backend](http://localhost/backend)

##  В проекте реализовано 
Для Backend 
```json
{
   "dev": "node index.js",
   "start": "node index.js",
   "test": "jest",
   "lint": "eslint . ",
   "lint:fix": "eslint .  --fix",
   "format": "prettier --write ."
}
```
Для Frontend
```json
  {
    "dev": "next dev -p 3001",
    "start": "next start -p 3001",
    "build": "next build",
    "lint": "next lint",
    "format": "prettier --write ."
  }
```
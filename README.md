# Pindie

#### URL Frontend: https://yapindie.nomoredomainswork.ru
#### URL Backend: https://yapindiebackend.nomoredomainswork.ru

## Для запуска через Docker
1. Установите [Docker](https://docs.docker.com/get-docker/)
   и [Docker Compose](https://docs.docker.com/compose/install/), если у вас их еще нет
2. Обновите файл hosts на вашей локальной машине
   1. sudo nano /etc/hosts (На Windows:
      Откройте блокнот от имени администратора и откройте файл C:\Windows\System32\drivers\etc\hosts.)
   2. Добавьте следующие строки

      `127.0.0.1 frontend.local`

      `127.0.0.1 backend.local`
   3. Проверьте nginx.conf на наличие этих доменов
   4. Проветьте `/frontend/app/api/config.js` и `/backend/src/public/scripts` на нужный домен для backend (http://backend.local)
3. Запуситите команду `docker-compose up --build`
4. URL для [Frontend](http://frontend.local) и [Backend](http://backend.local)

## Для запуска локально /*Не проверял :*/
1. Нужо установить [NodeJS](https://nodejs.org/en) и [MongoDB](https://www.mongodb.com/) локально
2. Нужно поменять конфиг в папке `backend/src/config`
3. Также конфиг в папке `frontend/app/api/config`
4. Нужно поднять локально базу данных
   1. Windows: `mongod --port 27017 --dbpath "C:\data\db"`
   2. MacOS: intel `mongod --config /usr/local/etc/mongod.conf --fork`
   3. MacOS: arm `mongod --config /opt/homebrew/etc/mongod.conf --fork`
5. Для запуска, в каждой папке пропишите `npm run dev`
6. URL такие же  [Frontend](http://frontend.local) и [Backend](http://backend.local), а если не работает http://localhost:3000 и http://localhost:3001
7. Возможно нужно сделать 3 пункт из запуска для Docker


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
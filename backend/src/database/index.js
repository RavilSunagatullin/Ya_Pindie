const mongoose = require('mongoose')
const config = require('../config/index')

function connectToDatabase() {
  mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => console.log('Connected to database'))
    .catch((err) => {
      console.error('Could not connect to database, retrying in 5 seconds...', err)
      setTimeout(connectToDatabase, 5000)
    })
}

connectToDatabase()

module.exports = mongoose

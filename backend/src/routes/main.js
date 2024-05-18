const mainRouter = require('express').Router()
const path = require('path')

mainRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = mainRouter

const gamesRouter = require('./games')
const usersRouter = require('./users')
const categoriesRouter = require('./categories')
const authRouter = require('./auth')
const api = require('express').Router()

api.use('/api', gamesRouter)
api.use('/api', usersRouter)
api.use('/api', categoriesRouter)
api.use('/api', authRouter)

module.exports = api

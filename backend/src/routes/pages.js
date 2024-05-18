const pagesRouter = require('express').Router()
const { sendIndex, sendDashboard } = require('../controllers/pages')
const { checkCookiesJWT, checkAuth } = require('../middlewares/auth')

pagesRouter.get('/', sendIndex)
pagesRouter.get('/admin/**', checkCookiesJWT, checkAuth, sendDashboard)

module.exports = pagesRouter

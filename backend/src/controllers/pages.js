const { verify } = require('jsonwebtoken')
const { tokens } = require('../config')
const pagesRouter = require('express').Router()
const path = require('path')
const sendIndex = (req, res) => {
  const sendIndex = (req, res) => {
    if (req.cookies.jwt) {
      try {
        verify(req.cookies.jwt, tokens.secret)
        return res.redirect('/admin/dashboard')
      } catch (err) {
        res.sendFile(path.join(__dirname, '../public/index.html'))
      }
    }
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }
}
const sendDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin/dashboard.html'))
}
module.exports = { sendIndex, sendDashboard }

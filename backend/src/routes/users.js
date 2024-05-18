const usersRouter = require('express').Router()
const {
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  filterPassword,
  hashPassword,
} = require('../middlewares/users')
const { sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users')
const { createUser } = require('../middlewares/users')
const { sendUserCreated } = require('../controllers/users')
const { checkAuth } = require('../middlewares/auth')

usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers)
usersRouter.post(
  '/users',
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmail,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated,
)
usersRouter.get('/users/:id', findUserById, filterPassword, sendUserById)
usersRouter.put('/users/:id', findUserById, checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated)
usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted)
usersRouter.get('/me', checkAuth, sendMe)
module.exports = usersRouter

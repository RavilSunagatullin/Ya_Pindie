const categoriesRouter = require('express').Router()

const {
  findAllCategories,
  findCategoryById,
  updateCategory,
  deleteCategories,
  checkIsCategoryExists,
  checkEmptyName,
} = require('../middlewares/categories')
const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require('../controllers/categories')
const { createCategory } = require('../middlewares/categories')
const { sendCategoryCreated } = require('../controllers/categories')
const { checkAuth } = require('../middlewares/auth')

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post(
  '/categories',
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated,
)
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)
categoriesRouter.put(
  '/categories/:id',
  checkEmptyName,
  checkAuth,
  findCategoryById,
  updateCategory,
  sendCategoryUpdated,
)
categoriesRouter.delete('/categories/:id', checkAuth, deleteCategories, sendCategoryDeleted)
module.exports = categoriesRouter

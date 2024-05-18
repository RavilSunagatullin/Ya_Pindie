const fs = require('fs').promises
const path = require('path')
const mongoose = require('../src/database/index')
const Category = require('../src/models/category')
const Game = require('../src/models/game')
const User = require('../src/models/user')
async function loadData() {
  try {
    await mongoose.connection.once('open', () => {
      console.log('Connected to database (script fill info)')
    })

    const categories = JSON.parse(await fs.readFile(path.resolve(__dirname, 'pindie.categories.json'), 'utf-8'))
    const games = JSON.parse(await fs.readFile(path.resolve(__dirname, 'pindie.games.json'), 'utf-8'))
    const users = JSON.parse(await fs.readFile(path.resolve(__dirname, 'pindie.users.json'), 'utf-8'))

    const transformedCategories = categories.map((item) => {
      return {
        ...item,
        _id: item._id.$oid,
      }
    })

    const transformedGames = games.map((item) => ({
      ...item,
      _id: item._id.$oid,
      users: item.users.map((user) => user.$oid),
      categories: item.categories.map((category) => category.$oid),
    }))

    const transformedUsers = users.map((item) => ({
      ...item,
      _id: item._id.$oid,
    }))

    const categoryCount = await Category.countDocuments()
    const gameCount = await Game.countDocuments()
    const userCount = await User.countDocuments()

    if (categoryCount === 0) {
      await Category.insertMany(transformedCategories)
      console.log('Categories is field base info')
    }
    if (gameCount === 0) {
      await Game.insertMany(transformedGames)
      console.log('Games is field base info')
    }
    if (userCount === 0) {
      await User.insertMany(transformedUsers)
      console.log('Users is field base info')
    }
    console.log('Data successfully loaded')
  } catch (err) {
    console.error('Error loading data:', err)
  } finally {
    mongoose.connection.close()
  }
}
loadData()

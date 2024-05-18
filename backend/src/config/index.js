module.exports = {
  mongo: {
    url: 'mongodb://db:27017/pindie',
    // url:'mongodb://localhost:27017/Pindie', //для локального запуска без докера
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  app: {
    port: 3000,
  },
  tokens: {
    secret:
      'bd2af63967eff4b48f665fc9afea7e1792530a7b242cfdc0eabec67b342b77551e7528965c438c19c951b2d42e8db98947bdd633707d293c4fcfbf74d1b66735',
  },
}

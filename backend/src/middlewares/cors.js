const allowedCors = [
  'https://practicum.yandex.ru',
  'https://students-projects.ru',
  'http://frontend.local',
  'http://backend.local',
  'http://yapindie.nomoredomainswork.ru',
  'http://yapindiebackend.nomoredomainswork.ru',
  'https://yapindie.nomoredomainswork.ru',
  'https://yapindiebackend.nomoredomainswork.ru'
]
function cors(req, res, next) {
  const { origin } = req.headers
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization',
    )
  }
  next()
}

module.exports = cors

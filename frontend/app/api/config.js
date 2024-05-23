export const BASE_URL = 'https://yapindiebackend.nomoredomainswork.ru/api'
// export const BASE_URL = 'http://backend.local/api'
// export const BASE_URL = 'http://localhost:3000/api'  //? для локального запуска без докера

export const endpoints = {
  games: `${BASE_URL}/games`,
  auth: `${BASE_URL}/auth/login`,
  me: `${BASE_URL}/me`,
  register: `${BASE_URL}/auth/local/register`,
}

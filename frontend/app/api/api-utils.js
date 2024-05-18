export const getData = async (url) => {
  try {
    const response = await fetch(url)
    if (response.status !== 200) {
      throw new Error('Ошибка получения данных')
    }
    return await response.json()
  } catch (error) {
    return error
  }
}
export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`)
  return isResponseOk(data) ? normalizeDataObject(data) : data
}
export const getNormalizedGamesDataByCategory = async (url, category) => {
  try {
    const data = await getData(`${url}?categories.name=${category}`)
    return isResponseOk(data) ? normalizeData(data) : data
  } catch (e) {
    console.error(e)
  }
}
const normalizeDataObject = (obj) => {
  let str = JSON.stringify(obj)
  str = str.replaceAll('_id', 'id')
  const newObj = JSON.parse(str)
  return { ...newObj, category: newObj.categories }
}
export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item)
  })
}
export const isResponseOk = (response) => {
  return !(response instanceof Error)
}

export const authorize = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      throw new Error('Ошибка авторизации')
    }
    return await response.json()
  } catch (error) {
    return error
  }
}
export const getMe = async (url, jwt) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwt}` },
    })
    if (response.status !== 200) {
      throw new Error('Ошибка получения данных')
    }
    return await response.json()
  } catch (error) {
    return error
  }
}
export const setJWT = (jwt) => {
  localStorage.setItem('jwt', jwt)
}
export const getJWT = () => {
  return typeof window !== 'undefined' ? localStorage.getItem('jwt') : null
}
export const removeJWT = () => {
  localStorage.removeItem('jwt')
}
export const checkIfUserVoted = (game, userId) => {
  return game.users.find((user) => user.id === userId)
}
export const vote = async (url, jwt, usersArray) => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({ users_permissions_users: usersArray }),
    })
    if (response.status !== 200) {
      throw new Error('Ошибка голосования')
    }
    return await response.json()
  } catch (error) {
    return error
  }
}

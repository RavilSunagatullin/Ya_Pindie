import { useEffect, useState } from 'react'
import { getMe, getNormalizedGamesDataByCategory, isResponseOk } from './api-utils'

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category)
      isResponseOk(data) ? setData(data) : setData(null)
    }
    fetchData()
  }, [])
  return data
}
export const useGetMe = (endpoint, jwt) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchData() {
      const data = await getMe(endpoint, jwt)
      setData(data)
    }

    fetchData()
  }, [])
  return data
}

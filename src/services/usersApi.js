import { api, baseUrl } from '../config/axios'

const usersApi = async () => {
  try {
    return await api.get(`${baseUrl}/users`)
  } catch (error) {
    throw new Error(error)
  }
}

export default usersApi

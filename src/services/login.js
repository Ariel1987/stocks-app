import { api, baseUrl } from '../config/axios'

const login = async ({ email, password }) => {
  try {
    return await api.post(`${baseUrl.serverUrl}/login`, { email, password })
  } catch (error) {
    throw new Error(error)
  }
}

export default login

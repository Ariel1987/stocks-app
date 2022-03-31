import { api, baseUrl } from '../config/axios'

const signUpApi = async ({ name, email, password }) => {
  try {
    return await api.post(`${baseUrl}/register`, { name, email, password })
  } catch (error) {
    throw new Error(error)
  }
}

export default signUpApi

import { api } from '../config/axios'

const signUpApi = async ({ email, password }) => {
  try {
    return await api.post(`http://localhost:3000/users`, { email, password })
  } catch (error) {
    throw new Error(error)
  }
}

export default signUpApi

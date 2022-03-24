import { api } from '../config/axios'

const signUpApi = async ({ name, email, password }) => {
  try {
    return await api.post(`http://localhost:3000/users`, { name, email, password })
  } catch (error) {
    throw new Error(error)
  }
}

export default signUpApi

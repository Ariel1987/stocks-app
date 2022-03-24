import { api } from '../config/axios'

const login = async ({ email, password }) => {
  try {
    return await api.get(`http://localhost:3000/users?email=${email}&password=${password}`)
  } catch (error) {
    throw new Error(error)
  }
}

export default login

import { api } from '../config/axios'

const loginApi = async () => {
  try {
    return await api.get(`http://localhost:3000/users`)
  } catch (error) {
    throw new Error(error)
  }
}

export default loginApi

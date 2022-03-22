import { api } from '../config/axios'

const loginApi = async ({ email, password }) => {
  try {
    return await api.post(
      `http://localhost:3000/posts`,
      email, 
      password 
    )
  } catch (error) {
    throw new Error(error)
  }
}

export default loginApi

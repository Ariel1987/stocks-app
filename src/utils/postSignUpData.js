import { api, baseUrl } from "../config/axios"

const postSignUpData = async ({ name, email, password }) => {
  const payload = {
    name: null,
    email: null,
    password: null
  }

  try {
    const loginDataResult = await api.post(`${baseUrl.serverUrl}/register`, { name, email, password })
    payload.name = loginDataResult.data.name
    payload.email = loginDataResult.data.email
    payload.password = loginDataResult.data.password
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default postSignUpData

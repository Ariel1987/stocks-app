import loginApi from "../services/loginApi"

const fetchLoginData = async ({ email, password }) => {
  const payload = {
    email: null,
    password: null
  }

  try {
    const loginDataResult = await loginApi({ email, password })
    payload.email = loginDataResult.data.email
    payload.password = loginDataResult.data.password
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchLoginData
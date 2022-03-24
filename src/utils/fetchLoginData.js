import loginApi from "../services/loginApi"

const fetchLoginData = async () => {
  const payload = {
    data: null
  }

  try {
    const loginDataResult = await loginApi()
    payload.data = loginDataResult.data
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchLoginData
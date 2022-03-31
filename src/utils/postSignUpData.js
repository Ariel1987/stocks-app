import signUpApi from "../services/signUpApi"

const postSignUpData = async ({ name, email, password }) => {
  const payload = {
    name: null,
    email: null,
    password: null
  }

  try {
    const loginDataResult = await signUpApi({ name, email, password })
    payload.name = loginDataResult.data.name
    payload.email = loginDataResult.data.email
    payload.password = loginDataResult.data.password
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default postSignUpData

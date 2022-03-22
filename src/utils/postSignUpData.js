import signUpApi from "../services/signUpApi"

const postSignUpData = async ({ email, password }) => {
  const payload = {
    email: null,
    password: null
  }

  try {
    const loginDataResult = await signUpApi({ email, password })
    payload.email = loginDataResult.data.email
    payload.password = loginDataResult.data.password
    
    return payload
  } catch (error) {
    throw new Error(error)
  }
}

export default postSignUpData
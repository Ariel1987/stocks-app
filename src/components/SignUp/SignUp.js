import { useState } from 'react'
import {
  POSTING_DATA_ERROR,
  POSTING_DATA_SUCCESS,
  useLoginData,
} from '../../context/useLoginData'
import postSignUpData from '../../utils/postSignUpData'

const SignUp = () => {
  const [signUp, setSignUp] = useState({ email: '', password: '' })
  const { dispatch: dispatchLoginData, state: signUpData } = useLoginData()

  const handleLoginSubmission = async (event) => {
    event.preventDefault()

    try {
      const response = await postSignUpData({ email: signUp.email, password: signUp.password } )

      dispatchLoginData({ type: POSTING_DATA_SUCCESS, payload: response })
    } catch (error) {
      dispatchLoginData({ type: POSTING_DATA_ERROR })
    }
    setSignUp({ email: '', password: '' })
  }

  console.log(signUpData)

  return (
    <form onSubmit={handleLoginSubmission}>
      <input
        type="text"
        placeholder="Email"
        id="email"
        onChange={(event) => setSignUp(state => ({ ...state, email: event.target.value }))}
        value={signUp.email || ''}
      />
      <input
        type="text"
        placeholder="Password"
        id="password"
        onChange={(event) => setSignUp(state => ({ ...state, password: event.target.value }))}
        value={signUp.password || ''}
      />
      <button>Sign up</button>
    </form>
  )
}

export default SignUp

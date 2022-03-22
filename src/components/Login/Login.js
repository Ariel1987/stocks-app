import { useState } from 'react'
import {
  POSTING_DATA_ERROR,
  POSTING_DATA_SUCCESS,
  useLoginData,
} from '../../context/useLoginData'
import postLoginData from '../../utils/postLoginData'

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' })
  const { dispatch: dispatchLoginData, state: loginData } = useLoginData()

  const handleLoginSubmission = async (event) => {
    event.preventDefault()

    try {
      const response = await postLoginData({ email: login.email, password: login.password } )

      dispatchLoginData({ type: POSTING_DATA_SUCCESS, payload: response })
    } catch (error) {
      dispatchLoginData({ type: POSTING_DATA_ERROR })
    }
    setLogin({ email: '', password: '' })
  }

  console.log(loginData)

  return (
    <form onSubmit={handleLoginSubmission}>
      <input
        type="text"
        placeholder="Email"
        id="email"
        onChange={(event) => setLogin({ email: event.target.value })}
        value={login.email || ''}
      />
      <input
        type="text"
        placeholder="Password"
        id="password"
        onChange={(event) => setLogin({ password: event.target.value })}
        value={login.password || ''}
      />
      <button>Sign in</button>
    </form>
  )
}

export default Login

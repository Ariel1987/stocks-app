import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Wrapper } from './Login.styles'
import {
  POSTING_DATA_ERROR,
  POSTING_DATA_SUCCESS,
  useLoginData,
} from '../../../context/useLoginData'
import fetchLoginData from '../../../utils/fetchLoginData'
import FormInput from '../../../components/atoms/Input/Input'
import LoginButton from '../../../components/atoms/Button/Button'

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' })
  const { dispatch: dispatchLoginData, state: loginData } = useLoginData()

  const handleLoginSubmission = async (event) => {
    event.preventDefault()

    if (login.email.includes('@')) {
      try {
        const response = await fetchLoginData()

        dispatchLoginData({ type: POSTING_DATA_SUCCESS, payload: response })
      } catch (error) {
        dispatchLoginData({ type: POSTING_DATA_ERROR })
      }
    } else {
      alert ('Invalid email')
    }
    setLogin({ email: '', password: '' })
  }
  console.log(loginData)

  return (
    <Wrapper onSubmit={handleLoginSubmission}>
      <h1>Stocks App</h1>
      <FormInput
        placeholder="Enter your email"
        id="email"
        onChange={(event) =>
          setLogin((state) => ({ ...state, email: event.target.value }))
        }
        value={login.email || ''}
      />
      <FormInput
        placeholder="Enter your password"
        id="password"
        onChange={(event) =>
          setLogin((state) => ({ ...state, password: event.target.value }))
        }
        value={login.password || ''}
      />
      <LoginButton buttonName="LOGIN" />
      <p>
        Don't have an account?{' '}
        <Link to="signup" style={{ color: '#2666CF' }}>
          Sign Up
        </Link>
      </p>
    </Wrapper>
  )
}

export default Login

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Wrapper } from './Login.styles'
import login from '../../../services/login'
import FormInput from '../../../components/atoms/Input/Input'
import LoginButton from '../../../components/atoms/Button/Button'
import {
  FETCHING_DATA_ERROR,
  FETCHING_DATA_SUCCESS,
  useLoginData,
} from '../../../context/useLoginData'

const Login = () => {
  const [loginData, setLogin] = useState({ email: '', password: '' })
  const { dispatch } = useLoginData()
  const navigate = useNavigate()

  const handleLoginSubmission = async (event) => {
    event.preventDefault()

    try {
      const response = await login(loginData)
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: response })

      if (response.status === 200 && response.data.length > 0) {
        console.log('welcome')
        console.log(response)
        navigate('/')
      }
    } catch (error) {
      dispatch({ type: FETCHING_DATA_ERROR })
    }
  }

  return (
    <Wrapper onSubmit={handleLoginSubmission}>
      <h1>Stocks App</h1>
      <FormInput
        placeholder="Enter your email"
        id="email"
        onChange={(event) =>
          setLogin((state) => ({ ...state, email: event.target.value }))
        }
        value={loginData.email || ''}
      />
      <FormInput
        placeholder="Enter your password"
        id="password"
        onChange={(event) =>
          setLogin((state) => ({ ...state, password: event.target.value }))
        }
        value={loginData.password || ''}
      />
      <LoginButton buttonName="LOGIN" />
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Wrapper>
  )
}

export default Login

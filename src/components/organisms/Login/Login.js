import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Wrapper } from './Login.styles'
import login from '../../../services/login'
import Input from '../../../components/atoms/Input/Input'
import Button from '../../../components/atoms/Button/Button'
import {
  FETCHING_DATA_ERROR,
  FETCHING_DATA,
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
      dispatch({ type: FETCHING_DATA })
      const response = await login(loginData)
      
      if (response.status === 200 && !!response.data.user) {
        dispatch({ type: FETCHING_DATA_SUCCESS, payload: response.data.user })

        navigate('/')
      }
    } catch (error) {
      dispatch({ type: FETCHING_DATA_ERROR })
    }
  }

  return (
    <Wrapper onSubmit={handleLoginSubmission}>
      <h1>Stocks App</h1>
      <Input
        placeholder="Enter your email"
        id="email"
        type='text'
        onChange={(event) =>
          setLogin((state) => ({ ...state, email: event.target.value }))
        }
        value={loginData.email || ''}
      />
      <Input
        placeholder="Enter your password"
        id="password"
        type='text'
        onChange={(event) =>
          setLogin((state) => ({ ...state, password: event.target.value }))
        }
        value={loginData.password || ''}
      />
      <Button type='submit'>LOGIN</Button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Wrapper>
  )
}

export default Login

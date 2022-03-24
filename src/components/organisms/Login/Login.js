import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Wrapper } from './Login.styles'
import fetchLoginData from '../../../utils/fetchLoginData'
import FormInput from '../../../components/atoms/Input/Input'
import LoginButton from '../../../components/atoms/Button/Button'

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' })
  const [users, setUsers] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await fetchLoginData())
    }
    fetchUsers()
  }, [])

  const handleLoginSubmission = (event) => {
    event.prevenDefault()
    
    if (users?.data.filter(data => data.email === login.email)) {
      console.log('welcome')
    }
  }

  console.log(users?.data.filter(data => data.email === login.email))

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

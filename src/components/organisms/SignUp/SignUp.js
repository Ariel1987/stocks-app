import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/Button/Button'
import FormInput from '../../atoms/Input/Input'
import {
  POSTING_DATA_ERROR,
  POSTING_DATA_SUCCESS,
  useLoginData,
} from '../../../context/useLoginData'
import postSignUpData from '../../../utils/postSignUpData'
import { Wrapper } from './SignUp.styles'

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    name: '',
    email: '',
    password: '',
    passwordVerification: '',
  })
  const { dispatch: dispatchLoginData } = useLoginData()
  const navigate = useNavigate()

  const handleSignUpSubmission = async (event) => {
    event.preventDefault()

    try {
      const response = await postSignUpData({
        name: signUp.name,
        email: signUp.email,
        password: signUp.password,
      })
      dispatchLoginData({ type: POSTING_DATA_SUCCESS, payload: response })
      navigate('/')
    } catch (error) {
      dispatchLoginData({ type: POSTING_DATA_ERROR })
    }

    setSignUp({ name: '', email: '', password: '' })
  }

  return (
    <Wrapper onSubmit={handleSignUpSubmission}>
      <h1>Stocks App</h1>
      <FormInput
        placeholder="Enter your name"
        id="name"
        type="text"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, name: event.target.value }))
        }
        value={signUp.name || ''}
      />
      <FormInput
        placeholder="Enter your email"
        id="email"
        type="text"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, email: event.target.value }))
        }
        value={signUp.email || ''}
      />
      <FormInput
        placeholder="Enter your password"
        id="password"
        type="text"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, password: event.target.value }))
        }
        value={signUp.password || ''}
      />
      <FormInput
        placeholder="Verify your password"
        id="password-verification"
        type="text"
        onChange={(event) =>
          setSignUp((state) => ({
            ...state,
            passwordVerification: event.target.value,
          }))
        }
        value={signUp.passwordVerification || ''}
      />
      <Button type="submit">SIGN UP</Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Wrapper>
  )
}

export default SignUp

import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../../atoms/Button/Button'
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

  const handleSignUpSubmission = async (event) => {
    event.preventDefault()

    if (
      signUp.email.includes('@') &&
      signUp.password === signUp.passwordVerification
    ) {
      try {
        const response = await postSignUpData({
          name: signUp.name,
          email: signUp.email,
          password: signUp.password,
        })

        dispatchLoginData({ type: POSTING_DATA_SUCCESS, payload: response })
      } catch (error) {
        dispatchLoginData({ type: POSTING_DATA_ERROR })
      }
    } else if (!signUp.email.includes('@')) {
      alert('Invalid email')
    } else {
      alert('Reeenter same passowrd')
    }

    setSignUp({ name: '', email: '', password: '' })
  }

  return (
    <Wrapper onSubmit={handleSignUpSubmission}>
      <h1>Stocks App</h1>
      <FormInput
        placeholder="Enter your name"
        id="name"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, name: event.target.value }))
        }
        value={signUp.name || ''}
      />
      <FormInput
        placeholder="Enter your email"
        id="email"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, email: event.target.value }))
        }
        value={signUp.email || ''}
      />
      <FormInput
        placeholder="Enter your password"
        id="password"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, password: event.target.value }))
        }
        value={signUp.password || ''}
      />
      <FormInput
        placeholder="Verify your password"
        id="password"
        onChange={(event) =>
          setSignUp((state) => ({
            ...state,
            passwordVerification: event.target.value,
          }))
        }
        value={signUp.passwordVerification || ''}
      />
      <LoginButton buttonName="SIGN UP" />
      <p>
        Already have an account?{' '}
        <Link to="/" style={{ color: '#2666CF' }}>
          Login
        </Link>
      </p>
    </Wrapper>
  )
}

export default SignUp

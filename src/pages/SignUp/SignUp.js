import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../../components/atoms/Button/Button'
import FormInput from '../../components/atoms/Input/Input'
import {
  POSTING_DATA_ERROR,
  POSTING_DATA_SUCCESS,
  useLoginData,
} from '../../context/useLoginData'
import postSignUpData from '../../utils/postSignUpData'
import { Wrapper } from './SignUp.styles'

const SignUp = () => {
  const [signUp, setSignUp] = useState({ name: '', email: '', password: '' })
  const { dispatch: dispatchLoginData, state: signUpData } = useLoginData()

  const handleSignUpSubmission = async (event) => {
    event.preventDefault()

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
          setSignUp((state) => ({ ...state, password: event.target.value }))
        }
        value={signUp.password || ''}
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

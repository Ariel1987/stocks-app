import { useState } from 'react'
import {
  POSTING_DATA_ERROR,
  POSTING_DATA_SUCCESS,
  useLoginData,
} from '../../context/useLoginData'
import postSignUpData from '../../utils/postSignUpData'
import { Wrapper } from './SignUp.styles'

const SignUp = () => {
  const [signUp, setSignUp] = useState({ email: '', password: '' })
  const { dispatch: dispatchLoginData, state: signUpData } = useLoginData()

  const handleLoginSubmission = async (event) => {
    event.preventDefault()

    try {
      const response = await postSignUpData({
        email: signUp.email,
        password: signUp.password,
      })

      dispatchLoginData({ type: POSTING_DATA_SUCCESS, payload: response })
    } catch (error) {
      dispatchLoginData({ type: POSTING_DATA_ERROR })
    }
    setSignUp({ email: '', password: '' })
  }

  console.log(signUpData)

  return (
    <Wrapper onSubmit={handleLoginSubmission}>
      <h1>Stocks App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        id="name"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, email: event.target.value }))
        }
        value={signUp.email || ''}
      />
      <input
        type="text"
        placeholder="Enter your Email"
        id="email"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, email: event.target.value }))
        }
        value={signUp.email || ''}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        id="password"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, password: event.target.value }))
        }
        value={signUp.password || ''}
      />
      <input
        type="text"
        placeholder="Verify your Password"
        id="verification"
        onChange={(event) =>
          setSignUp((state) => ({ ...state, password: event.target.value }))
        }
        value={signUp.password || ''}
      />
      <button>SIGN UP</button>
      <p>Don't have an account? Sign Up</p>
    </Wrapper>
  )
}

export default SignUp

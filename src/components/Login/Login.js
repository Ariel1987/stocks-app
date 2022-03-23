import { Wrapper } from './Login.styles'

const Login = () => {
  return (
    <Wrapper>
      <h1>Stocks App</h1>
      <input
        type="text"
        placeholder="Enter your Email"
        id="email"
        // onChange={(event) =>
        //   setSignUp((state) => ({ ...state, email: event.target.value }))
        // }
        // value={signUp.email || ''}
      />
      <input
        type="text"
        placeholder="Enter your Password"
        id="password"
        // onChange={(event) =>
        //   setSignUp((state) => ({ ...state, password: event.target.value }))
        // }
        // value={signUp.password || ''}
      />
      <button>LOGIN</button>
      <p>Don't have an account? Sign Up</p>
    </Wrapper>
  )
}

export default Login

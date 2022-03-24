import { Wrapper } from './App.styles'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
    <Wrapper>
      <Router>
        <Routes />
      </Router>
    </Wrapper>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { LoginDataProvider } from './context/useLoginData'
import { StocksProvider } from './context/useStocksData'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/Theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoginDataProvider>
        <StocksProvider>
          <GlobalStyles />
          <App />
        </StocksProvider>
      </LoginDataProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      color: #444;
  }

  html {
      font-size: 10;
  }

  body {
      background-color: #121212;
  }
`

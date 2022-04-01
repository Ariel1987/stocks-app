import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 80%;

    h1 {
      color: white;
      padding-top: 16px;
    }

    h2 {
      color: white;
      padding-top: 16px;
    }
    
    input {
      margin-bottom: 12px;
    }

    button {
      margin-top: 0;
      padding: 10px;
      width: 50%;
    }
  `}
`

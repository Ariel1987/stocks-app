import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 80%;

    div {
      display: flex;
      margin-bottom: 16px;
    }

    h1 {
      color: white;
      padding-top: 16px;
    }

    h2 {
      color: white;
      padding-top: 8px;
      font-size: 12px;
    }
    
    input {
      margin-bottom: 0;
      margin-right: 8px;
    }

    button {
      margin-top: 0;
      padding: 10px;
      width: 50%;
    }
  `}
`

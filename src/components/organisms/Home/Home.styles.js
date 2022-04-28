import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      margin-bottom: 16px;
      margin-top: 16px;
    }

    h1 {
      color: white;
      padding-top: 16px;
      text-align: center;
    }

    h2 {
      color: white;
      padding-top: 8px;
      font-size: 12px;
    }
    
    input {
      margin-bottom: 8px;
      margin-right: 8px;
    }

    button {
      margin-top: 0;
      padding: 10px;
      width: 100%;
    }
  `}
`

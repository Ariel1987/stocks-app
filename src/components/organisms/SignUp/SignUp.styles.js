import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    padding-left: 20px;
    padding-right: 20px;

    h1 {
      color: #e9e9e9;
      font-size: ${theme.font.size.medium};
      align-self: flex-start;
      padding-bottom: 64px;
      text-align: center;
    }

    a {
      color: #2666CF;
    }

    p {
      color: #e9e9e9;
      padding-top: 16px;
      text-align: right;
    }

    button {
      ${'' /* width: 100%;
      padding: 20px;
      border-radius: 4px;
      background-color: ${theme.colors.main};
      border: none;
      color: white;
      font-weight: ${theme.font.weight.bold};
      margin-top: 45px; */}
    }
  `}
`

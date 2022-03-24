import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: ${theme.colors.main};
    border: none;
    color: white;
    font-weight: ${theme.font.weight.bold};
    margin-top: 45px;
  `}
`

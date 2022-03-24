import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    background-color: #1c1f24;
    border: none;
    border-bottom: solid 2px;
  `}
`

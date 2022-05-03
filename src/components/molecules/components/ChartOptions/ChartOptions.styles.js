import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    padding-top: 20px;
    align-items: flex-start;

    label {
      color: white;
    }
  `}
`

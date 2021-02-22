import styled, { css } from 'styled-components'

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.pallete.primary.main};
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 1em;
    text-transform: capitalize;
  `}
`

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacing.xxxlarge};
    border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
    padding-bottom: ${theme.spacing.small};
    display: flex;
    h2 {
      flex: 1;
    }
  `}

  ${media.greaterThan('medium')`
    margin-top: 0;
  `}
`

export const IconContent = styled.div`
  width: 38px;
  color: ${({ theme }) => theme.pallete.primary.main};
  align-self: flex-end;
`

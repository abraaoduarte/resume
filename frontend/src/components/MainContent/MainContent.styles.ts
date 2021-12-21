import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.pallete.dark.light};
  ${media.greaterThan('medium')`
    top: 0;
    left: 200px;
  `}
`

export const Section = styled.div`
  max-width: 1040px;
  width: 90%;
  margin: 0 auto;
  padding: 50px 0;
`

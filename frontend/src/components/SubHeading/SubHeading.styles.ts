import styled from 'styled-components'

export const SubHeading = styled.h3`
  display: inline-block;
  font-size: ${({ theme }) => theme.typography.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.typography.titleFont.semiBold};
  font-family: ${({ theme }) => theme.typography.titleFont.fontFamily};
  border-color: ${({ theme }) => theme.pallete.primary.main};
  line-height: 1em;
  letter-spacing: 0.5px;
  position: relative;
  text-transform: uppercase;
  padding: 5px 10px;
  border-bottom: 2px solid ${({ theme }) => theme.pallete.primary.main};
  text-align: center;
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 5px;
    background-color: ${({ theme }) => theme.pallete.primary.main};
    bottom: 0;
  }
`

import styled from 'styled-components'

export const SubHeading = styled.h3`
  border-color: #00a3e1 !important;
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.5px;
  position: relative;
  text-transform: uppercase;
  padding: 5px 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
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
    background-color: rgba(255, 255, 255, 0.6);
    bottom: 0;
  }
`

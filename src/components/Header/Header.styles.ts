import styled, { css } from 'styled-components'
import { Menu } from 'styles/Icons'

export const Header = styled.header`
  background-color: #17181b;
  width: 100%;
  position: fixed;
`

export const Content = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  text-align: right;
`

const iconCSS = css`
  width: 20px;
  height: 20px;
`

export const MenuIcon = styled(Menu)`
  ${iconCSS}
`

export const Name = styled.h2`
  /** TODO: Use REM */
  position: absolute;
  transform: translateX(-50%);
  display: inline-block;
  left: 50%;
  text-align: center;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  line-height: 50px;
  white-space: nowrap;
  font-weight: 500;
`

export const MenuButton = styled.button`
  color: white;
  width: 50px;
  height: 50px;
  display: inline-block;
  text-align: center;
  border: none;
  border-left: 1px solid #3b3c43;
  cursor: pointer;
  background-color: transparent;
  outline: none;
`

export const MenuContent = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 2;
  width: 200px;
  top: 0;
  background-color: #17181b;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  transition: transform 0.3s ease-in-out;
`

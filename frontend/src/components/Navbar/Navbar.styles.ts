import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Menu as MenuHamburguerIcon } from 'styles/Icons'

export const NavContent = styled.nav`
  position: fixed;
  background-color: ${({ theme }) => theme.pallete.dark.main};
  width: 100%;
  height: 50px;
  text-align: right;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const LogoContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`

export const Logo = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    line-height: 50px;
    color: ${theme.pallete.primary.light};
    font-family: ${theme.typography.titleFont.fontFamily};
    font-weight: ${theme.typography.titleFont.light};
    font-size: ${theme.typography.sizes.xlarge};
  `}
`

const iconCSS = css`
  width: 30px;
  height: 30px;
`

export const MenuIcon = styled(MenuHamburguerIcon)`
  ${iconCSS}
`

export const ButtonToggleMenu = styled.button`
  position: relative;
  color: white;
  width: 50px;
  height: 50px;
  text-align: center;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.pallete.dark.light};
  cursor: pointer;
  background-color: transparent;
  outline: none;
  &:hover {
    background-color: ${({ theme }) => theme.pallete.dark.dark};
  }
`

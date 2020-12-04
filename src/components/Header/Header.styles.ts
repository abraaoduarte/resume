import styled, { css } from 'styled-components'
import {
  Menu as MenuHamburguerIcon,
  Home,
  PersonOutline,
  ListAlt,
  ContactMail,
  FacebookSquare,
  Twitter,
  Github,
  Instagram
} from 'styles/Icons'

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
  @media screen and (min-width: 767px) {
    display: none;
  }
`

const iconCSS = css`
  width: 20px;
  height: 20px;
`

export const MenuIcon = styled(MenuHamburguerIcon)`
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
  position: absolute;
  transition: transform 0.3s ease-in-out;
  @media screen and (min-width: 767px) {
    transform: translateX(0);
    position: fixed;
  }
`

export const ContentImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

export const MyName = styled.h2`
  font-family: 'Playfair Display', serif;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  padding: 10px 0;
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  text-align: center;
  &::before {
    background-color: #00a3e1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
`
export const MenuItem = styled.li`
  padding: 10px 0 10px 50px;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 1px solid #202226;
  text-align: left;
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const UserIcon = styled(PersonOutline)`
  ${iconCSS}
`

export const ResumeIcon = styled(ListAlt)`
  ${iconCSS}
`

export const ContactIcon = styled(ContactMail)`
  ${iconCSS}
`

export const FacebookIcon = styled(FacebookSquare)`
  ${iconCSS}
`

export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`

export const GithubIcon = styled(Github)`
  ${iconCSS}
`

export const InstagramIcon = styled(Instagram)`
  ${iconCSS}
`

export const Anchor = styled.a`
  cursor: pointer;
  & span {
    position: relative;
    margin-left: 10px;
    top: 2px;
  }
  color: #777;
  &:hover {
    color: #fff;
  }
`

export const FooterMenu = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 15px;
`
export const SocialMedia = styled.ul`
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin: 0 auto;
  margin-bottom: 16px;
`
export const SocialMediaItem = styled.li``

export const Copyright = styled.p`
  font-size: 12px;
  color: #777;
  text-align: center;
  line-height: 1.65;
`

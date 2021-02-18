import styled, { css } from 'styled-components'
import {
  Home,
  PersonOutline,
  FileUser,
  ContactMail,
  Twitter,
  Github,
  Instagram,
  Article,
  LinkedinSquare
} from 'styles/Icons'
import media from 'styled-media-query'
import { SimpeBar } from './simplebar'

type NavigationProps = {
  isOpen: boolean
}

const NavigationModifiers = {
  openMenu: () => css`
    left: 0;
  `
}

export const Navigation = styled.nav<NavigationProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    height: 100%;
    width: 200px;
    background-color: ${theme.pallete.dark.main};
    text-align: center;
    z-index: 999;
    transition: all 0.3s ease-in-out;
    left: -220px;
    ${!!isOpen && NavigationModifiers.openMenu()};
    ${media.greaterThan('medium')`
      left: 0;
    `}
  `}
  overflow-y: hidden;
  ${SimpeBar}
`

export const ContentNavigation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

export const TextInsideMenu = styled.h2`
  display: none;
  font-size: ${({ theme }) => theme.typography.sizes.large};
  &::before {
    background-color: ${({ theme }) => theme.pallete.primary.main};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
    font-family: ${({ theme }) => theme.typography.titleFont.fontFamily};
  }
  ${media.greaterThan('medium')`
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      color: #fff;
      font-weight: 700;
      padding: 10px 0;
      text-transform: uppercase;
      text-shadow: 0 2px 10px rgb(0 0 0 / 50%);
      z-index: 1;
  `}
`

export const Menu = styled.ul`
  flex: 3;
  list-style: none;
`
export const MenuItem = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.typography.sizes.small};
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 1px solid ${theme.pallete.dark.light};
    text-align: left;
  `}
`
export const MenuLink = styled.a`
  display: block;
  padding: calc(${({ theme }) => theme.spacing.small} + 2px);
  color: ${({ theme }) => theme.pallete.primary.dark};
  text-align: left;
  padding-left: 40px;
  &:active,
  &:hover,
  &.active {
    cursor: pointer;
    color: ${({ theme }) => theme.pallete.primary.light};
  }
`
export const MenuText = styled.span`
  margin-left: ${({ theme }) => theme.spacing.small};
  line-height: ${({ theme }) => theme.typography.sizes.small};
  vertical-align: middle;
`

const iconCSS = css`
  width: 20px;
  height: 20px;
`
export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const UserIcon = styled(PersonOutline)`
  ${iconCSS}
`

export const ResumeIcon = styled(FileUser)`
  ${iconCSS}
`

export const ContactIcon = styled(ContactMail)`
  ${iconCSS}
`

export const BlogIcon = styled(Article)`
  ${iconCSS}
`

export const ContentSocialMedia = styled.div`
  padding: ${({ theme }) => theme.spacing.medium} 0;
`
export const SocialMedia = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 55%;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.xxxlarge};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`
export const SocialMediaItem = styled.li``
export const SocialMediaLink = styled.a`
  color: ${({ theme }) => theme.pallete.primary.dark};
  &:hover,
  &:active {
    cursor: pointer;
    color: ${({ theme }) => theme.pallete.primary.light};
  }
`

export const LinkedinIcon = styled(LinkedinSquare)`
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

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.small};
  color: ${({ theme }) => theme.pallete.primary.dark};
  text-align: center;
  line-height: 1.65;
`

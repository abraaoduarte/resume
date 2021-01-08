import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Header.styles'

const Header = (): React.ReactElement => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }
  const date = new Date()
  const currentYear = date.getFullYear()
  return (
    <S.Header>
      <S.Content>
        <S.Name>Abraão Duarte</S.Name>
        <S.MenuButton onClick={handleClick}>
          <S.MenuIcon />
        </S.MenuButton>
      </S.Content>
      <S.MenuContent isOpen={isOpen}>
        <S.ContentImage>
          <S.MyName>Abraão Duarte</S.MyName>
          <Image src="/img/avatar.jpeg" layout="fill" />
        </S.ContentImage>
        <S.Menu>
          <S.MenuItem>
            <Link href="/">
              <S.Anchor>
                <S.HomeIcon />
                <span>Home</span>
              </S.Anchor>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/about">
              <S.Anchor>
                <S.UserIcon />
                <span>About me</span>
              </S.Anchor>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/resume">
              <S.Anchor>
                <S.ResumeIcon />
                <span>Resume</span>
              </S.Anchor>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/contact">
              <S.Anchor>
                <S.ContactIcon />
                <span>Contact</span>
              </S.Anchor>
            </Link>
          </S.MenuItem>
        </S.Menu>
        <S.FooterMenu>
          <S.SocialMedia>
            <S.SocialMediaItem>
              <Link href="/">
                <S.Anchor>
                  <S.FacebookIcon />
                </S.Anchor>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="/">
                <S.Anchor>
                  <S.TwitterIcon />
                </S.Anchor>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="/">
                <S.Anchor>
                  <S.InstagramIcon />
                </S.Anchor>
              </Link>
            </S.SocialMediaItem>
            <S.SocialMediaItem>
              <Link href="/">
                <S.Anchor>
                  <S.GithubIcon />
                </S.Anchor>
              </Link>
            </S.SocialMediaItem>
          </S.SocialMedia>
          <S.Copyright>
            <p>{currentYear} © Abraão Duarte.</p>
            <span>All Right Reserved.</span>
          </S.Copyright>
        </S.FooterMenu>
      </S.MenuContent>
    </S.Header>
  )
}

export default Header

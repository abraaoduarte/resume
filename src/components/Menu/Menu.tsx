import Image from 'next/image'
import Link from 'next/link'
import * as S from './Menu.styles'
import SimpleBar from 'simplebar-react'
import { useRouter } from 'next/router'

type MenuProps = {
  isOpen: boolean
}

const Menu: React.FC<MenuProps> = ({ isOpen }) => {
  const date = new Date()
  const currentYear = date.getFullYear()
  const router = useRouter()

  return (
    <S.Navigation isOpen={isOpen}>
      <SimpleBar forceVisible="y" autoHide={true} style={{ maxHeight: '100%' }}>
        <S.ContentNavigation>
          <S.ImageContainer>
            <Image
              alt="Abraão Duarte"
              title="Avatar do Abraão Duarte"
              src="/img/avatar.jpeg"
              layout="responsive"
              height={200}
              width={200}
            />
            <S.TextInsideMenu>Abraão Duarte</S.TextInsideMenu>
          </S.ImageContainer>
          <S.Menu role="navigation" aria-label="menu">
            <S.MenuItem>
              <Link href="/" passHref>
                <S.MenuLink className={router.pathname === '/' ? 'active' : ''}>
                  <S.HomeIcon />
                  <S.MenuText>Home</S.MenuText>
                </S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href="/about" passHref>
                <S.MenuLink
                  className={router.pathname === '/about' ? 'active' : ''}
                >
                  <S.UserIcon />
                  <S.MenuText>About me</S.MenuText>
                </S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href="/resume" passHref>
                <S.MenuLink
                  className={router.pathname === '/resume' ? 'active' : ''}
                >
                  <S.ResumeIcon />
                  <S.MenuText>Resume</S.MenuText>
                </S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href="/blog" passHref>
                <S.MenuLink
                  className={router.pathname === '/blog' ? 'active' : ''}
                >
                  <S.BlogIcon />
                  <S.MenuText>Blog</S.MenuText>
                </S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link href="/contact" passHref>
                <S.MenuLink
                  className={router.pathname === '/contact' ? 'active' : ''}
                >
                  <S.ContactIcon />
                  <S.MenuText>Contact</S.MenuText>
                </S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.Menu>
          <S.ContentSocialMedia>
            <S.SocialMedia>
              <S.SocialMediaItem>
                <Link
                  href="https://www.linkedin.com/in/abra%C3%A3o-duarte/"
                  passHref
                >
                  <S.SocialMediaLink target="_blank">
                    <S.LinkedinIcon />
                  </S.SocialMediaLink>
                </Link>
              </S.SocialMediaItem>
              <S.SocialMediaItem>
                <Link href="https://twitter.com/AbraaoNDuarte" passHref>
                  <S.SocialMediaLink target="_blank">
                    <S.TwitterIcon />
                  </S.SocialMediaLink>
                </Link>
              </S.SocialMediaItem>
              <S.SocialMediaItem>
                <Link href="https://www.instagram.com/abraaoduarte/" passHref>
                  <S.SocialMediaLink target="_blank">
                    <S.InstagramIcon />
                  </S.SocialMediaLink>
                </Link>
              </S.SocialMediaItem>
              <S.SocialMediaItem>
                <Link href="https://github.com/abraaoduarte" passHref>
                  <S.SocialMediaLink target="_blank">
                    <S.GithubIcon />
                  </S.SocialMediaLink>
                </Link>
              </S.SocialMediaItem>
            </S.SocialMedia>
            <S.Copyright>
              <span>{currentYear} © Abraão Duarte.</span>
              <span>All Right Reserved.</span>
            </S.Copyright>
          </S.ContentSocialMedia>
        </S.ContentNavigation>
      </SimpleBar>
    </S.Navigation>
  )
}

export default Menu

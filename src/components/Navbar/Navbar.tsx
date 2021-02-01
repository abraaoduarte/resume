import * as S from './Navbar.styles'

type NavbarProps = {
  title: string
}

const Navbar = ({ title }: NavbarProps): React.ReactElement => {
  return (
    <S.NavContent>
      <S.LogoContent>
        <S.Logo>{title}</S.Logo>
      </S.LogoContent>
      <S.ButtonToggleMenu>
        <S.MenuIcon />
      </S.ButtonToggleMenu>
    </S.NavContent>
  )
}

export default Navbar

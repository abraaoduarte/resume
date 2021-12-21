import * as S from './Navbar.styles'

type NavbarProps = {
  title: string
  onOpenMenu: () => void
}

const Navbar = ({ title, onOpenMenu }: NavbarProps): React.ReactElement => {
  return (
    <S.NavContent role="header">
      <S.LogoContent>
        <S.Logo>{title}</S.Logo>
      </S.LogoContent>
      <S.ButtonToggleMenu
        role="button"
        aria-label="abre o menu"
        onClick={onOpenMenu}
      >
        <S.MenuIcon aria-hidden="false" />
      </S.ButtonToggleMenu>
    </S.NavContent>
  )
}

export default Navbar

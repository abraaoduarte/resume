import { useState, useEffect } from 'react'
import * as S from './Header.styles'

const Header = (): React.ReactElement => {
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }
  return (
    <S.Header>
      <S.Content>
        <S.Name>Abraão Duarte</S.Name>
        <S.MenuButton onClick={handleClick}>
          <S.MenuIcon />
        </S.MenuButton>
      </S.Content>
      <S.MenuContent isOpen={isOpen}>asdasdas</S.MenuContent>
    </S.Header>
  )
}

export default Header

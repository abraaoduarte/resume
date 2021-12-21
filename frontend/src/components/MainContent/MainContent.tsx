import * as S from './MainContent.styles'

type MainContent = {
  children: React.ReactNode
}

const MainContent: React.FC<MainContent> = ({ children }) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  )
}

export default MainContent

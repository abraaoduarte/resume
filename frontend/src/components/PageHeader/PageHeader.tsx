import Heading from 'components/Heading'
import * as S from './PageHeader.styles'

type PageHeaderProps = {
  title: string
  icon: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon }) => (
  <S.Content>
    <Heading title={title} />
    <S.IconContent>{icon}</S.IconContent>
  </S.Content>
)

export default PageHeader

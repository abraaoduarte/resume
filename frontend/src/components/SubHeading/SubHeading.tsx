import * as S from './SubHeading.styles'

type SubHeadingProps = {
  title: string
}

const SubHeading: React.FC<SubHeadingProps> = ({ title }) => (
  <S.SubHeading>{title}</S.SubHeading>
)

export default SubHeading

import * as S from './Heading.styles'

type HeadingProps = {
  title: string
}

const Heading: React.FC<HeadingProps> = ({ title }) => (
  <S.Heading>{title}</S.Heading>
)

export default Heading

import Base from 'templates/Base'
import * as S from './Home.styles'

const About: React.FC = () => {
  return (
    <Base>
      <S.Banner>
        <S.BannerContent>
          <S.Heading>
            Abraão <span>Duarte</span>
          </S.Heading>
          <span>I am christian and work with development</span>
        </S.BannerContent>
      </S.Banner>
    </Base>
  )
}
export default About

import Base from 'templates/Base'
import PageHeader from 'components/PageHeader'
import { Person } from 'styles/Icons'
import * as S from './About.styles'
import SubHeading from 'components/SubHeading'

const About: React.FC = () => {
  return (
    <Base>
      <PageHeader title="About me." icon={<Person />} />
      <S.Container>
        <S.MainContent>
          <S.Title>Software Developer</S.Title>
          <S.Text>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </S.Text>
          <S.Text>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </S.Text>
        </S.MainContent>
        <S.PersonalInfoContent>
          <S.Title>Personal Information</S.Title>
          <S.PersonalInfoList>
            <S.PersonalInfoItem>
              <S.PersonalInfoText subTitle>Name</S.PersonalInfoText>
              <S.PersonalInfoText>Abraão Duarte</S.PersonalInfoText>
            </S.PersonalInfoItem>
            <S.PersonalInfoItem>
              <S.PersonalInfoText subTitle>Age</S.PersonalInfoText>
              <S.PersonalInfoText>29</S.PersonalInfoText>
            </S.PersonalInfoItem>
            <S.PersonalInfoItem>
              <S.PersonalInfoText subTitle>Residence</S.PersonalInfoText>
              <S.PersonalInfoText>Franca/SP, Brazil</S.PersonalInfoText>
            </S.PersonalInfoItem>
            <S.PersonalInfoItem>
              <S.PersonalInfoText subTitle>Email</S.PersonalInfoText>
              <S.PersonalInfoText>abraao.n.duarte@gmail.com</S.PersonalInfoText>
            </S.PersonalInfoItem>
            <S.PersonalInfoItem>
              <S.PersonalInfoText subTitle>Phone</S.PersonalInfoText>
              <S.PersonalInfoText>+55 (16) 98824-5113</S.PersonalInfoText>
            </S.PersonalInfoItem>
            <S.PersonalInfoItem>
              <S.PersonalInfoText subTitle>Freelance</S.PersonalInfoText>
              <S.PersonalInfoText>Avaliable</S.PersonalInfoText>
            </S.PersonalInfoItem>
          </S.PersonalInfoList>
          <S.ButtonDownload>DOWNLOAD RESUME</S.ButtonDownload>
        </S.PersonalInfoContent>
        <SubHeading title="SERVICES" />
      </S.Container>
    </Base>
  )
}
export default About

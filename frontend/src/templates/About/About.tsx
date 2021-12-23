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
            My name is Abraão I currently live in Franca / SP in Brazil, I am a
            fullstack developer and I currently work for Editora Globo that is
            part of the Globo group, but I have worked in other companies.
          </S.Text>
          <S.Text>
            In the last few years I participated in the construction of several
            projects, working as a backend, frontend and also acting in the
            final delivery of the project to the client, hosting applications on
            AWS and other platforms.
          </S.Text>
          <S.Text>
            My main stack today is Javascript (Node, Reactjs, Nextjs), but I
            have already worked with PHP and a little with python, I have
            knowledge of MySql, Postgres and MongoDB databases.
          </S.Text>
          <S.Text>
            I really like to program, and I&apos;m always studying and trying to
            apply the new things I learn to projects. My goal has always been to
            participate in the digital transformation in the companies where I
            worked and where I currently work.
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
        <S.SubHeadingContent>
          <SubHeading title="SERVICES" />
        </S.SubHeadingContent>
        <S.SectionContent>
          <S.CardServices>
            <S.BackendIcon />
            <S.CardServiceTitle>Backend</S.CardServiceTitle>
            <S.CardServiceText>
              I develop backend applications, and the whole process that it
              involves, such as integration with databases or external services,
              creation of routines and much more.
            </S.CardServiceText>
          </S.CardServices>
          <S.CardServices>
            <S.FrontEndIcon />
            <S.CardServiceTitle>Frontend</S.CardServiceTitle>
            <S.CardServiceText>
              I develop frontend applications, from creating the layout with
              HTML and CSS to integrating with the backend communicating via
              API.
            </S.CardServiceText>
          </S.CardServices>
          <S.CardServices>
            <S.CloudIcon />
            <S.CardServiceTitle>Deploy</S.CardServiceTitle>
            <S.CardServiceText>
              I do the job of hosting application in the cloud through services
              like AWS, Google Cloud and other platforms.
            </S.CardServiceText>
          </S.CardServices>
        </S.SectionContent>
      </S.Container>
    </Base>
  )
}
export default About

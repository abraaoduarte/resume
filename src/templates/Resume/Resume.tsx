import Base from 'templates/Base'
import PageHeader from 'components/PageHeader'
import { FileEarmarkPersonFill } from 'styles/Icons'
import SubHeading from 'components/SubHeading'
import * as S from './Resume.styles'

const Resume: React.FC = () => (
  <Base>
    <PageHeader title="Resume." icon={<FileEarmarkPersonFill />} />
    <S.Container>
      <S.Content>
        <SubHeading title="Experience" />
        <S.Timeline>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>Software Developer</S.TimelineTitle>
            <S.TimelineSubTitle>Editora Globo</S.TimelineSubTitle>
            <S.TimelineText>
              Work on maintenance and evolution of existing systems in Node and
              Python.
              <br /> I worked on creating routines for data migration using
              Python and currently work on building a frontend application using
              React and Nextjs.
            </S.TimelineText>
            <S.YearInfo>
              <S.YearTo>Actual</S.YearTo>
              <S.YearFrom>2019</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>Software Developer</S.TimelineTitle>
            <S.TimelineSubTitle>Mazza FC</S.TimelineSubTitle>
            <S.TimelineText>
              I worked on systems evolution with PHP and MySql, and also
              creating MySql procerures for data migration. <br />I worked on
              building systems using Node and React and Postgres, MySql and
              MongoDB, and also a little in the maintenance of mobile
              applications in React Native.
            </S.TimelineText>
            <S.YearInfo>
              <S.YearTo>2019</S.YearTo>
              <S.YearFrom>2018</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>Software Developer</S.TimelineTitle>
            <S.TimelineSubTitle>Flag Brasil</S.TimelineSubTitle>
            <S.TimelineText>
              My first job as a developer, I worked on creating websites and
              systems using HTML, CSS, PHP and MySql technologies. <br />I
              worked on the maintenance and evolution of existing systems.
            </S.TimelineText>
            <S.YearInfo>
              <S.YearTo>2018</S.YearTo>
              <S.YearFrom>2014</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>Administrative Assistant</S.TimelineTitle>
            <S.TimelineSubTitle>SMB Estacionamento</S.TimelineSubTitle>
            <S.TimelineText>
              I worked in public attendance and also in performing
              administrative services in general, such as bill payment, auditing
              of values and others.
            </S.TimelineText>
            <S.YearInfo>
              <S.YearTo>2014</S.YearTo>
              <S.YearFrom>2010</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
        </S.Timeline>
      </S.Content>
      <S.Content>
        <SubHeading title="Education" />
        <S.Timeline>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>B.S in Information System</S.TimelineTitle>
            <S.TimelineSubTitle>UNIFRAN</S.TimelineSubTitle>
            <S.YearInfo>
              <S.YearTo>2014</S.YearTo>
              <S.YearFrom>2011</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>TECHNICAL IN ADMINISTRATION</S.TimelineTitle>
            <S.TimelineSubTitle>Etec dr. Júlio Cardoso</S.TimelineSubTitle>
            <S.YearInfo>
              <S.YearTo>2010</S.YearTo>
              <S.YearFrom>2009</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
          <S.TimelineItem>
            <S.LineLeft />
            <S.TimelineTitle>high school degree</S.TimelineTitle>
            <S.TimelineSubTitle>EE Torquato Caleiro</S.TimelineSubTitle>
            <S.YearInfo>
              <S.YearTo>2009</S.YearTo>
              <S.YearFrom>2007</S.YearFrom>
            </S.YearInfo>
          </S.TimelineItem>
        </S.Timeline>
      </S.Content>

      <S.Content>
        <SubHeading title="CODING SKILLS" />
      </S.Content>
    </S.Container>
  </Base>
)

export default Resume

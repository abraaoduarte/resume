import styled from 'styled-components'
import PageHeader from 'components/PageHeader'
import { AddressCard } from 'styles/Icons'

const Wrapper = styled.div`
  background-color: #2c2d2f;
  padding: 32px;
  @media screen and (min-width: 767px) {
    margin-left: 200px;
  }
`
const PageHeading = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
`

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1em;
  text-transform: capitalize;
  color: #00a3e1;
  position: relative;
  display: inline-block;
`
const SubHeadingContent = styled.div`
  position: relative;
  margin-bottom: 50px;
  text-align: center;
`
const SubHeading = styled.h3`
  border-color: #00a3e1 !important;
  display: inline-block;
  font-size: 22px;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.5px;
  position: relative;
  text-transform: uppercase;
  padding: 5px 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 5px;
    background-color: rgba(255, 255, 255, 0.6);
    bottom: 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ContentExperience = styled.div`
  flex: 0 0 100%;
  width: 100%;
  @media screen and (min-width: 767px) {
    flex: 0 0 50%;
    width: 50%;
  }
`
const ContentEducation = styled.div`
  flex: 0 0 100%;
  width: 100%;
  @media screen and (min-width: 767px) {
    flex: 0 0 50%;
    width: 50%;
  }
`

const Experience = styled.ul`
  padding: 0;
  margin: 20px 0 50px;
  list-style: none;
  position: relative;
  width: 100%;
  @media screen and (min-width: 767px) {
    padding-left: 30px;
  }
`
const ExperienceItem = styled.li`
  position: relative;
  margin-left: 10px;
  padding: 20px;
  margin-bottom: 50px;
`
const LineLeft = styled.span`
  width: 2px;
  height: 100%;
  left: -10px;
  top: 0;
  position: absolute;
  background-color: #00a3e1;
  &::before {
    box-sizing: border-box;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #00a3e1;
    position: absolute;
    left: -4px;
    top: -10px;
  }
  &::after {
    box-sizing: border-box;
    content: '';
    top: 100%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #00a3e1;
    position: absolute;
    left: -4px;
  }
`
const ExperienceItemContent = styled.div`
  margin-left: 10px;
  h4 {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 26px;
    margin: 0;
    text-transform: uppercase;
  }
  h5 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #00a3e1;
  }
  p {
    font-size: 16px;
    margin-bottom: 0px;
    line-height: 1.65;
  }
`
const YearInfo = styled.span`
  left: 42px;
  height: 100%;
  position: absolute;
  top: 0;
  .to {
    transform: translateX(-120%);
    color: #fff;
    position: absolute;
    top: -18px;
  }
  .from {
    transform: translateX(-120%);
    color: #fff;
    position: absolute;
    bottom: -18px;
  }
  @media screen and (min-width: 767px) {
    left: -10px;
  }
`

const Home: React.FC = () => {
  return (
    <Wrapper>
      <PageHeader title="My Resume." icon={<AddressCard />} />
      <Content>
        <ContentExperience>
          <SubHeadingContent>
            <SubHeading>Experience</SubHeading>
          </SubHeadingContent>
          <Experience>
            <ExperienceItem>
              <LineLeft />
              <ExperienceItemContent>
                <h4>Lead UI Designer</h4>
                <h5>Big Design Company, NY, USA</h5>
                <p>
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </p>
              </ExperienceItemContent>
              <YearInfo>
                <span className="to">2018</span>
                <span className="from">2016</span>
              </YearInfo>
            </ExperienceItem>
            <ExperienceItem>
              <LineLeft />
              <ExperienceItemContent>
                <h4>Lead UI Designer</h4>
                <h5>Big Design Company, NY, USA</h5>
                <p>
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </p>
              </ExperienceItemContent>
              <YearInfo>
                <span className="to">2018</span>
                <span className="from">2016</span>
              </YearInfo>
            </ExperienceItem>
          </Experience>
        </ContentExperience>
        <ContentEducation>
          <SubHeadingContent>
            <SubHeading>Education</SubHeading>
          </SubHeadingContent>
          <Experience>
            <ExperienceItem>
              <LineLeft />
              <ExperienceItemContent>
                <h4>Lead UI Designer</h4>
                <h5>Big Design Company, NY, USA</h5>
                <p>
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </p>
              </ExperienceItemContent>
              <YearInfo>
                <span className="to">2018</span>
                <span className="from">2016</span>
              </YearInfo>
            </ExperienceItem>
            <ExperienceItem>
              <LineLeft />
              <ExperienceItemContent>
                <h4>Lead UI Designer</h4>
                <h5>Big Design Company, NY, USA</h5>
                <p>
                  Sit cupiditate praesentium ex esse nulla Facere fuga
                  perspiciatis eveniet provident neque Ea ratione non minus
                  temporibus ipsum Sunt minima
                </p>
              </ExperienceItemContent>
              <YearInfo>
                <span className="to">2018</span>
                <span className="from">2016</span>
              </YearInfo>
            </ExperienceItem>
          </Experience>
        </ContentEducation>
      </Content>
    </Wrapper>
  )
}

export default Home

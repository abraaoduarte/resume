import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #2c2d2f;
  margin-left: 200px;
  padding: 32px;
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
  flex: 0 0 50%;
  max-width: 50%;
`
const ContentEducation = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
`

const Home: React.FC = () => {
  return (
    <Wrapper>
      <PageHeading>
        <Heading>My resume.</Heading>
      </PageHeading>
      <Content>
        <ContentExperience>
          <SubHeadingContent>
            <SubHeading>Experience</SubHeading>
          </SubHeadingContent>
        </ContentExperience>
        <ContentEducation>
          <SubHeadingContent>
            <SubHeading>Education</SubHeading>
          </SubHeadingContent>
        </ContentEducation>
      </Content>
    </Wrapper>
  )
}

export default Home

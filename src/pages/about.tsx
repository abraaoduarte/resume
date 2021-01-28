import styled from 'styled-components'
import { Person } from 'styles/Icons'
import PageHeader from 'components/PageHeader'

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

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContentExperience = styled.div`
  flex: 0 0 100%;
  width: 100%;
  @media screen and (min-width: 767px) {
    flex: 0 0 70%;
    width: 70%;
  }
`
const ContentEducation = styled.div`
  flex: 0 0 100%;
  width: 100%;
  @media screen and (min-width: 767px) {
    flex: 0 0 30%;
    width: 30%;
  }
  ul {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  li {
    width: 100%;
    line-height: 1em;
    margin-bottom: 15px;
    display: inline-block;
    position: relative;
    margin: 0 5px;
    padding: 0 5px;
    .title {
      font-family: 'Playfair Display', serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.5px;
      border-bottom: 2px solid #fff;
      position: relative;
      display: inline-block;
      margin-right: 15px;
      padding-bottom: 1px;
      color: #fff;
      border-color: #00a3e1 !important;
    }
  }
  .btn-main {
    position: relative;
    border: 2px solid #fff;
    padding: 10px 20px;
    text-transform: uppercase;
    background-color: transparent;
    border-color: #00a3e1 !important;
    color: #00a3e1;
    margin-top: 30px;
  }
`
const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
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
  text-align: center;
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

const SubHeadingContent = styled.div`
  position: relative;
  margin-top: 50px;
  text-align: center;
  width: 100%;
`

const Item = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  p {
    font-size: 14.5px;
    line-height: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  h4 {
    font-size: 18px;
    font-weight: 600;
  }
`

const About: React.FC = () => {
  return (
    <Wrapper>
      <PageHeader title="About me." icon={<Person />} />
      <Content>
        <ContentExperience>
          <Title>Software Developer</Title>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
          <p>
            Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis
            unde aliquid excepturi laudantium? Illo architecto aliquam velit
            illo magnam neque perferendis sint Incidunt eius ipsa inventore
            labore eos velit. Minus hic magni reiciendis necessitatibus ex
            Quidem officia deleniti accusamus obcaecati dolores. Porro culpa
            quibusdam impedit porro praesentium excepturi. Alias ab consequatur?
          </p>
        </ContentExperience>
        <ContentEducation>
          <Title>Personal Information</Title>
          <ul>
            <li>
              <span className="title">Name</span>
              <span className="value">Philip Watson</span>
            </li>
            <li>
              <span className="title">Age</span>
              <span className="value">26 Years</span>
            </li>
            <li>
              <span className="title">Residence</span>
              <span className="value">New York, USA</span>
            </li>
            <li>
              <span className="title">Address</span>
              <span className="value">123 Lorem Ipsum</span>
            </li>
            <li>
              <span className="title">Email</span>
              <span className="value">example@example.com</span>
            </li>
            <li>
              <span className="title">Phone</span>
              <span className="value">(+1) 123 456 7890</span>
            </li>
            <li>
              <span className="title">Freelance</span>
              <span className="value">Available</span>
            </li>
          </ul>
          <div className="resume-button mt-30">
            <a className="btn-main" href="#">
              Download Resume
            </a>
          </div>
        </ContentEducation>
        <SubHeadingContent>
          <SubHeading>Experience</SubHeading>
        </SubHeadingContent>
        <Item>
          <h4>Web Development</h4>
          <p>
            Amet aspernatur delectus maxime ducimus similique Ratione asperiores
            corporis provident aut libero.
          </p>
        </Item>
      </Content>
    </Wrapper>
  )
}

export default About

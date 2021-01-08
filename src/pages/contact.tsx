import styled from 'styled-components'

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

const About: React.FC = () => {
  return (
    <Wrapper>
      <PageHeading>
        <Heading>Contact Me.</Heading>
      </PageHeading>
      <Content>
        <SubHeadingContent>
          <SubHeading>LET'S TALK</SubHeading>
        </SubHeadingContent>
        <form id="contact-form" method="post" action="mail.php">
          <div className="row">
            <div className="col-md-6 mb-50">
              <span className="input">
                <input
                  className="input__field cf-validate"
                  type="text"
                  id="cf-name"
                  name="name"
                />
                <label className="input__label">Name</label>
              </span>
            </div>

            <div className="col-md-6 mb-50">
              <span className="input">
                <input
                  className="input__field cf-validate"
                  type="text"
                  id="cf-email"
                  name="email"
                />
                <label className="input__label" htmlFor="cf-email">
                  Email
                </label>
              </span>
            </div>

            <div className="col-md-12 mb-30">
              <span className="input">
                <textarea
                  className="input__field cf-validate"
                  id="cf-message"
                  name="message"
                  rows="5"
                ></textarea>
                <label className="input__label">How can we help you?</label>
              </span>
            </div>

            <div className="alert-container col-md-12"></div>

            <div className="col-md-12 text-center">
              <button id="cf-submit" className="btn-main">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </Content>
    </Wrapper>
  )
}

export default About

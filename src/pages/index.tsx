import styled from 'styled-components'

const Banner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(img/background.jpg);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #2c2d2f;
  overflow-y: hidden !important;
  box-sizing: border-box !important;
  min-height: 100% !important;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #181818;
    opacity: 0.5;
  }
`

const BannerContent = styled.div`
  color: #fff;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  display: block;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 62px;
  font-weight: 500;
  color: #fff;
  > span {
    color: #00a3e1;
  }
`

const Home: React.FC = () => {
  return (
    <Banner>
      <BannerContent>
        <Heading>
          Abraão <span>Duarte</span>
        </Heading>
      </BannerContent>
    </Banner>
  )
}

export default Home

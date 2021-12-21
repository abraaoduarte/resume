import { AboutTemplate } from 'templates/About'
import Head from 'next/head'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Abraão Duarte | About me</title>
      </Head>
      <AboutTemplate />
    </>
  )
}
export default About

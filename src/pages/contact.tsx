import { ContactTemplate } from 'templates/Contact'
import Head from 'next/head'

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Abraão Duarte | Contact</title>
      </Head>
      <ContactTemplate />
    </>
  )
}
export default Resume

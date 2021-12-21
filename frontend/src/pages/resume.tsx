import { ResumeTemplate } from 'templates/Resume'
import Head from 'next/head'

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Abraão Duarte | Resume</title>
      </Head>
      <ResumeTemplate />
    </>
  )
}
export default Resume

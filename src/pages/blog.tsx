import { BlogTemplate } from 'templates/Blog'
import Head from 'next/head'

const Resume: React.FC = () => {
  return (
    <>
      <Head>
        <title>Abraão Duarte | Blog</title>
      </Head>
      <BlogTemplate />
    </>
  )
}
export default Resume

import Head from 'next/head';
import { ResumeTemplate } from 'templates/Resume';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <ResumeTemplate />
    </div>
  );
}

import Head from 'next/head';
import { AboutTemplate } from 'templates/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <AboutTemplate />
    </div>
  );
}

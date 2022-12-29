import Head from 'next/head';
import { HomeTemplate } from 'templates/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <HomeTemplate />
    </div>
  );
}

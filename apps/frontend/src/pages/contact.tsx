import Head from 'next/head';
import { ContactTemplate } from 'templates/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactTemplate />
    </div>
  );
}

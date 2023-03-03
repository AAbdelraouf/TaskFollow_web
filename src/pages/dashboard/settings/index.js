import Head from 'next/head';
import Settings from '@/layouts/Settings';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <Settings />
    </>
  );
};

export default Page;
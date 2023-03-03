import Head from 'next/head';
import Dashboard from '@/layouts/Dashboard';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <Dashboard />
    </>
  );
};

export default Page;

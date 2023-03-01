import Head from 'next/head';
import SignUp from '@/layouts/Dashboard';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <SignUp />
    </>
  );
};

export default Page;

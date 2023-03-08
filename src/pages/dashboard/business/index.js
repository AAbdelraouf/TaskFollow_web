import Head from 'next/head';
import Dashboard from '@/layouts/Dashboard';
import AuthBusiness from '@/hoc/AuthBusiness';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <AuthBusiness>
        <Dashboard />
      </AuthBusiness>
    </>
  );
};

export default Page;

import Head from 'next/head';
import Dashboard from '@/layouts/Dashboard';
import AuthBusiness from '@/hoc/AuthBusiness';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <AuthBusiness>
        <Dashboard />
      </AuthBusiness>
    </>
  );
};

export default Page;

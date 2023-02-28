import Head from 'next/head';
import SignUp from '@/layouts/Home/SignUp';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager SignUp</title>
      </Head>
      <SignUp />
    </>
  );
};

export default Page;

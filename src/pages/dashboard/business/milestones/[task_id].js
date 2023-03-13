import Head from 'next/head';
import Milestones from '@/layouts/Milestones';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <Milestones />
    </>
  );
};

export default Page;

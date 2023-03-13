import Head from 'next/head';
import SharedTasks from '@/layouts/Shared-Tasks';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <SharedTasks />
    </>
  );
};

export default Page;

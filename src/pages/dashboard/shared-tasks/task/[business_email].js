import Head from 'next/head';
import SharedTaskList from '@/layouts/SharedTaskList';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <SharedTaskList />
    </>
  );
};

export default Page;

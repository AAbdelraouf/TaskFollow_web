import Head from 'next/head';
import TaskList from '@/layouts/Dashboard/TaskList';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <TaskList />
    </>
  );
};

export default Page;

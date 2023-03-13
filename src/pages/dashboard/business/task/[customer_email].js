import Head from 'next/head';
import TaskList from '@/layouts/TaskList';
import AuthBusiness from '@/hoc/AuthBusiness';

const Page = () => {
  return (
    <>
      <Head>
        <meta name="prism.publicationDate" content="meta data placeholder" />
        <title>TaskFollow | Your Task Manager Dashboard</title>
      </Head>
      <AuthBusiness>
        <TaskList />
      </AuthBusiness>
    </>
  );
};

export default Page;

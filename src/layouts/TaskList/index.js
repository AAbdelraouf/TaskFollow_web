import React, { useEffect, useState } from 'react';
import { Container } from '@/components';
import Body from './Body';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '@/redux/action';
import API from '@/api';

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const statusList = ['Assigned', 'In Progress', 'Completed', 'On Hold'];
  const priorityList = ['Low', 'Medium', 'High'];
  const { customer_email } = router.query;
  const [taskList, setTaskList] = useState([]);
  const [addNewTaskModalVisibility, setAddNewTaskModalVisibility] = useState(false);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = () => {
    dispatch(loadingStart());
    API.business
      .GetTasks({ customer_email: customer_email })
      .then((response) => {
        setTaskList(response);
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    taskList,
    addNewTaskModalVisibility,
    setAddNewTaskModalVisibility,
    statusList,
    priorityList
  };

  return (
    <div>
      <Container>
        <Body {..._this} />
      </Container>
    </div>
  );
};

export default Index;

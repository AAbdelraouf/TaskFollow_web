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
  const task_id = router.query.task_id;

  const [taskDetails, setTaskDetails] = useState({});
  // console.log(taskDetails);
  useEffect(() => {
    if (task_id !== '') {
      getTaskDetails();
    }
  }, [task_id]);

  const getTaskDetails = () => {
    dispatch(loadingStart());
    API.task
      .GetTaskDetails({ task_id: task_id })
      .then((response) => {
        if (response) {
          setTaskDetails(response);
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const _this = {
    taskDetails
  };
  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Index;

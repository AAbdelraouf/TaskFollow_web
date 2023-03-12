import React, { useState, useEffect } from 'react';
import { Container } from '@/components';
import Body from './Body';

const SharedTasks = () => {
  const [sharedTasksList, setSharedTasksList] = useState([]);

  useEffect(() => {
    const sharedtasks = [
      {
        name: 'Test 1',
        email: 'test1@gmail.com',
        tasks: 0
      },
      ,
      {
        name: 'Test 2',
        email: 'test1@gmail.com',
        tasks: 0
      }
    ];

    setSharedTasksList(sharedtasks);
  }, []);

  const _this = {
    sharedTasksList
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default SharedTasks;

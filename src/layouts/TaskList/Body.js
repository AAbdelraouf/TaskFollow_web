import React from 'react';
import AddNewTask from './AddNewTask';
import TaskList from './TaskList';

const Body = (_this) => {
  return (
    <>
      <TaskList {..._this} />
      <AddNewTask {..._this} />
    </>
  );
};

export default Body;

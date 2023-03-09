import React from 'react';
import AddNewTask from './AddNewTask';
import DeleteTaskModal from './DeleteTaskModal';
import EditTaskModal from './EditTaskModal';
import RemovePrimaryWatcherModal from './RemovePrimaryWatcherModal';
import TaskList from './TaskList';

const Body = (_this) => {
  return (
    <>
      <TaskList {..._this} />
      <AddNewTask {..._this} />
      <DeleteTaskModal {..._this} />
      <EditTaskModal {..._this} />
      <RemovePrimaryWatcherModal {..._this} />
    </>
  );
};

export default Body;
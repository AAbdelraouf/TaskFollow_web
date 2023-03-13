import React from 'react';
import AddNewTask from './AddNewTask';
import DeleteTaskModal from './DeleteTaskModal';
import EditTaskModal from './EditTaskModal';
import RemoveAssociatedWatcherModal from './RemoveAssociatedWatcherModal';
import RemovePrimaryWatcherModal from './RemovePrimaryWatcherModal';
import TaskList from './TaskList';

const Body = (_this) => {
  return (
    <>
      <TaskList {..._this} />
      <EditTaskModal {..._this} />
      <AddNewTask {..._this} />
      <DeleteTaskModal {..._this} />
      <RemovePrimaryWatcherModal {..._this} />
      <RemoveAssociatedWatcherModal {..._this} />
    </>
  );
};

export default Body;

import React from 'react';
import { Card, Progress, Space, Tooltip, Button } from 'antd';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import styles from '@/styles/Task.module.css';

const TaskList = (_this) => {
  return (
    <>
      <Card
        title={`Tasks(${_this.taskList.length})`}
        className="bg-background text-gray-500 tracking-wider flex flex-col flex-wrap justify-start w-full"
      >
        <div className="flex flex-wrap flex-col sm:flex-row justify-evenly gap-10 items-center">
          {_this.taskList?.map((task) => {
            const expected_start_date = new Date(task.expected_start_date);
            const due_date = new Date(task.due_date);
            // console.log(task);
            return (
              <Card
                key={task._id}
                className={`bg-background shadow-md hover:shadow-lg min-h-36 border border-l-8 border-green-600 overflow-visible w-full md:w-72 ${
                  task.priority === 'low'
                    ? `border-txtLow `
                    : task.priority === 'medium'
                    ? `border-txtMedium`
                    : ` border-txtHigh`
                } `}
                bordered={false}
                actions={[
                  <Tooltip placement="topLeft" title="Edit Task" key="edit-task">
                    <MdEditNote
                      size={25}
                      key="edit"
                      className="w-full p-0 flex justify-center items-center text-grayDark"
                      onClick={() => {
                        _this.setEditTaskModalVisibility(true);
                        _this.setEditTaskData((prev) => ({
                          ...prev,
                          task_id: task._id,
                          update_obj: {
                            title: task.title,
                            description: task.description,
                            customer_email: task.customer_email,
                            assignees: task.assignees,
                            status: task.status,
                            due_date: task.due_date.toString().split('T').slice(0, 1).join(' '),
                            expected_start_date: task.expected_start_date
                              .toString()
                              .split('T')
                              .slice(0, 1)
                              .join(' '),
                            priority: task.priority
                          },
                          watchers: task.watchers
                        }));
                      }}
                    />
                  </Tooltip>,
                  <Tooltip placement="topRight" title="Delete Task" key="delete-task">
                    <MdDeleteForever
                      onClick={() => {
                        _this.setDeleteTaskModalVisibility(true);
                        _this.setDeleteTaskData((prev) => ({
                          ...prev,
                          title: task.title,
                          id: task._id
                        }));
                      }}
                      size={25}
                      className="w-full p-0 flex justify-center items-center text-secondary"
                    />
                  </Tooltip>
                ]}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-start items-start gap-1">
                      <div className=" text-primary flex justify-between items-start w-full font-semibold">
                        {task.title}
                      </div>
                      <div
                        className={`text-xs py-1 px-4 font-bold mt-0 text-green-600 bg-completed flex justify-center items-center rounded-md ${
                          task.priority === 'low'
                            ? `text-txtLow bg-low`
                            : task.priority === 'medium'
                            ? `text-txtMedium bg-medium`
                            : ` text-txtHigh bg-high`
                        }`}
                      >
                        {task.priority}
                      </div>
                    </div>
                    <div className="font-normal text-grayDark max-w-[180px] sm:max-w-full leading-tight">
                      {task.description}
                    </div>
                    <div className="flex justify-start items-start gap-1 mt-4">
                      <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                        Expected Start Date:
                      </div>
                      <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                        {expected_start_date.toDateString().split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                    <div className="flex justify-start items-start gap-1 mb-2">
                      <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                        Due Date:
                      </div>
                      <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                        {due_date.toDateString().split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                    <hr className="w-full border-grayDark mb-2" />
                    <div className="flex justify-between items-center">
                      <div className=" flex flex-col items-between gap-1 mt-2">
                        <div className="flex justify-start items-start gap-1">
                          <div className=" text-xs text-grayDark w-full font-semibold">
                            Milestones:
                          </div>
                          <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                            {task.milestone_count}
                          </p>
                        </div>
                        <div className="flex justify-start items-start gap-1">
                          <div className="text-xs text-grayDark w-full font-semibold">
                            Watchers:
                          </div>
                          <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                            {task.watchers.length}
                          </p>
                        </div>
                      </div>

                      <Space size={50}>
                        <Progress
                          className="font-semibold text-grayMedium"
                          size="small"
                          percent={
                            task.progress.toString().includes('.')
                              ? task.progress.toFixed(1)
                              : task.progress
                          }
                          status="active"
                          type="dashboard"
                        />
                      </Space>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div
          onClick={() => _this.setAddNewTaskModalVisibility(true)}
          className={`${styles.create_task} fixed bottom-12 right-12 rounded-full bg-white h-[49px] w-[49px]`}
        >
          <FaPlusCircle
            size={50}
            className="text-secondary cursor-pointer rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </Card>
    </>
  );
};

export default TaskList;

import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Card, Progress, Space, Tooltip, Button } from 'antd';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import styles from '@/styles/Task.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
dayjs.locale('en');

const Body = (_this) => {
  const due_date = dayjs(_this.taskDetails.due_date);
  let now = dayjs(new Date());
  const difference = due_date.diff(now, 'days');

  const TooltipText = (
    <div className="flex flex-col p-4 w-72">
      <div className="flex justify-between items-center">
        <p>Title:</p>
        <p> {_this.taskDetails?.title}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Description:</p>
        <p> {_this.taskDetails?.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Created At:</p>
        <p>{dayjs(_this.taskDetails?.createdAt).format('YYYY-MM-DD')}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Priority:</p>
        <p> {_this.taskDetails?.priority}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Status:</p>
        <p> {_this.taskDetails?.status}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="mr-10">customer_email:</p>
        <p> {_this.taskDetails?.customer_email}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Expected Start Date:</p>
        <p>{dayjs(_this.taskDetails?.expected_start_date).format('YYYY-MM-DD')}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Due Date:</p>
        <p>{dayjs(_this.taskDetails?.due_date).format('YYYY-MM-DD')}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="mr-10">Assignees:</p>
        <p>{_this.taskDetails?.assignees}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Watchers:</p>
        {_this.taskDetails?.watchers.map((item) => {
          return <p key={item._id}>{item.watcher}</p>;
        })}
      </div>
    </div>
  );
  return (
    <>
      <div className="max-w-full bg-primary p-4 pb-2">
        <div className="flex justify-between items-center mb-4">
          <span className="invisible">.</span>
          <p className="font-semibold text-white text-lg">{_this.taskDetails.title}</p>
          <Tooltip placement="left" title={TooltipText} overlayStyle={{ minWidth: '1000px' }}>
            <BsInfoCircleFill
              size={30}
              className="text-secondary shadow-lg cursor-pointer rounded-full"
            />
          </Tooltip>
        </div>
        <div className="flex justify-between sm:justify-evenly items-center">
          <div
            className={`text-xs py-1 px-4 font-bold mt-0  flex justify-center items-center rounded-md ${
              _this.taskDetails.priority === 'low'
                ? `text-txtLow bg-low`
                : _this.taskDetails.priority === 'medium'
                ? `text-txtMedium bg-medium`
                : ` text-txtHigh bg-high`
            }`}
          >
            #{_this.taskDetails.priority}
          </div>

          <Space size={20}>
            <Progress
              className="font-semibold text-grayMedium ml-2"
              size="small"
              strokeColor={{
                '0%': '#FFF',
                '100%': '#FFF'
              }}
              strokeWidth={10}
              percent={
                33.33
                // task.progress.toString().includes('.')
                //   ? task.progress.toFixed(1)
                //   : task.progress
              }
              status="active"
              type="dashboard"
            />
          </Space>

          <div
            className={`text-xs py-1 px-4 font-bold mt-0 flex justify-center text-white items-center rounded-md ${
              difference < 0 ? ` bg-tomato` : `bg-pending`
            }`}
          >
            {difference < 0 ? `Past Due!` : `${difference} days`}
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------Milestones Start Here------------------------------------------- */}

      <Card
        title={`Milestones(${2})`}
        className="bg-background text-gray-500 tracking-wider flex flex-col flex-wrap justify-start w-full"
      >
        {/* {_this.taskList.length === 0 ? (
          <div className="flex items-center justify-center">No Tasks available</div>
        ) : ( */}
        <div className="flex flex-wrap flex-col sm:flex-row justify-evenly gap-10 items-center">
          {/* {_this.taskList?.map((task) => {
              const expected_start_date = new Date(task.expected_start_date);
              const due_date = new Date(task.due_date); */}
          {/* return ( */}
          <Card
            className={`bg-background shadow-md hover:shadow-lg min-h-36 border border-l-8 bg-bgAssigned border-green-600 overflow-visible w-full md:w-72`}
            bordered={false}
            headStyle={{
              padding: 0,
              justifyContent: 'flex-start'
            }}
            title={
              <div className="flex items-center justify-center border bg-grayLight text-white rounded-r-lg rounded-b-none w-full">
                <Button>Assigned</Button>
                <Button>In Progress</Button>
                <Button>Completed</Button>
              </div>
            }
            actions={[
              <Tooltip placement="topLeft" title="Edit Task" key="edit-task">
                <MdEditNote
                  size={25}
                  key="edit"
                  className="w-full p-0 flex justify-center items-center text-grayDark"
                  onClick={(e) => {
                    null;
                  }}
                />
              </Tooltip>,
              <Tooltip placement="topRight" title="Delete Task" key="delete-task">
                <MdDeleteForever
                  onClick={(e) => {
                    null;
                    // e.preventDefault();
                    // _this.setDeleteTaskModalVisibility(true);
                    // _this.setDeleteTaskData((prev) => ({
                    //   ...prev,
                    //   title: task.title,
                    //   id: task._id
                    // }));
                  }}
                  size={25}
                  className="w-full p-0 flex justify-center items-center text-secondary"
                />
              </Tooltip>
            ]}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 w-full">
                <div className=" text-primary flex justify-between items-start w-full font-semibold">
                  development
                </div>

                <div className="font-normal text-grayDark w-full  leading-tight">develop it</div>
              </div>
            </div>
          </Card>
          {/* ); */}
          {/* })} */}
        </div>
        {/* )} */}
        <div
          onClick={() => null}
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

export default Body;

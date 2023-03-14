import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Card, Progress, Space, Tooltip, Button } from 'antd';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import SwitchSelector from 'react-switch-selector';
import { BsChevronCompactRight } from 'react-icons/bs';
import styles from '@/styles/Task.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import MilestoneCard from './MilestoneCard';
import EditMilestoneModal from './EditMilestoneModal';
import AddMilestoneModal from './AddMilestoneModal';
import DeleteMilestoneModal from './DeleteMilestoneModal';
import TaskDetailsModal from './TaskDetailsModal';
dayjs.locale('en');

const Body = (_this) => {
  const due_date = dayjs(_this.taskDetails.due_date);
  let now = dayjs(new Date());
  const difference = due_date.diff(now, 'days');

  return (
    <>
      {/* --------------------------------------------------------------------------Milestones Start Here------------------------------------------- */}

      <Card
        title={
          <div className="flex justify-between items-center my-2">
            <div className="flex justify-start">
              <h1 className="text-lg mr-2">Milestone - {_this.taskDetails.title}</h1>
              <Tooltip placement="top" title="Task Details">
                <BsInfoCircleFill
                  onClick={() => _this.setTaskDetailsModalVisibility(true)}
                  size={25}
                  className="text-secondary shadow-xl cursor-pointer rounded-full mt-1"
                />
              </Tooltip>
            </div>

            <Tooltip
              placement="bottomLeft"
              title={`Task Priority: ${_this.taskDetails.priority}`}
              className="hidden md:block"
            >
              <div
                className={`text-xs py-1 px-4 font-bold mt-0 shadow-lg flex justify-center items-center rounded-md ${
                  _this.taskDetails.priority === 'low'
                    ? `text-txtLow bg-low`
                    : _this.taskDetails.priority === 'medium'
                    ? `text-txtMedium bg-medium`
                    : ` text-txtHigh bg-high`
                }`}
              >
                #{_this.taskDetails.priority}
              </div>
            </Tooltip>

            <Tooltip
              placement="bottomLeft"
              title={`Number of Days Remaining from Due Date: ${difference} days`}
              className=" hidden md:block"
            >
              <div
                className={`text-xs py-1 px-4 font-bold mt-0 flex justify-center shadow-lg text-white items-center rounded-md ${
                  difference < 0 ? ` bg-tomato` : `bg-pending`
                }`}
              >
                {difference < 0 ? `Past Due!` : `${difference} days`}
              </div>
            </Tooltip>

            <Space size={20} className="hidden md:block">
              <Progress
                className="font-semibold text-grayMedium"
                size="small"
                strokeWidth={5}
                width={80}
                percent={_this.progressNumber}
                status="active"
                type="circle"
              />
            </Space>
          </div>
        }
        className="bg-background text-gray-500 tracking-wider flex flex-col flex-wrap justify-start w-full"
      >
        {_this.milestoneDetails.length === 0 ? (
          <div className="flex items-center justify-center">No Milestones available</div>
        ) : (
          <div className="flex flex-wrap flex-col sm:flex-row justify-evenly gap-10 items-center">
            {_this.milestoneDetails.map((milestone) => {
              const initialSelectedIndex = Object.keys(_this.statusList).findIndex((value) => {
                return value === milestone.status;
              });

              return (
                <MilestoneCard
                  key={milestone._id}
                  initialSelectedIndex={initialSelectedIndex}
                  milestone={milestone}
                  _this={_this}
                />
              );
            })}
          </div>
        )}
        <div
          onClick={() => _this.setAddMilestoneModalVisibility(true)}
          className={`${styles.create_task} fixed bottom-12 right-12 rounded-full bg-white h-[49px] w-[49px]`}
        >
          <FaPlusCircle
            size={50}
            className="text-secondary cursor-pointer rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </Card>
      <AddMilestoneModal {..._this} />
      <EditMilestoneModal {..._this} />
      <DeleteMilestoneModal {..._this} />
      <TaskDetailsModal {..._this} />
    </>
  );
};

export default Body;

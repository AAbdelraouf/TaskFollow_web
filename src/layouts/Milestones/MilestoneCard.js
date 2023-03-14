import React, { useRef } from 'react';

import { Card, Progress, Space, Tooltip, Button } from 'antd';
import { FaPlusCircle } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import SwitchSelector from 'react-switch-selector';
import { BsChevronCompactRight } from 'react-icons/bs';
import styles from '@/styles/Task.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');

const MilestoneCard = ({ _this, milestone, initialSelectedIndex }) => {
  return (
    <Card
      className={` shadow-md hover:shadow-lg min-h-36 border  overflow-hidden w-full md:w-80 ${
        milestone.status === 'ASSIGNED'
          ? `border-bgAssigned bg-assignedBody`
          : milestone.status === 'IN PROGRESS'
          ? `border-bgInProgress bg-inProgressBody`
          : ` border-bgCompleted bg-completedBody`
      }`}
      bordered={false}
      headStyle={{
        padding: 0,
        justifyContent: 'flex-start'
      }}
      title={
        <div className="flex items-center text-white rounded-r-lg rounded-b-none w-full h-10">
          <SwitchSelector
            name={milestone._id}
            backgroundColor={'#2C5E9E'}
            fontColor={'#FFF'}
            wrapperBorderRadius={'0, 6, 0, 0'}
            border="#2C5E9E"
            onChange={(value) => {
              _this.setMilestoneDetails((prev) => {
                const temp = [...prev];
                const index = temp.findIndex((x) => {
                  return x._id === milestone._id;
                });
                temp[index] = { ...temp[index], status: value };
                const data = {
                  milestone_id: milestone._id,
                  update_obj: { status: temp[index].status }
                };
                _this.onStatusChange(data);

                return temp;
              });
            }}
            initialSelectedIndex={initialSelectedIndex}
            options={Object.keys(_this.statusList).map((item, index) => ({
              label: (
                <div className="text-sm" key={index}>
                  {_this.statusList[item]}
                </div>
              ),
              value: item,
              selectedBackgroundColor:
                item === 'ASSIGNED' ? `#0097e6 ` : item === 'IN PROGRESS' ? '#fbc531' : ` #5BF08E`
            }))}
          />
        </div>
      }
      actions={[
        <Tooltip placement="topLeft" title="Edit Milestone" key="edit-milestone">
          <MdEditNote
            size={25}
            key="edit"
            className="w-full p-0 flex justify-center items-center text-grayDark"
            onClick={() => {
              _this.setEditMilestoneModalVisibility(true);
              _this.setEditMilestoneData((prev) => ({
                ...prev,
                milestone_id: milestone._id,
                update_obj: {
                  title: milestone.title,
                  description: milestone.description
                }
              }));
            }}
          />
        </Tooltip>,
        <Tooltip placement="topRight" title="Delete Milestone" key="delete-milestone">
          <MdDeleteForever
            onClick={() => {
              _this.setDeleteMilestoneModalVisibility(true);
              _this.setDeleteMilestoneData((prev) => ({
                ...prev,
                title: milestone.title,
                id: milestone._id
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
          <div className=" text-primary flex justify-between items-start text-lg font-semibold">
            {milestone.title}
          </div>

          <div className="font-normal text-grayDark text-base leading-tight">
            {milestone.description}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MilestoneCard;

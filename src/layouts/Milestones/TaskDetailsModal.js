import React from 'react';
import { Modal } from 'antd';
import { BsInfoCircleFill } from 'react-icons/bs';
import dayjs from 'dayjs';

const TaskDetailsModal = (_this) => {
  return (
    <Modal
      centered
      open={_this.taskDetailsModalVisibility}
      onOk={() => _this.setTaskDetailsModalVisibility(false)}
      onCancel={() => _this.setTaskDetailsModalVisibility(false)}
      width={500}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center pt-4 mb-6">
        <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
          <BsInfoCircleFill className="text-secondary" size={30} />
          Task Details
        </div>
        <div className="flex justify-center items-start gap-6 w-11/12">
          <div className="flex flex-col gap-3">
            <p className="text-gray-700 font-semibold text-normal">ID</p>
            <p className="text-gray-700 font-semibold text-normal">Title</p>
            <p className="text-gray-700 font-semibold text-normal">Description</p>
            <p className="text-gray-700 font-semibold text-normal">Created At</p>
            <p className="text-gray-700 font-semibold text-normal">Expected Start Date</p>
            <p className="text-gray-700 font-semibold text-normal">Due Date</p>
            <p className="text-gray-700 font-semibold text-normal">Priority</p>
            <p className="text-gray-700 font-semibold text-normal">Status</p>
            <p className="text-gray-700 font-semibold text-normal">Primary Customer</p>

            <p className="text-gray-700 font-semibold text-normal">Watchers</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-700 font-normal ">{_this.taskDetails?._id}</p>
            <p className="text-gray-700 font-normal ">{_this.taskDetails?.title}</p>
            <p className="text-gray-700 font-normal">{_this.taskDetails?.description}</p>
            <p className="text-gray-700 font-normal">
              {dayjs(_this.taskDetails?.createdAt).format('YYYY-MM-DD')}
            </p>
            <p className="text-gray-700 font-normal">
              {dayjs(_this.taskDetails?.expected_start_date).format('YYYY-MM-DD')}
            </p>
            <p className="text-gray-700 font-normal">
              {dayjs(_this.taskDetails?.due_date).format('YYYY-MM-DD')}
            </p>
            <div
              className={`text-xs py-1 px-4 font-bold mt-0 shadow-md flex justify-center items-center rounded-md ${
                _this.taskDetails.priority === 'low'
                  ? `text-txtLow bg-low`
                  : _this.taskDetails.priority === 'medium'
                  ? `text-txtMedium bg-medium`
                  : ` text-txtHigh bg-high`
              }`}
            >
              #{_this.taskDetails.priority}
            </div>
            <div
              className={`text-xs py-1 px-4 font-bold mt-0 shadow-md flex justify-center items-center rounded-md ${
                _this.taskDetails.status === 'completed'
                  ? `text-bgCompleted bg-completedBody`
                  : _this.taskDetails.status === 'inProgress'
                  ? `text-bgInProgress bg-inProgressBody`
                  : ` text-bgAssigned bg-assignedBody`
              }`}
            >
              #{_this.taskDetails.status}
            </div>
            <p className="text-gray-700 font-normal">{_this.taskDetails?.customer_email}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start pl-0 sm:pl-5 w-11/12">
          {_this.taskDetails.watchers.length > 0 &&
            _this.taskDetails?.watchers.map((item, index) => (
              <div
                className={`flex justify-between items-center w-72 rounded-full px-2 mb-2 my-1 h-7 ${
                  _this.taskDetails.customer_email === item.watcher ? 'bg-secondary' : 'bg-lightRed'
                }`}
                key={item._id}
              >
                <span className="text-xs text-white font-normal">
                  {item.watcher}{' '}
                  {_this.taskDetails.customer_email === item.watcher ? '(primary)' : ''}
                </span>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;

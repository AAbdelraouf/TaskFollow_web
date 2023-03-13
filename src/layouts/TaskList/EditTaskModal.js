import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
dayjs.locale('en');
import { Modal, Input, Button, Select, DatePicker } from 'antd';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';
import { TbCalendarTime } from 'react-icons/tb';
import {
  MdRemoveCircle,
  MdLowPriority,
  MdOutlineAddTask,
  MdTitle,
  MdOutlinePlaylistAddCheck
} from 'react-icons/md';

const generatePriorityColor = () => {};

const EditTaskModal = (_this) => {
  return (
    <Modal
      centered
      open={_this.editTaskModalVisibility}
      onOk={() => _this.setEditTaskModalVisibility(false)}
      onCancel={() => _this.setEditTaskModalVisibility(false)}
      width={500}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center pt-4">
        <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
          <MdOutlineAddTask className="text-secondary" size={30} />
          Edit Task
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark mb-2">
            Title<span className="text-txtHigh">*</span>
          </p>
          <Input.Group compact>
            <Button className="text-white bg-primary">
              <MdTitle size={17} />
            </Button>
            <Input
              style={{
                width: '240px'
              }}
              placeholder="Title"
              value={_this.editTaskData.update_obj.title}
              onChange={(e) =>
                _this.setEditTaskData((prev) => ({
                  ...prev,
                  update_obj: { ...prev.update_obj, title: e.target.value }
                }))
              }
            />
          </Input.Group>
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark mb-2">
            Status<span className="text-txtHigh">*</span>
          </p>
          <Input.Group compact>
            <Button className="bg-primary text-white">
              <MdOutlinePlaylistAddCheck size={17} />
            </Button>
            <Select
              className="w-[240px] h-9"
              placeholder={_this.editTaskData.update_obj.status}
              value={_this.editTaskData.update_obj.status}
              onChange={(value) => {
                console.log('on change', value);
                _this.setEditTaskData((prev) => ({
                  ...prev,
                  update_obj: { ...prev.update_obj, status: value }
                }));
              }}
              options={Object.keys(_this.statusList).map((item, index) => ({
                label: (
                  <div className="flex flex-row justify-start items-center" key={index}>
                    <div
                      className={` ml-2 ${
                        item == 'assigned'
                          ? ` text-radiantBlue `
                          : item == 'inProgress'
                          ? ` text-pending`
                          : item == 'onHold'
                          ? ` text-grayMedium`
                          : ` text-completed`
                      }`}
                    >
                      {_this.statusList[item]}
                    </div>
                  </div>
                ),
                value: item
              }))}
            />
          </Input.Group>
        </div>

        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark">
            Priority<span className="text-txtHigh">*</span>
          </p>
          <Input.Group compact>
            <Button className="bg-primary text-white">
              <MdLowPriority size={17} />
            </Button>
            <Select
              className="w-[240px] h-9"
              placeholder={'Select Priority'}
              value={
                _this.editTaskData.update_obj.priority === 'low'
                  ? 'Low'
                  : _this.editTaskData.update_obj.priority === 'medium'
                  ? 'Medium'
                  : 'High'
              }
              onChange={(value) => {
                _this.setEditTaskData((prev) => ({
                  ...prev,
                  update_obj: { ...prev.update_obj, priority: _this.makeCamelCaseWords(value) }
                }));
              }}
              options={_this.priorityList.map((item, index) => ({
                label: (
                  <div className="flex flex-row justify-start items-center" key={index}>
                    <div
                      className={` ml-2${
                        item == 'Low'
                          ? ` text-txtLow `
                          : item == 'Medium'
                          ? ` text-txtMedium`
                          : ` text-txtHigh`
                      }`}
                    >
                      {item}
                    </div>
                  </div>
                ),
                value: item
              }))}
            />
          </Input.Group>
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark mb-2">
            Expected Start Date<span className="text-txtHigh">*</span>
          </p>
          <Input.Group compact>
            <Button className="text-white bg-primary">
              <FiCalendar size={17} />
            </Button>
            <DatePicker
              style={{
                width: '240px'
              }}
              placeholder={'Select Expected start Date'}
              value={
                _this.editTaskData.update_obj.expected_start_date
                  ? _this.editTaskData.update_obj.expected_start_date != '0000-00-00'
                    ? dayjs(_this.editTaskData.update_obj.expected_start_date)
                    : null
                  : null
              }
              // defaultPickerValue={expected_start_date}
              onChange={(value) => {
                _this.setEditTaskData((prev) => ({
                  ...prev,
                  update_obj: {
                    ...prev.update_obj,
                    expected_start_date: dayjs(value).format('YYYY-MM-DD')
                  }
                }));
              }}
            />
          </Input.Group>
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark mb-2">
            Due Date<span className="text-txtHigh">*</span>
          </p>
          <Input.Group compact>
            <Button className="text-white bg-primary">
              <TbCalendarTime size={17} />
            </Button>
            <DatePicker
              style={{
                width: '240px'
              }}
              placeholder={'Select Due Date'}
              value={
                _this.editTaskData.update_obj.due_date
                  ? _this.editTaskData.update_obj.due_date != '0000-00-00'
                    ? dayjs(_this.editTaskData.update_obj.due_date)
                    : null
                  : null
              }
              onChange={(value) => {
                _this.setEditTaskData((prev) => ({
                  ...prev,
                  update_obj: { ...prev.update_obj, due_date: dayjs(value).format('YYYY-MM-DD') }
                }));
              }}
            />
          </Input.Group>
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark mb-2">
            Description<span className="text-txtHigh">*</span>
          </p>

          <Input.TextArea
            style={{
              width: '290px'
            }}
            placeholder="Enter Description"
            value={_this.editTaskData.update_obj.description}
            onChange={(e) => {
              _this.setEditTaskData((prev) => ({
                ...prev,
                update_obj: { ...prev.update_obj, description: e.target.value }
              }));
            }}
          />
        </div>
        <div className="py-2">
          <p className="text-sm font-semibold text-grayDark mb-2">
            Watchers<span className="text-txtHigh">*</span>
          </p>
          <Input.Group compact>
            <Button className="text-white bg-primary">
              <FaUsers size={17} />
            </Button>
            <Input
              style={{
                width: '210px'
              }}
              placeholder="Add Watcher"
              value={_this.watchersInput}
              onChange={(e) => _this.setWatchersInput(e.target.value)}
            />
            <FaUserPlus size={30} className="text-secondary ml-2" onClick={_this.onAddWatcher} />
          </Input.Group>
        </div>
        {_this.editTaskData?.watchers?.map((item, index) => (
          <div
            className={`flex justify-between items-center w-[290px] rounded-full px-2 mb-2 my-1 h-7 ${
              _this.customer_email === item.watcher ? 'bg-secondary' : 'bg-lightRed'
            }`}
            key={index}
          >
            <span className="text-xs text-white font-normal">
              {item.watcher} {_this.customer_email === item.watcher ? '(primary)' : ''}
            </span>
            <MdRemoveCircle
              size={20}
              className="text-txtHigh hover:text-red-500 cursor-pointer"
              onClick={() => {
                _this.onRemoveWatcher(index);
              }}
            />
          </div>
        ))}
        <div className="mt-6">
          <p className="text-xs font-thin italic">
            <span className="text-high">** </span>Participants added will get notified of progress
            made on this task.
          </p>
        </div>
        <Button
          onClick={() => _this.onEditTaskClick()}
          className="w-[300px] bg-primary text-white h-9 my-2"
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default EditTaskModal;

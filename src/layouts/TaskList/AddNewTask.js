import React from 'react';
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

const AddNewTask = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.addNewTaskModalVisibility}
        onOk={() => _this.setAddNewTaskModalVisibility(false)}
        onCancel={() => _this.setAddNewTaskModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center pt-4">
          <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
            <MdOutlineAddTask className="text-secondary" size={30} />
            Add New Task
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
                value={_this.addNewTaskData.title}
                onChange={(e) =>
                  _this.setAddNewTaskData((prev) => ({
                    ...prev,
                    title: e.target.value
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
                placeholder="Select Status"
                className="w-[240px] h-9"
                onChange={(value) => {
                  _this.setAddNewTaskData((prev) => ({
                    ...prev,
                    status: _this.makeCamelCaseWords(value)
                  }));
                }}
                options={_this.statusList.map((item, index) => ({
                  label: (
                    <div className="flex flex-row justify-start items-center" key={index}>
                      <div
                        className={` ml-2${
                          item == 'Assigned'
                            ? ` text-radiantBlue `
                            : item == 'In Progress'
                            ? ` text-pending`
                            : item == 'On Hold'
                            ? ` text-grayMedium`
                            : ` text-completed`
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
            <p className="text-sm font-semibold text-grayDark">
              Priority<span className="text-txtHigh">*</span>
            </p>
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <MdLowPriority size={17} />
              </Button>
              <Select
                placeholder="Select Priority"
                className="w-[240px] h-9"
                onChange={(value) => {
                  _this.setAddNewTaskData((prev) => ({
                    ...prev,
                    priority: _this.makeCamelCaseWords(value)
                  }));
                }}
                filterOption={(input, option) => {
                  return (option?.label?.key ?? '').toLowerCase().includes(input.toLowerCase());
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
                placeholder="Expected Start Date"
                onChange={(value) => {
                  const year = value.$y;
                  let month = value.$M + 1;
                  month = month.toString().padStart(2, '0');
                  let day = value.$D;
                  day = day.toString().padStart(2, '0');
                  _this.setAddNewTaskData((prev) => ({
                    ...prev,
                    expected_start_date: `${year}-${month}-${day}`
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
                placeholder="Due Date"
                onChange={(value) => {
                  const year = value.$y;
                  let month = value.$M + 1;
                  month = month.toString().padStart(2, '0');
                  let day = value.$D;
                  day = day.toString().padStart(2, '0');
                  _this.setAddNewTaskData((prev) => ({
                    ...prev,
                    due_date: `${year}-${month}-${day}`
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
              value={_this.addNewTaskData.description}
              onChange={(e) => {
                _this.setAddNewTaskData((prev) => ({
                  ...prev,
                  description: e.target.value
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
          {_this.addNewTaskData?.watchers?.map((item, index) => (
            <div
              className={`flex justify-between items-center w-[290px] rounded-full px-2 mb-2 my-1 h-7 ${
                _this.customer_email === item ? 'bg-secondary' : 'bg-lightRed'
              }`}
              key={index}
            >
              <span className="text-xs text-white font-normal">
                {item} {_this.customer_email === item ? '(primary)' : ''}
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
            onClick={() => _this.onAddNewTaskClick()}
            className="w-[300px] bg-primary text-white h-9 my-2"
          >
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AddNewTask;

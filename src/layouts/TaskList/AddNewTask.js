import React from 'react';
import { Modal, Input, Button, Select } from 'antd';
import { FaPhoneAlt, FaGlobeAmericas, FaUserPlus, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';
import { FiCalendar } from 'react-icons/fi';
import { TbCalendarTime } from 'react-icons/tb';
import {
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
                value={null}
                onChange={null}
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
                showSearch
                className="w-[240px] h-9"
                value={null}
                //   onChange={(value) => {
                //     _this.setAddCustomerData((prev) => ({
                //       ...prev,
                //       country_code: value
                //     }));
                //   }}
                filterOption={(input, option) => {
                  return (option?.label?.key ?? '').toLowerCase().includes(input.toLowerCase());
                }}
                options={_this.statusList.map((item, index) => ({
                  label: (
                    <div className="flex flex-row justify-start items-center" key={index}>
                      <div className="ml-2">{item}</div>
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
                showSearch
                className="w-[240px] h-9"
                value={null}
                //   onChange={(value) => {
                //     _this.setAddCustomerData((prev) => ({
                //       ...prev,
                //       country_code: value
                //     }));
                //   }}
                filterOption={(input, option) => {
                  return (option?.label?.key ?? '').toLowerCase().includes(input.toLowerCase());
                }}
                options={_this.priorityList.map((item, index) => ({
                  label: (
                    <div className="flex flex-row justify-start items-center" key={index}>
                      <div className="ml-2">{item}</div>
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
              <Input
                style={{
                  width: '240px'
                }}
                placeholder="Title"
                value={null}
                onChange={null}
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
              <Input
                style={{
                  width: '240px'
                }}
                placeholder="Title"
                value={null}
                onChange={null}
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
              value={null}
              onChange={null}
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
                  width: '240px'
                }}
                placeholder="Add Watcher"
                value={null}
                onChange={null}
              />
            </Input.Group>
          </div>

          <p className="text-xs font-thin italic my-2">
            <span className="text-high">** </span>Participants added will get notified of progress
            made on this task.
          </p>
          <Button onClick={null} className="w-[300px] bg-primary text-white h-9 my-2">
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AddNewTask;

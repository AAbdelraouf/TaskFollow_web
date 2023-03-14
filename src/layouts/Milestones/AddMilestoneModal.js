import React from 'react';
import { Modal, Input, Button } from 'antd';
import { HiDocumentPlus } from 'react-icons/hi2';
import { BsPlus } from 'react-icons/bs';
import { MdTitle, MdDeleteForever } from 'react-icons/md';

const AddMilestoneModal = (_this) => {
  return (
    <Modal
      centered
      open={_this.addMilestoneModalVisibility}
      onOk={() => _this.setAddMilestoneModalVisibility(false)}
      onCancel={() => _this.setAddMilestoneModalVisibility(false)}
      width={500}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center pt-4">
        <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
          <HiDocumentPlus className="text-secondary" size={30} />
          Add Milestone
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
              value={_this.addMilestoneTitle}
              onChange={(e) => _this.setAddMilestoneTitle(e.target.value)}
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
            value={_this.addMilestoneDescription}
            onChange={(e) => _this.setAddMilestoneDescription(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-xs font-thin italic">
            <span className="text-high">** </span>Multiple milestone can be added by clicking on
            this Add button
          </p>
        </div>

        <Button
          onClick={() => _this.onAddMilestoneClick()}
          className="w-[300px] bg-primary text-white h-9 my-2 flex justify-center items-center"
        >
          ADD
          <BsPlus size={30} />
        </Button>

        {_this.addMilestoneData.milestones.length > 0 &&
          _this.addMilestoneData?.milestones.map((item, index) => (
            <div
              className="flex justify-between items-start w-[300px] p-4 rounded-lg bg-slate-200 px-4 my-1 "
              key={index}
            >
              <div className="flex justify-start items-start gap-2 w-11/12">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-700 font-semibold">Status: </p>
                  <p className="text-xs text-gray-700 font-semibold">Title:</p>
                  <p className="text-xs text-gray-700 font-semibold">Description:</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-700 font-normal">{item.status}</p>
                  <p className="text-xs text-gray-700  font-normal ">{item.title}</p>
                  <p className="text-xs text-gray-700  font-normal">{item.description}</p>
                </div>
              </div>

              <MdDeleteForever
                size={25}
                className="text-secondary cursor-pointer font-bold"
                onClick={() => {
                  _this.onRemoveMilestoneData(index);
                }}
              />
            </div>
          ))}
        {_this.addMilestoneData.milestones.length > 0 && (
          <Button
            onClick={() => _this.onAddMilestoneSubmit()}
            className="w-[300px] bg-primary text-white h-9 my-2 mt-6"
          >
            Submit
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default AddMilestoneModal;

import React from 'react';
import { Modal, Input, Button } from 'antd';
import { HiDocumentPlus } from 'react-icons/hi2';
import { MdTitle } from 'react-icons/md';

const EditMilestoneModal = (_this) => {
  return (
    <Modal
      centered
      open={_this.editMilestoneModalVisibility}
      onOk={() => _this.setEditMilestoneModalVisibility(false)}
      onCancel={() => _this.setEditMilestoneModalVisibility(false)}
      width={500}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center pt-4">
        <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
          <HiDocumentPlus className="text-secondary" size={30} />
          Edit Milestone
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
              value={_this.editMilestoneData.update_obj.title}
              onChange={(e) =>
                _this.setEditMilestoneData((prev) => ({
                  ...prev,
                  update_obj: { ...prev.update_obj, title: e.target.value }
                }))
              }
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
            value={_this.editMilestoneData.update_obj.description}
            onChange={(e) => {
              _this.setEditMilestoneData((prev) => ({
                ...prev,
                update_obj: { ...prev.update_obj, description: e.target.value }
              }));
            }}
          />
        </div>

        <Button
          onClick={() => _this.onEditMilestoneClick()}
          className="w-[300px] bg-primary text-white h-9 my-2"
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default EditMilestoneModal;

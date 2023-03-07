import React from 'react';
import { Button, Modal } from 'antd';
import { MdDeleteForever, MdCancel } from 'react-icons/md';

const DeleteTaskModal = (_this) => {
  return (
    <div>
      {/* -----------------------------------------------------------------Delete Modal---------------------------------------------------------- */}
      <Modal
        centered
        open={_this.deleteTaskModalVisibility}
        onOk={() => _this.setDeleteTaskModalVisibility(false)}
        onCancel={() => _this.setDeleteTaskModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <p>
              Are You Sure You want to delete
              <span className="font-semibold"> {_this.deleteTaskData.title}</span>
            </p>
          </div>
          <div className="mt-6 flex justify-end items-end">
            <Button
              icon={<MdCancel size={20} className="mr-1" />}
              onClick={() => _this.setDeleteTaskModalVisibility(false)}
              className="flex items-center justify-center mx-2 bg-primary text-white shadow-md"
            >
              Cancel
            </Button>
            <Button
              icon={<MdDeleteForever size={20} />}
              onClick={() => _this.onTaskDelete()}
              className=" flex items-center justify-center mx-2 bg-secondary text-white shadow-md"
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteTaskModal;

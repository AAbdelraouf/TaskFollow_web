import React from 'react';
import { Modal, Button } from 'antd';
import { MdDeleteForever, MdCancel } from 'react-icons/md';

const RemovePrimaryWatcherModal = (_this) => {
  return (
    <div>
      <Modal
        top
        open={_this.removePrimaryWatcherModalVisibility}
        onOk={() => _this.setRemovePrimaryWatcherModalVisibility(false)}
        onCancel={() => _this.setRemovePrimaryWatcherModalVisibility(false)}
        width={400}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center pt-6">
          Are you sure you want to remove the primary account
          <span className="font-semibold"> {_this.customer_email}</span>
          <div className="flex mt-4">
            <Button
              icon={<MdCancel size={20} className="mr-1" />}
              onClick={() => _this.setRemovePrimaryWatcherModalVisibility(false)}
              className="flex items-center justify-center mx-2 bg-primary text-white shadow-md"
            >
              Cancel
            </Button>
            <Button
              icon={<MdDeleteForever size={20} />}
              onClick={() => _this.onRemoveWatcherInModal()}
              className="flex items-center justify-center mx-2 bg-secondary text-white shadow-md"
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RemovePrimaryWatcherModal;

import React from 'react';
import { Modal, Button } from 'antd';

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
              onClick={() => _this.setRemovePrimaryWatcherModalVisibility(false)}
              className="mx-2 bg-primary text-white"
            >
              Cancel
            </Button>
            <Button
              onClick={() => _this.onRemoveWatcherInModal()}
              className="mx-2 bg-secondary text-white"
            >
              Remove
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RemovePrimaryWatcherModal;

import React from 'react';
import { Modal, Button } from 'antd';
import { MdDeleteForever, MdCancel } from 'react-icons/md';

const RemoveAssociatedWatcherModal = (_this) => {
  return (
    <Modal
      top
      open={_this.removeAssociatedWatcherModalVisibility}
      onOk={() => _this.setRemoveAssociatedWatcherModalVisibility(false)}
      onCancel={() => (
        _this.setRemoveAssociatedWatcherModalVisibility(false),
        _this.setRemoveWatcherDetails((prev) => ({ ...prev, id: '', watcher: '' }))
      )}
      width={400}
      footer={null}
    >
      <div className="flex flex-col justify-center items-center pt-6">
        Are you sure you want to remove the assocaited account
        <span className="font-semibold"> {_this.removeWatcherDetails.watcher}</span>
        <div className="flex mt-4">
          <Button
            icon={<MdCancel size={20} className="mr-1" />}
            onClick={() => (
              _this.setRemoveAssociatedWatcherModalVisibility(false),
              _this.setRemoveWatcherDetails((prev) => ({ ...prev, id: '', watcher: '' }))
            )}
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
  );
};

export default RemoveAssociatedWatcherModal;

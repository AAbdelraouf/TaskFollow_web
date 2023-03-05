import React from 'react';
import { Button, Modal } from 'antd';
import { MdDeleteForever, MdCancel } from 'react-icons/md';

const DeleteAccountModal = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.deleteAccountModalVisibility}
        onOk={() => _this.setDeleteAccountModalVisibility(false)}
        onCancel={() => _this.setDeleteAccountModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center pt-10">
          <p className="text-secondary text-base font-semibold">
            Are You Sure You want to DELETE ACCOUNT permanently.
          </p>
          <div className="mt-6 flex justify-end items-end">
            <Button
              icon={<MdCancel size={20} className="mr-1" />}
              onClick={() => _this.setDeleteAccountModalVisibility(false)}
              className="flex items-center justify-center mx-2 bg-primary text-white shadow-md"
            >
              Cancel
            </Button>
            <Button
              icon={<MdDeleteForever size={20} />}
              onClick={() => _this.onAccountDelete()}
              className="flex items-center justify-center mx-2 bg-secondary text-white shadow-md"
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAccountModal;

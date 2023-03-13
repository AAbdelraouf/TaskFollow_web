import React from 'react';
import { Modal, Input, Button } from 'antd';
import { FaUser, FaUserEdit } from 'react-icons/fa';

const EditProfileModal = (_this) => {
  return (
    <>
      <Modal
        centered
        title={
          <p className="font-bold text-xl text-center text-grayDark pb-4 flex justify-center items-center gap-2">
            <FaUserEdit size={25} className="text-secondary pt-[2px]" /> Edit Profile
          </p>
        }
        open={_this.editProfileModalVisibility}
        onOk={() => _this.setEditProfileModalVisibility(false)}
        onCancel={() => _this.setEditProfileModalVisibility(false)}
        width={350}
        footer={null}
      >
        <p className="font-semibold text-grayMedium">Name :</p>
        <div className="flex">
          <Button className="text-white bg-primary h-10 rounded-r-none">
            <FaUser size={20} />
          </Button>
          <Input
            placeholder="Name"
            className="font-semibold h-[39px] text-base -ml-[1px] rounded-l-none"
            value={_this.profileDetails.name}
            onChange={(e) => {
              _this.setProfileDetails((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </div>
        <Button
          className="bg-primary w-full h-10 pb-2 font-bold text-xl mt-4 text-white tracking-wider"
          onClick={() => _this.onEditProfileSubmit()}
        >
          Save
        </Button>
      </Modal>
    </>
  );
};

export default EditProfileModal;

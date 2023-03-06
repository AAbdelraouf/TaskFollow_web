import React from 'react';
import { Modal, Input, Button } from 'antd';
import { FaUser } from 'react-icons/fa';

const EditProfile = (_this) => {
  return (
    <>
      <Modal
        centered
        title={<p className="font-bold text-xl text-center text-grayDark pb-4">Edit Profile</p>}
        open={_this.editProfileModalVisibility}
        onOk={() => _this.setEditProfileModalVisibility(false)}
        onCancel={() => _this.setEditProfileModalVisibility(false)}
        width={450}
        footer={null}
      >
        <p className="font-semibold text-grayMedium">Name :</p>
        <Input.Group compact>
          <Button className="text-white bg-primary h-10">
            <FaUser size={20} />
          </Button>
          <Input
            style={{
              width: '240px'
            }}
            placeholder="Name"
            className="font-semibold h-10 text-base"
            value={_this.profileDetails.name}
            onChange={(e) => {
              _this.setProfileDetails((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <Button
            className="bg-primary w-full h-10 pb-2 font-bold text-xl mt-4 text-white tracking-wider"
            onClick={() => _this.onEditProfileSubmit()}
          >
            Save
          </Button>
        </Input.Group>
      </Modal>
    </>
  );
};

export default EditProfile;

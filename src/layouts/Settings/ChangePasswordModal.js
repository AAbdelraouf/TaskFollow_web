import React from 'react';
import { useState } from 'react';
import { Modal, Input, Button } from 'antd';
import { FaUserShield, FaUserLock, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const ChangePasswordModal = (_this) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <Modal
        centered
        open={_this.changePasswordModalVisibility}
        onOk={() => _this.setChangePasswordModalVisibility(false)}
        onCancel={() => _this.setChangePasswordModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center gap-3 py-2">
          <div className="flex justify-center items-center gap-4 text-xl font-bold pb-4">
            <FaUserShield className="text-secondary" size={32} />
            Change Password
          </div>

          <div className="">
            <Input.Group compact>
              <Button className="text-white bg-primary h-11">
                <FaUserLock size={22} />
              </Button>
              <Input.Password
                style={{
                  width: '250px'
                }}
                placeholder="Old Password"
                className="font-semibold h-11 text-base"
                // value={_this.addCustomerData.customer_name}
                // onChange={(e) => {
                //   _this.setAddCustomerData((prev) => ({ ...prev, customer_name: e.target.value }));
                // }}
                iconRender={(visible) =>
                  visible ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                  )
                }
                visibilityToggle
              />
            </Input.Group>
          </div>

          <div className="">
            <Input.Group compact>
              <Button className="text-white bg-primary h-11">
                <FaLock size={22} />
              </Button>
              <Input.Password
                style={{
                  width: '250px'
                }}
                placeholder="New Password"
                className="font-semibold h-11 text-base"
                // value={_this.addCustomerData.customer_name}
                // onChange={(e) => {
                //   _this.setAddCustomerData((prev) => ({ ...prev, customer_name: e.target.value }));
                // }}
                iconRender={(visible) =>
                  visible ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                  )
                }
                visibilityToggle
              />
            </Input.Group>
          </div>

          <div className="">
            <Input.Group compact>
              <Button className="text-white bg-primary h-11">
                <FaLock size={22} />
              </Button>
              <Input.Password
                style={{
                  width: '250px'
                }}
                placeholder="Confirm New Password"
                className="font-semibold h-11 text-base"
                // value={_this.addCustomerData.customer_name}
                // onChange={(e) => {
                //   _this.setAddCustomerData((prev) => ({ ...prev, customer_name: e.target.value }));
                // }}
                iconRender={(visible) =>
                  visible ? (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={togglePasswordVisibility} />
                  )
                }
                visibilityToggle
              />
            </Input.Group>
          </div>

          <Button className="w-[300px] bg-primary text-white h-12 font-bold text-lg tracking-wider">
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;

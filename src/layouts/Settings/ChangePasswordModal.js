import React from 'react';
import { Modal, Input, Button } from 'antd';
import { FaUserShield, FaUserLock, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';

const ChangePasswordModal = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.passwordModalVisibility}
        onOk={() => _this.setPasswordModalVisibility(false)}
        onCancel={() => _this.setPasswordModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center gap-4 py-2">
          <div className="flex justify-center items-center gap-4 text-xl font-bold pb-4">
            <FaUserShield className="text-secondary" size={32} />
            Change Password
          </div>

          <div>
            <Input.Group compact>
              <Button className="text-white bg-primary h-9">
                <FaUserLock size={22} />
              </Button>
              <Input.Password
                placeholder="Old Password"
                className="font-semibold h-9 text-base w-[240px]"
                value={_this.passwords.old_password}
                onChange={(e) => {
                  _this.setPasswords((prev) => ({ ...prev, old_password: e.target.value }));
                }}
                iconRender={(visible) =>
                  visible ? (
                    <FaEyeSlash onClick={() => _this.togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={() => _this.togglePasswordVisibility} />
                  )
                }
                visibilityToggle
              />
            </Input.Group>
          </div>

          <div>
            <Input.Group compact>
              <Button className="text-white bg-primary h-9">
                <FaLock size={20} />
              </Button>
              <Input.Password
                placeholder="New Password"
                className="font-semibold h-9 text-base w-[240px]"
                value={_this.passwords.password}
                onChange={(e) => {
                  _this.setPasswords((prev) => ({ ...prev, password: e.target.value }));
                }}
                iconRender={(visible) =>
                  visible ? (
                    <FaEyeSlash onClick={() => _this.togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={() => _this.togglePasswordVisibility} />
                  )
                }
                visibilityToggle
              />
            </Input.Group>
          </div>

          <div>
            <Input.Group compact>
              <Button className="text-white bg-primary h-9">
                <FaLock size={20} />
              </Button>
              <Input.Password
                placeholder="Confirm New Password"
                className="font-semibold h-9 text-base w-[240px]"
                value={_this.passwords.confirm_password}
                onChange={(e) => {
                  _this.setPasswords((prev) => ({ ...prev, confirm_password: e.target.value }));
                }}
                iconRender={(visible) =>
                  visible ? (
                    <FaEyeSlash onClick={() => _this.togglePasswordVisibility} />
                  ) : (
                    <FaEye onClick={() => _this.togglePasswordVisibility} />
                  )
                }
                visibilityToggle
              />
            </Input.Group>
          </div>

          <Button
            onClick={() => _this.changePassword()}
            className="w-[300px] bg-primary text-white h-10 font-bold text-lg tracking-wider"
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;

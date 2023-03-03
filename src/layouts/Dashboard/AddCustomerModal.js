import React from 'react';
import { Modal, Input, Button } from 'antd';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
const AddCustomerModal = ({ _this }) => {
  return (
    <>
      <Modal
        title="Add New Customer"
        centered
        open={_this.addCustomerModalVisibility}
        onOk={() => _this.setAddCustomerModalVisibility(false)}
        onCancel={() => _this.setAddCustomerModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-xs font-thin italic">
            <span className="text-red-500">*</span>Regeistered customers will show with their
            registered name
          </p>
          <div className="mb-2">
            <Input.Group compact>
              <Button className="text-white bg-primary">
                <AiOutlineUser size={20} />
              </Button>
              <Input
                style={{
                  width: '250px'
                }}
                placeholder="Name"
                value={_this.addCustomerData.name}
                onChange={(e) => {
                  _this.setAddCustomerData((prev) => ({ ...prev, name: e.target.value }));
                }}
              />
            </Input.Group>
          </div>
          <div className="mb-2">
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <MdEmail size={20} />
              </Button>
              <Input
                style={{
                  width: '250px'
                }}
                placeholder="Email"
                value={_this.addCustomerData.email}
                onChange={(e) => {
                  _this.setAddCustomerData((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
            </Input.Group>
          </div>
          <div className="mb-2">
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <FaPhoneAlt size={17} />
              </Button>
              <Input
                style={{
                  width: '250px'
                }}
                placeholder="Phone"
                value={_this.addCustomerData.phone}
                onChange={(e) => {
                  _this.setAddCustomerData((prev) => ({ ...prev, phone: e.target.value }));
                }}
              />
            </Input.Group>
          </div>
          <Button className="w-[300px] bg-primary text-white h-9">ADD</Button>
        </div>
      </Modal>
    </>
  );
};

export default AddCustomerModal;

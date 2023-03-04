import React from 'react';
import { Modal, Input, Button, Select } from 'antd';
import { FaPhoneAlt, FaGlobeAmericas } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const EditCustomerModal = (_this) => {
  return (
    <div>
      <>
        <Modal
          title="Edit Customer Details"
          centered
          open={_this.editCustomerModalVisibility}
          onOk={() => _this.setEditCustomerModalVisibility(false)}
          onCancel={() => _this.setEditCustomerModalVisibility(false)}
          width={500}
          footer={null}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="mb-2">
              <Input.Group compact>
                <Button className="text-white bg-primary">
                  <AiOutlineUser size={17} />
                </Button>
                <Input
                  style={{
                    width: '250px'
                  }}
                  placeholder="Name"
                  value={_this.editCustomerData.name}
                  onChange={(e) => {
                    _this.setEditCustomerData((prev) => ({ ...prev, name: e.target.value }));
                  }}
                />
              </Input.Group>
            </div>
            <div className="mb-2">
              <Input.Group compact>
                <Button className="bg-primary text-white">
                  <MdEmail size={17} />
                </Button>
                <Input
                  style={{
                    width: '250px'
                  }}
                  placeholder="Email"
                  value={_this.editCustomerData.email}
                  onChange={(e) => {
                    _this.setEditCustomerData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                />
              </Input.Group>
            </div>

            <Button
              onClick={() => _this.onEditCustomerDetails()}
              className="w-[300px] bg-primary text-white h-9"
            >
              Submit
            </Button>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default EditCustomerModal;

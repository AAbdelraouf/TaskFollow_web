import React from 'react';
import { Modal, Input, Button, Select } from 'antd';
import { FaPhoneAlt, FaGlobeAmericas, FaUserPlus } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const AddCustomerModal = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.addCustomerModalVisibility}
        onOk={() => _this.setAddCustomerModalVisibility(false)}
        onCancel={() => _this.setAddCustomerModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center pt-4">
          <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
            <FaUserPlus className="text-secondary" size={30} />
            Add New Customer
          </div>
          <div className="py-2">
            <Input.Group compact>
              <Button className="text-white bg-primary">
                <AiOutlineUser size={17} />
              </Button>
              <Input
                style={{
                  width: '240px'
                }}
                placeholder="Name"
                value={_this.addCustomerData.customer_name}
                onChange={(e) => {
                  _this.setAddCustomerData((prev) => ({ ...prev, customer_name: e.target.value }));
                }}
              />
            </Input.Group>
          </div>
          <div className="py-2">
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <MdEmail size={17} />
              </Button>
              <Input
                style={{
                  width: '240px'
                }}
                placeholder="Email"
                value={_this.addCustomerData.customer_email}
                onChange={(e) => {
                  _this.setAddCustomerData((prev) => ({ ...prev, customer_email: e.target.value }));
                }}
              />
            </Input.Group>
          </div>
          <div className="py-2">
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <FaGlobeAmericas size={17} />
              </Button>
              <Select
                showSearch
                className="w-[240px] h-9"
                value={_this.addCustomerData.country_code}
                onChange={(value) => {
                  _this.setAddCustomerData((prev) => ({
                    ...prev,
                    country_code: value
                  }));
                }}
                filterOption={(input, option) => {
                  return (option?.label?.key ?? '').toLowerCase().includes(input.toLowerCase());
                }}
                options={_this.countryList.map((item, index) => ({
                  label: (
                    <div className="flex flex-row justify-start items-center" key={item.name}>
                      <img className="w-5 h-5" src={item.flag} alt="flag" />

                      <div className="ml-2 w-10">+{item.callingCode}</div>
                      <div className="ml-2">{item.name}</div>
                    </div>
                  ),
                  value: '+' + item.callingCode
                }))}
              />
            </Input.Group>
          </div>
          <div className="py-2">
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <FaPhoneAlt size={17} />
              </Button>
              <Input
                style={{
                  width: '240px'
                }}
                placeholder="Phone"
                value={_this.addCustomerData.customer_mobile}
                onChange={(e) => {
                  _this.setAddCustomerData((prev) => ({
                    ...prev,
                    customer_mobile: e.target.value
                  }));
                }}
              />
            </Input.Group>
          </div>

          <p className="text-xs font-thin italic my-2">
            <span className="text-red-500">* </span>Registered customers will show with their
            registered name
          </p>
          <Button
            onClick={() => _this.onAddNewCustomer()}
            className="w-[300px] bg-primary text-white h-9 my-2"
          >
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AddCustomerModal;

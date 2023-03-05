import React from 'react';
import { Modal, Input, Button, Select } from 'antd';
import { FaPhoneAlt, FaGlobeAmericas, FaUsersCog } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const EditCustomerModal = (_this) => {
  return (
    <div>
      <>
        <Modal
          centered
          open={_this.editCustomerModalVisibility}
          onOk={() => _this.setEditCustomerModalVisibility(false)}
          onCancel={() => _this.setEditCustomerModalVisibility(false)}
          width={500}
          footer={null}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2 text-xl font-semibold pb-4">
              <FaUsersCog className="text-secondary" size={30} />
              Edit Customer Details
            </div>
            <div className="py-2">
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
            <div className="py-2">
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

            <div className="py-2">
              <Input.Group compact>
                <Button className="bg-primary text-white">
                  <FaGlobeAmericas size={17} />
                </Button>
                <Select
                  showSearch
                  className="w-[250px] h-9"
                  value={_this.editCustomerData.country_code}
                  onChange={(value) => {
                    _this.setEditCustomerData((prev) => ({
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
                    width: '250px'
                  }}
                  placeholder="Phone"
                  value={_this.editCustomerData.phone}
                  onChange={(e) => {
                    _this.setEditCustomerData((prev) => ({
                      ...prev,
                      phone: e.target.value
                    }));
                  }}
                />
              </Input.Group>
            </div>

            <Button
              onClick={() => _this.onEditCustomerDetails()}
              className="w-[300px] bg-primary text-white h-9 my-2"
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

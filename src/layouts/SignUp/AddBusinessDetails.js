import React from 'react';
import { Button, Input, Select } from 'antd';
import { MdDeleteForever } from 'react-icons/md';
import { BsPlusSquareFill } from 'react-icons/bs';

const AddBusinessDetails = ({ _this }) => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="flex flex-col justify-center mb-6">
        <label className="text-sm text-gray-500 font-medium mb-4">Business Description</label>
        <Input.TextArea
          className="w-72 h-9"
          placeholder="Add Business Description"
          value={_this.businessDetails.business_description}
          autoSize={{
            minRows: 3,
            maxRows: 5
          }}
          onChange={(e) => {
            _this.setBusinessDetails((prev) => ({
              ...prev,
              business_description: e.target.value
            }));
          }}
        />
      </div>
      <div className="flex flex-col justify-center mb-6">
        <label className="text-sm text-gray-500 font-medium mb-4">Business Address</label>
        <Input.TextArea
          className="w-72 h-9"
          placeholder="Add Business Address"
          value={_this.businessDetails.business_address}
          autoSize={{
            minRows: 3,
            maxRows: 5
          }}
          onChange={(e) => {
            _this.setBusinessDetails((prev) => ({
              ...prev,
              business_address: e.target.value
            }));
          }}
        />
      </div>

      <div className="flex flex-col justify-center mb-6">
        <label className="text-sm text-gray-500 font-medium mb-4">Country</label>
        <Select
          showSearch
          className="w-72 h-9"
          value={_this.businessDetails.country_code}
          onChange={(value) => {
            _this.setBusinessDetails((prev) => ({
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
      </div>

      <div className="flex flex-col justify-center mb-6">
        <label className="text-sm text-gray-500 font-medium mb-4">Phone</label>
        <Input
          addonBefore={_this.businessDetails.country_code}
          placeholder="Phone Number"
          className="w-72 h-9"
          value={_this.businessDetails.business_phone}
          onChange={(e) => {
            _this.setBusinessDetails((prev) => ({
              ...prev,
              business_phone: e.target.value
            }));
          }}
        />
      </div>
      <div className="flex flex-col justify-center mb-6">
        <label className="text-sm text-gray-500 font-medium mb-4">Services</label>
        <Input
          value={_this.servicesInput}
          placeholder="Services"
          addonAfter={
            <BsPlusSquareFill
              size={20}
              fill="#2C5E9E"
              cursor="pointer"
              onClick={_this.onServiceAdd}
            />
          }
          className="w-72 h-9"
          label={'business_phone'}
          onChange={(e) => {
            _this.setServicesInput(e.target.value);
          }}
        />
        {_this.businessDetails?.business_services_offered?.map((item, index) => (
          <div
            className="flex justify-between items-center w-64 rounded-full bg-slate-200 px-4 my-1 h-10"
            key={index}
          >
            <span className="text-xs text-gray-700 font-bold">{item}</span>
            <MdDeleteForever
              size={25}
              className="text-secondary hover:text-red-500 cursor-pointer font-bold"
              onClick={() => {
                _this.onServiceDelete(index);
              }}
            />
          </div>
        ))}
      </div>

      <Button
        onClick={() => _this.onBusinessDetailsSubmit()}
        className=" bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
        block
      >
        Submit Business Details
      </Button>
    </div>
  );
};

export default AddBusinessDetails;

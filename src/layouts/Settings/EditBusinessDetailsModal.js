import React from 'react';
import { Modal, Input, Button, Select, InputNumber } from 'antd';
const { TextArea } = Input;
import { FaPhoneAlt, FaGlobeAmericas } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsPlusSquareFill } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

const EditBusinessDetailsModal = (_this) => {
  return (
    <>
      <Modal
        centered
        title={
          <p className="font-bold text-xl text-center text-grayDark pb-4">Edit Business Details</p>
        }
        style={{
          marginTop: '3%',
          marginBottom: '3%'
        }}
        open={_this.editBusinessDetailsModalVisibility}
        onOk={() => _this.setEditBusinessDetailsModalVisibility(false)}
        onCancel={_this.onModalClose}
        width={450}
        footer={null}
      >
        <div className="flex flex-col gap-2.5 h-full w-full justify-center items-center pb-3">
          <div>
            <p className="font-semibold text-grayMedium">Business Description :</p>
            <TextArea
              value={_this.businessDetails.business_description}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_description: e.target.value
                }));
              }}
              placeholder="Business Description"
              className="shadow-md font-semibold text-md w-[315px]"
              autoSize={{
                minRows: 3,
                maxRows: 3
              }}
            />
          </div>

          <div>
            <p className="font-semibold text-grayMedium">Address :</p>
            <TextArea
              value={_this.businessDetails.business_address}
              onChange={(e) => {
                _this.setBusinessDetails((prev) => ({
                  ...prev,
                  business_address: e.target.value
                }));
              }}
              placeholder="Address"
              className="shadow-md font-semibold text-md w-[315px]"
              autoSize={{
                minRows: 3,
                maxRows: 3
              }}
            />
          </div>

          <div className="w-[317px]">
            <p className="font-semibold text-grayMedium">Country Code :</p>
            <Input.Group compact>
              <Button className="bg-primary text-white">
                <FaGlobeAmericas size={17} />
              </Button>
              <Select
                showSearch
                className="h-9"
                style={{
                  width: '265px'
                }}
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
            </Input.Group>
          </div>

          <div className="w-[317px]">
            <p className="font-semibold text-grayMedium">Phone :</p>
            <Input.Group compact className="w-full flex flex-row">
              <Button className="text-white bg-primary h-[35px]">
                <FaPhoneAlt size={20} />
              </Button>
              <Input
                placeholder="Phone"
                className="font-semibold h-[35px] text-md shadow-md tracking-wider"
                style={{
                  width: '262px'
                }}
                value={_this.businessDetails.business_phone}
                // parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                // value={_this.businessDetails ? _this.businessDetails.business_phone : ''}
                onChange={(e) => {
                  _this.setBusinessDetails((prev) => ({
                    ...prev,
                    business_phone: e.target.value
                  }));
                }}
              />
            </Input.Group>
          </div>

          <div className="w-[317px]">
            <p className="font-semibold text-grayMedium py-[3px]">Services Offered :</p>
            <Input.Group compact className="pb-2">
              <Button className="text-white bg-primary h-[33px]">
                <FaPhoneAlt size={20} />
              </Button>
              <Input
                addonAfter={
                  <BsPlusSquareFill
                    size={20}
                    className="h-[30px]"
                    fill="#2C5E9E"
                    cursor="pointer"
                    onClick={_this.onAddService}
                  />
                }
                style={{
                  width: '262px'
                }}
                placeholder="Service title"
                className="font-semibold h-8 text-base shadow-md"
                value={_this.servicesInput}
                onChange={(e) => {
                  _this.setServicesInput(e.target.value);
                }}
              />
            </Input.Group>

            <div className="w-full h-auto flex flex-wrap gap-2 pt-3 font-semibold">
              {_this.businessDetails
                ? _this.businessDetails.business_services_offered.map((services, index) => (
                    <div
                      className="min-w-32 pr-2 pl-3 min-h-9 py-1 bg-grayMedium shadow-md rounded-2xl flex justify-evenly gap-2 items-center custom_button"
                      key={index}
                    >
                      <span>{services}</span>
                      <RxCross2
                        size={16}
                        className="cursor-pointer"
                        onClick={() => _this.onDeleteService(index)}
                      />
                    </div>
                  ))
                : ''}
            </div>
          </div>

          <Button
            className="bg-primary w-[317px] h-10 font-bold text-xl mt-4 text-white tracking-wider"
            onClick={() => _this.onUpdateBusinessDetails()}
          >
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default EditBusinessDetailsModal;

import Link from 'next/link';
import React from 'react';
import Marketing from '../Home/Marketing';
import OTPInput from 'otp-input-react';
import { BsPlusSquareFill } from 'react-icons/bs';
import { Button, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const Body = ({ _this }) => {
  return (
    <div className="w-screen flex flex-col sm:flex-row justify-center h-screen home_gradient_bg">
      <div className="flex-1 flex basis-1/4 justify-start">
        <div className="flex sm:w-[425px] w-full flex-col bg-white justify-center items-start p-6">
          {!_this.enterBusinessDetails && (
            <h1 className="ml-7 text-4xl font-medium text-left whitespace-normal break-normal leading-normal text-gray-700">
              Get Started <br /> Absolutely Free
            </h1>
          )}

          <h1 className=" ml-7  mt-3 text-xl font-medium text-left text-gray-400">
            {_this.enterBusinessDetails
              ? 'Enter Your Business Details'
              : 'Create Your Business Account'}
          </h1>

          {_this.otpReceived === false && _this.enterBusinessDetails === false ? (
            <div className="flex flex-col justify-center items-center ml-7 my-4">
              <div className="flex flex-col justify-center mb-2">
                <p className="text-xs text-gray-700 font-semibold ">BUSINESS NAME</p>
                <Input
                  className="w-72 h-9"
                  label={'name'}
                  onChange={(e) => {
                    _this.setFormValue((prev) => ({
                      ...prev,
                      name: e.target.value
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col justify-center mb-2">
                <p className="text-xs text-gray-700 font-semibold ">BUSINESS EMAIL ADDRESS</p>
                <Input
                  className="w-72 h-9"
                  label={'email'}
                  onChange={(e) => {
                    _this.setFormValue((prev) => ({
                      ...prev,
                      email: e.target.value
                    }));
                  }}
                />
              </div>

              <div className="flex flex-col justify-center mb-2">
                <p className="text-xs text-gray-700 font-semibold ">PASSWORD</p>
                <Input.Password
                  className="w-72 h-9"
                  label={'Password'}
                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                  onChange={(e) => {
                    _this.setFormValue((prev) => ({
                      ...prev,
                      password: e.target.value
                    }));
                  }}
                />
              </div>

              <div className="flex flex-col justify-center mb-4">
                <p className="text-xs text-gray-700 font-semibold ">CONFIRM PASSWORD</p>
                <Input.Password
                  className="w-72 h-9"
                  label={'Password'}
                  iconRender={(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
                  onChange={(e) => {
                    _this.setFormValue((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value
                    }));
                  }}
                />
              </div>

              <Button
                onClick={() => _this.onSignUp()}
                className=" bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
                block
              >
                Get Started
              </Button>
              <p className=" m-2 text-sm font-medium text-center text-gray-400">
                Already have an account?{' '}
                <Link href="/">
                  <span className="cursor-pointer text-primary">Sign In</span>
                </Link>
              </p>
            </div>
          ) : _this.otpReceived === true ? (
            <div className="m-auto sm:m-9">
              <p className="text-sm font-extrabold text-center mb-4 mr-4">Enter the OTP</p>
              <OTPInput
                className="ml-11 mb-6"
                inputStyles={{
                  border: 0,
                  marginRight: 20,
                  borderBottom: '2px solid #2C5E9E ',
                  focus: { border: '2px solid #2C5E9E ' }
                }}
                value={_this.OTP}
                onChange={_this.setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
              <Button
                onClick={() => _this.onOtpSubmit()}
                className="mr-4 w-72 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
                block
              >
                Submit
              </Button>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center ml-7 my-4">
              <div className="flex flex-col justify-center mb-2">
                <p className="text-xs text-gray-700 font-semibold ">BUSINESS DESCRIPTION</p>
                <Input.TextArea
                  className="w-72 h-9"
                  label={'business_description'}
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
              <div className="flex flex-col justify-center mb-2">
                <p className="text-xs text-gray-700 font-semibold ">BUSINESS ADDRESS</p>
                <Input.TextArea
                  className="w-72 h-9"
                  label={'business_description'}
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

              <div className="flex flex-col justify-center mb-2">
                <p className="text-xs text-gray-700 font-semibold">COUNTRY</p>
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

              <div className="flex flex-col justify-center mb-4">
                <p className="text-xs text-gray-700 font-semibold ">PHONE</p>
                <Input
                  addonBefore={_this.businessDetails.country_code}
                  className="w-72 h-9"
                  label={'business_phone'}
                  onChange={(e) => {
                    _this.setBusinessDetails((prev) => ({
                      ...prev,
                      business_phone: e.target.value
                    }));
                  }}
                />
              </div>
              <div className="flex flex-col justify-center mb-4">
                <p className="text-xs text-gray-700 font-semibold ">SERVICES</p>
                <Input
                  value={_this.servicesInput}
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
                    <DeleteOutlined
                      fill="#2C5E9E"
                      size={20}
                      className="hover:text-red-500 cursor-pointer font-bold"
                      onClick={(index) => {
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
          )}
        </div>
      </div>

      <Marketing />
    </div>
  );
};

export default Body;

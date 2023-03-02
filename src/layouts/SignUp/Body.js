import React from 'react';
import Link from 'next/link';
import Marketing from '../Home/Marketing';
import { Button, Input } from 'antd';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import EnterOtp from './EnterOtp';
import AddBusinessDetails from './AddBusinessDetails';

const Body = ({ _this }) => {
  return (
    <div className="w-screen flex flex-col sm:flex-row min-h-screen home_gradient_bg">
      <div className="flex sm:w-[425px] w-full flex-col bg-background justify-start items-start p-8">
        {!_this.enterBusinessDetails && (
          <h1 className="text-4xl font-medium text-left whitespace-normal break-normal leading-normal text-gray-700">
            Get Started <br /> Absolutely Free
          </h1>
        )}

        <h1 className="mt-3 text-xl font-medium text-left text-gray-400">
          {_this.enterBusinessDetails
            ? 'Enter Your Business Details'
            : 'Create Your Business Account'}
        </h1>

        {_this.otpReceived === false && _this.enterBusinessDetails === false ? (
          <div className="flex flex-col justify-center items-center my-4">
            <div className="flex flex-col justify-center mb-6">
              <label className="text-sm text-gray-500 font-medium mb-2">Business Name</label>
              <Input
                className="w-72 h-9"
                placeholder="Business Name"
                value={_this.formValue.name}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    name: e.target.value
                  }));
                }}
              />
            </div>
            <div className="flex flex-col justify-center mb-6">
              <label className="text-sm text-gray-500 font-medium mb-2">
                Business Email Address
              </label>
              <Input
                className="w-72 h-9"
                placeholder="Business Email Address"
                value={_this.formValue.email}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    email: e.target.value
                  }));
                }}
              />
            </div>
            <div className="flex flex-col justify-center mb-6">
              <label className="text-sm text-gray-500 font-medium mb-2">Password</label>
              <Input.Password
                className="w-72 h-9"
                placeholder="Password"
                value={_this.formValue.password}
                iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    password: e.target.value
                  }));
                }}
              />
            </div>
            <div className="flex flex-col justify-center mb-8">
              <label className="text-sm text-gray-500 font-medium mb-2">Confirm Password</label>
              <Input.Password
                className="w-72 h-9"
                placeholder="Confirm Password"
                value={_this.formValue.confirmPassword}
                iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
                onChange={(e) => {
                  _this.setFormValue((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value
                  }));
                }}
              />
            </div>

            <div className="w-72 text-sm text-gray-500 whitespace-normal break-normal text-center mb-2">
              <p>
                By signing up, you agree to our{' '}
                <span className="text-secondary cursor-pointer">Terms & Conditions</span> and{' '}
                <span className="text-secondary cursor-pointer">Privacy Policy</span>.{' '}
              </p>
            </div>

            <Button
              onClick={() => _this.onSignUp()}
              className="mb-2 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
              block
            >
              Get Started
            </Button>
            <p className="m-2 text-sm font-medium text-center text-gray-400">
              Already have an account?{' '}
              <Link href="/">
                <span className="cursor-pointer text-primary">Sign In</span>
              </Link>
            </p>
          </div>
        ) : _this.otpReceived === true ? (
          <EnterOtp _this={_this} />
        ) : (
          <AddBusinessDetails _this={_this} />
        )}
      </div>

      <Marketing />
    </div>
  );
};

export default Body;

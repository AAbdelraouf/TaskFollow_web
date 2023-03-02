import React from 'react';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Login = ({ _this }) => {
  return (
    <div className="flex-1 flex justify-start">
      <div className="flex sm:w-[425px] w-full flex-col bg-background justify-start items-start p-8">
        <h1 className="text-4xl font-medium text-left whitespace-normal break-normal leading-normal text-gray-700">
          Get Started Absolutely Free
        </h1>
        <h1 className="mt-3 text-xl font-medium text-left text-gray-400">
          Sign In To Your Account
        </h1>

        <div className="flex flex-col justify-center items-center my-">
          <div className="flex flex-col justify-center mb-6">
            <label className="text-sm text-gray-500 font-medium mb-2">Business Email Address</label>
            <Input
              className="w-72 h-9"
              placeholder="Business Email Address"
              label={'email'}
              onChange={(e) => {
                _this.setFormValue((prev) => ({
                  ...prev,
                  email: e.target.value
                }));
              }}
            />
          </div>

          <div className="flex flex-col justify-center mb-8">
            <label className="text-sm text-gray-500 font-medium mb-2">Password</label>
            <Input.Password
              className="w-72 h-9"
              placeholder="Password"
              label={'Password'}
              iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
              onChange={(e) => {
                _this.setFormValue((prev) => ({
                  ...prev,
                  password: e.target.value
                }));
              }}
            />
          </div>

          <Button
            onClick={() => {
              _this.onLogin();
            }}
            className="mb-2 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full mt-4"
            block
          >
            Login
          </Button>
          <p className=" m-2 text-sm font-medium text-center text-gray-500">
            Don't have an account?
            <Link href="/sign-up">
              <span className="cursor-pointer text-primary"> Sign Up</span>
            </Link>
          </p>
        </div>

        <div className="flex flex-col justify-center mb-8">
          <label className="text-sm text-gray-500 font-medium mb-2">Password</label>
          <Input.Password
            className="w-72 h-9"
            placeholder="Password"
            label={'Password'}
            iconRender={(visible) => (visible ? <BsEye size={15} /> : <BsEyeSlash size={15} />)}
            onChange={(e) => {
              _this.setFormValue((prev) => ({
                ...prev,
                password: e.target.value
              }));
            }}
          />
        </div>

        <Button
          onClick={() => {
            _this.onLogin();
          }}
          className="mb-2 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full mt-4"
          block
        >
          Login
        </Button>
        <p className=" m-2 text-sm font-medium text-center text-gray-400">
          Don't have an account?
          <Link href="/sign-up">
            <span className="cursor-pointer text-primary"> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import Link from 'next/link';
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

const Login = ({ _this }) => {
  return (
    <div className="flex-1 flex basis-1/4 justify-start">
      <div className="flex sm:w-[425px] w-full flex-col bg-background justify-evenly items-start p-6">
        <h1 className=" ml-7 text-4xl text-gray-700 font-medium text-left whitespace-normal break-normal leading-normal">
          Get Started Absolutely Free
        </h1>
        <h1 className=" ml-7 mt-4 text-xl font-medium text-left text-gray-400">
          Sign In To Your Account
        </h1>

        <div className="ml-7">
          <div className="flex flex-col justify-center mb-8">
            <p className="text-xs text-gray-700  font-semibold">BUSINESS EMAIL ADDRESS</p>
            <Input
              className="w-72 h-9"
              label={'EMAIL'}
              onChange={(e) => {
                _this.setFormValue((prev) => ({
                  ...prev,
                  email: e.target.value
                }));
              }}
            />
          </div>

          <div className="flex flex-col justify-center mb-4">
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

          <Button
            onClick={() => {
              _this.onLogin();
            }}
            className=" bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full mt-4"
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
    </div>
  );
};

export default Login;

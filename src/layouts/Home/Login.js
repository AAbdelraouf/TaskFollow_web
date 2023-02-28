import React from 'react';
import Link from 'next/link';
import { Form, Button, Input } from 'rsuite';

const Login = ({ _this }) => {
  return (
    <div className="flex-1 flex basis-1/4 justify-start">
      <div className="flex sm:w-[425px] w-full flex-col bg-white justify-evenly items-start p-6">
        <h1 className=" ml-7 text-4xl font-medium text-left whitespace-normal break-normal leading-normal">
          Get Started Absolutely Free
        </h1>
        <h1 className=" ml-7 mt-4 text-xl font-medium text-left text-gray-400">
          Sign In To Your Account
        </h1>
        <Form
          fluid
          ref={_this.formRef}
          onChange={_this.setFormValue}
          onCheck={_this.setFormError}
          formValue={_this.formValue}
          className="flex flex-col p-7 justify-between"
        >
          <Form.Group controlId="email-1" className="my-4">
            <Form.ControlLabel className="text-xs font-extrabold ">
              BUSINESS EMAIL ADDRESS
            </Form.ControlLabel>
            <Form.Control name="email" type="email" />
          </Form.Group>

          <Form.Group controlId="password-1" className="my-4">
            <Form.ControlLabel className="text-xs font-extrabold ">PASSWORD</Form.ControlLabel>
            <Form.Control name="password" type="password" autoComplete="off" />
          </Form.Group>
          <Form.Group>
            <Button
              onClick={() => {
                _this.onLogin();
              }}
              className="w-72 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full mt-4"
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
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;

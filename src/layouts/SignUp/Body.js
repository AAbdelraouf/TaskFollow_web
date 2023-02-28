import Link from 'next/link';
import React from 'react';
//import { Header } from '@/components';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber } from 'rsuite';

const Body = () => {
  const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);
  return (
    <div className="w-screen flex flex-col sm:flex-row justify-center h-screen home_gradient_bg">
      <div className="flex-1 flex basis-1/4 justify-start">
        <div className="flex sm:w-[425px] w-full flex-col bg-white justify-evenly items-start p-6">
          {/* <img src={LogoImage} alt="health service llc logo" className="w-2/4 h-auto" /> */}
          <h1 className=" ml-7 text-4xl font-medium text-left whitespace-normal break-normal leading-normal">
            Get Started Absolutely Free
          </h1>
          <h1 className=" ml-7 mt-3 text-xl font-medium text-left text-gray-400">
            Create A Business Account
          </h1>
          <Form fluid className="flex flex-col p-7 justiy-center">
            <Form.Group controlId="name-1">
              <Form.ControlLabel className="text-xs font-extrabold ">
                BUSINESS NAME
              </Form.ControlLabel>
              <Form.Control name="email" type="email" />
            </Form.Group>
            <Form.Group controlId="email-1">
              <Form.ControlLabel className="text-xs font-extrabold ">
                BUSINESS EMAIL ADDRESS
              </Form.ControlLabel>
              <Form.Control name="email" type="email" />
            </Form.Group>

            <Form.Group controlId="password-1">
              <Form.ControlLabel className="text-xs font-extrabold ">PASSWORD</Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>

            <Form.Group controlId="cnf-password">
              <Form.ControlLabel className="text-xs font-extrabold ">
                CONFIRM PASSWORD
              </Form.ControlLabel>
              <Form.Control name="password" type="password" autoComplete="off" />
            </Form.Group>

            <Form.Group>
              <Button
                className="w-72 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
                block
              >
                Get Started
              </Button>
              <p className=" m-2 text-sm font-medium text-center text-gray-400">
                Already have an account?{' '}
                <Link href={'/'}>
                  <span className="cursor-pointer text-primary">Sign In</span>
                </Link>
              </p>
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="flex-1 basis-2/4 text-white p-4">
        <h1>Taskfollow Logo</h1>
        <p>Lorep Lipsum about us</p>
      </div>
    </div>
  );
};

export default Body;

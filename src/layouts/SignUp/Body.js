import Link from 'next/link';
import React from 'react';
import Marketing from '../Home/Marketing';
import OTPInput, { ResendOTP } from 'otp-input-react';
import { BsPlusSquareFill } from 'react-icons/bs';
import { Form, ButtonToolbar, Button, Input, InputGroup, InputNumber, SelectPicker } from 'rsuite';
import FormControl from 'rsuite/esm/FormControl';
import FormControlLabel from 'rsuite/esm/FormControlLabel';

const Body = ({ _this }) => {
  const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

  const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    (item) => ({ label: item, value: item })
  );
  return (
    <div className="w-screen flex flex-col sm:flex-row justify-center h-screen home_gradient_bg">
      <div className="flex-1 flex basis-1/4 justify-start">
        <div className="flex sm:w-[425px] w-full flex-col bg-white justify-center items-start p-6">
          {!_this.enterBusinessDetails && (
            <h1 className=" ml-7 text-4xl font-medium text-left whitespace-normal break-normal leading-normal">
              Get Started <br /> Absolutely Free
            </h1>
          )}

          <h1 className=" ml-7 mt-3 text-xl font-medium text-left text-gray-400">
            {_this.enterBusinessDetails
              ? 'Enter Your Business Details'
              : 'Create Your Business Account'}
          </h1>

          {_this.otpReceived === false && _this.enterBusinessDetails === false ? (
            <Form
              fluid
              className="flex flex-col p-7 justiy-center"
              onChange={_this.setFormValue}
              formValue={_this.formValue}
            >
              <Form.Group controlId="name-1">
                <Form.ControlLabel className="text-xs font-extrabold ">
                  BUSINESS NAME
                </Form.ControlLabel>
                <Form.Control name="name" type="name" />
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
                <Form.Control name="confirmPassword" type="password" autoComplete="off" />
              </Form.Group>

              <Form.Group>
                <Button
                  onClick={() => _this.onSignUp()}
                  className="w-72 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
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
              </Form.Group>
            </Form>
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
            <div>
              <Form
                fluid
                className="flex flex-col p-7 justiy-center"
                onChange={_this.setBusinessDetails}
                formValue={_this.businessDetails}
              >
                <Form.Group controlId="businessDescription">
                  <Form.ControlLabel className="text-xs font-extrabold w-72 ">
                    BUSINESS DESCRIPTION
                  </Form.ControlLabel>
                  <Form.Control name="business_description" rows={3} accepter={Textarea} />
                </Form.Group>

                <Form.Group controlId="businessAddress">
                  <Form.ControlLabel className="text-xs font-extrabold ">
                    BUSINESS ADDRESS
                  </Form.ControlLabel>
                  <Form.Control name="business_address" rows={3} accepter={Textarea} />
                </Form.Group>

                <Form.Group controlId="country">
                  <Form.ControlLabel className="text-xs font-extrabold ">
                    Select Country
                  </Form.ControlLabel>
                  <SelectPicker data={data} name="country_code" className="w-72" />
                </Form.Group>

                <Form.Group controlId="mobileNumber">
                  <Form.ControlLabel className="text-xs font-extrabold ">PHONE</Form.ControlLabel>
                  <Form.Control name="business_phone" type="name" />
                </Form.Group>

                <Form.Group controlId="services">
                  <Form.ControlLabel className="text-xs font-extrabold ">
                    SERVICES
                  </Form.ControlLabel>
                  <InputGroup>
                    <Form.Control name="business_services_offered" type="name" />
                    <InputGroup.Addon>
                      <BsPlusSquareFill
                        size={20}
                        fill="#2C5E9E"
                        className="text-primary cursor-pointer font-extrabold"
                        onClick={null}
                      />
                    </InputGroup.Addon>
                  </InputGroup>
                </Form.Group>

                <Button
                  onClick={() => {
                    _this.onBusinessDetailsSubmit();
                  }}
                  className="w-72 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
                  block
                >
                  Add Business
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>

      <Marketing />
    </div>
  );
};

export default Body;

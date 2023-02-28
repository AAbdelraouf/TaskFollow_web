import React, { useState } from 'react';
import { loadingStart, loadingStop, signup } from '@/redux/action';
import { useDispatch } from 'react-redux';
import Body from './Body';
import API from '@/api';
import { toast } from 'react-toastify';

const SignUp = () => {
  const dispatch = useDispatch();
  const [otpReceived, setOtpReceived] = useState(false);
  const [OTP, setOTP] = useState('');
  const [enterBusinessDetails, setEnterBusinessSetails] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    country_code: '+91',
    business_phone: '',
    business_description: '',
    business_address: '',
    business_services_offered: []
  });

  console.log(businessDetails);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    country_code: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    otp: '',
    account_type: 'business'
  });

  console.log(OTP);
  const onSignUp = () => {
    if (formValue.password !== formValue.confirmPassword) {
      return toast.error("Password doesn't match");
    }
    dispatch(loadingStart());
    API.auth
      .SignUp(formValue)
      .then((response) => {
        if (response) {
          if (response.otp) {
            console.log(response);
            setOtpReceived(true);
            dispatch(signup(response));
            toast.success('Otp has been set to your Email account');
          }
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onOtpSubmit = () => {
    const payload = {
      ...formValue,
      otp: OTP
    };
    dispatch(loadingStart());
    API.auth
      .SignUp(payload)
      .then((response) => {
        if (response) {
          console.log(response);
          setOtpReceived(false);
          setEnterBusinessSetails(true);
          dispatch(signup(response));
          toast.success('Otp verified Successfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onBusinessDetailsSubmit = () => {
    dispatch(loadingStart());
    API.auth
      .AddBusinessDetails(businessDetails)
      .then((response) => {
        if (response) {
          console.log(response);
          toast.success('Business Generated');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    otpReceived,
    setOtpReceived,
    onSignUp,
    onOtpSubmit,
    OTP,
    setOTP,
    enterBusinessDetails,
    onBusinessDetailsSubmit,
    businessDetails,
    setBusinessDetails
  };

  return (
    <main>
      <Body _this={_this} />
    </main>
  );
};

export default SignUp;

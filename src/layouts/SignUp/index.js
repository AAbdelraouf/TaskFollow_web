import React, { useState } from 'react';
import Body from './Body';
import API from '@/api';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadingStart, loadingStop, login, signup } from '@/redux/action';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import country_code from '@/utility/country.json';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userDetails = useSelector((state) => state.session.userSession);
  const [countryList, setCountryList] = useState(country_code.country_code);
  const [otpReceived, setOtpReceived] = useState(false);
  const [OTP, setOTP] = useState('');
  const [servicesInput, setServicesInput] = useState('');
  const [enterBusinessDetails, setEnterBusinessSetails] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    country_code: '+1',
    business_phone: '',
    business_description: '',
    business_address: '',
    business_services_offered: []
  });

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
    account_type: 'business'
  });

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
          const temp = { ...userDetails, business_details: response };
          dispatch(login(temp));
          router.push('/dashboard');
          setEnterBusinessSetails(false);
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onServiceAdd = () => {
    const temp = [...businessDetails.business_services_offered, servicesInput];

    setBusinessDetails((prev) => ({
      ...prev,
      business_services_offered: temp
    }));
    setServicesInput('');
  };

  const onServiceDelete = (index) => {
    const temp = [...businessDetails.business_services_offered];
    temp.splice(index, 1);
    setBusinessDetails((prev) => ({
      ...prev,
      business_services_offered: temp
    }));
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
    setBusinessDetails,
    countryList,
    servicesInput,
    setServicesInput,
    onServiceAdd,
    onServiceDelete
  };

  return (
    <main>
      <Body _this={_this} />
    </main>
  );
};

export default SignUp;

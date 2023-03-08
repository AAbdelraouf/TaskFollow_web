import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Body from './Body';
import { Container } from '@/components';
import API from '@/api';
import { logout } from '@/redux/action';
import { useRouter } from 'next/router';
import { loadingStart, loadingStop, login } from '@/redux/action';
import { toast } from 'react-toastify';
import country_code from '@/utility/country.json';

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [countryList, setCountryList] = useState(country_code.country_code);
  const [passwordModalVisibility, setPasswordModalVisibility] = useState(false);
  const [deleteAccountModalVisibility, setDeleteAccountModalVisibility] = useState(false);
  const [editProfileModalVisibility, setEditProfileModalVisibility] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: '',
    phone: '',
    country_code: ''
  });
  const [editBusinessDetailsModalVisibility, setEditBusinessDetailsModalVisibility] =
    useState(false);
  const [passwords, setPasswords] = useState({
    old_password: '',
    password: '',
    confirm_password: ''
  });
  const userSession = useSelector((state) => state.session.userSession);
  const [businessDetails, setBusinessDetails] = useState({
    country_code: '',
    business_phone: '',
    business_address: '',
    business_description: '',
    business_services_offered: []
  });
  const [servicesInput, setServicesInput] = useState('');
  const [displayBusinessPhone, setDisplayBusinessPhone] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (userSession) {
      console.log(userSession);
      setDisplayBusinessPhone(userSession.business_details.business_phone);
      // const display_business_phone = userSession.business_details.business_phone;

      const extracted_country_code = userSession.business_details.business_phone.split('-')[0];
      const extracted_business_phone = userSession.business_details.business_phone.split('-')[1];
      setBusinessDetails({
        country_code: userSession.business_details.business_phone.split('-')[0],
        business_phone: extracted_business_phone,
        business_address: userSession.business_details.business_address,
        business_description: userSession.business_details.business_description,
        business_services_offered: userSession.business_details.business_services_offered
      });

      setProfileDetails((prev) => ({
        ...prev,
        phone: extracted_business_phone,
        country_code: extracted_country_code
      }));
    }
  }, [userSession]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onAddService = () => {
    const value = [...businessDetails.business_services_offered, servicesInput];

    if (servicesInput == '') {
    } else {
      setBusinessDetails((prev) => ({
        ...prev,
        business_services_offered: value
      }));
      setServicesInput('');
    }
    console.log(businessDetails.business_services_offered);
  };

  const onDeleteService = (index) => {
    const temp = [...businessDetails.business_services_offered];
    temp.splice(index, 1);

    setBusinessDetails((prev) => ({
      ...prev,
      business_services_offered: temp
    }));
  };

  const onModalClose = () => {
    setEditBusinessDetailsModalVisibility(false);
    if (userSession) {
      setBusinessDetails({
        country_code: userSession.business_details.business_phone.split('-')[0],
        business_phone: userSession.business_details.business_phone.split('-')[1],
        business_address: userSession.business_details.business_address,
        business_description: userSession.business_details.business_description,
        business_services_offered: userSession.business_details.business_services_offered
      });
    }
  };

  const onUpdateBusinessDetails = () => {
    // const input = businessDetails.business_phone;
    // const regex = /[!@#$%^&*(),.?":;<>\{\}\[\]\\\/\+\-=]/g;
    // if (regex.test(input)) {
    //   return toast.error('Invalid Phone Number');
    // }

    console.log(businessDetails);

    const updated_business_phone =
      businessDetails.country_code + '-' + businessDetails.business_phone;
    dispatch(loadingStart());
    API.auth
      .UpdateBusinessDetails(businessDetails)
      .then((response) => {
        if (response) {
          toast.success(response.message);
          console.log(response);
          const updatedSession = {
            ...userSession,
            country_code: businessDetails.country_code,
            business_details: { ...businessDetails, business_phone: updated_business_phone }
          };
          dispatch(login(updatedSession));
          console.log(updatedSession);
          setEditBusinessDetailsModalVisibility(false);
          toast.success('Business Details Updated Sucessfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const handleLogout = () => {
    dispatch(loadingStart());
    dispatch(logout());
    router.push('/').finally(() => {
      dispatch(loadingStop());
    });
  };

  const onAccountDelete = () => {
    dispatch(loadingStart());
    API.business
      .DeleteAccount()
      .then((response) => {
        if (response) {
          toast.success(response.message);
          setDeleteAccountModalVisibility(false);
          toast.success('Account Deleted Sucessfully.');
          router.push('/sign-up');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const changePassword = () => {
    if (passwords.old_password == passwords.password) {
      return toast.error('Old Password and New Password Should be Different.');
    }

    dispatch(loadingStart());
    API.business
      .changePassword(passwords)
      .then((response) => {
        if (response) {
          toast.success(response.message);
          setPasswords((prev) => ({
            ...prev,
            old_password: '',
            password: '',
            confirm_password: ''
          }));
          setPasswordModalVisibility(false);
          toast.success('Password Changed Sucessfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onEditProfileSubmit = () => {
    dispatch(loadingStart());
    API.business
      .EditProfile(profileDetails)
      .then((response) => {
        if (response) {
          toast.success(response.message);
          console.log(response);
          const updatedSession = { ...userSession, name: profileDetails.name };
          dispatch(login(updatedSession));
          setProfileDetails((prev) => ({
            ...prev,
            name: '',
            phone: '',
            country_code: ''
          }));
          setEditProfileModalVisibility(false);
          toast.success('Profile Updated Sucessfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    categories,
    handleLogout,
    passwordModalVisibility,
    setPasswordModalVisibility,
    deleteAccountModalVisibility,
    setDeleteAccountModalVisibility,
    onAccountDelete,
    changePassword,
    passwords,
    setPasswords,
    editBusinessDetailsModalVisibility,
    setEditBusinessDetailsModalVisibility,
    servicesInput,
    setServicesInput,
    onAddService,
    onDeleteService,
    onModalClose,
    businessDetails,
    setBusinessDetails,
    onUpdateBusinessDetails,
    editProfileModalVisibility,
    setEditProfileModalVisibility,
    countryList,
    onEditProfileSubmit,
    profileDetails,
    setProfileDetails,
    displayBusinessPhone,
    togglePasswordVisibility
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Settings;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Body from './Body';
import { Container } from '@/components';
import API from '@/api';
import { logout } from '@/redux/action';
import { useRouter } from 'next/router';
import { loadingStart, loadingStop } from '@/redux/action';
import { toast } from 'react-toastify';

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [passwordModalVisibility, setPasswordModalVisibility] = useState(false);
  const [deleteAccountModalVisibility, setDeleteAccountModalVisibility] = useState(false);
  const [passwords, setPasswords] = useState({
    old_password: '',
    password: '',
    confirm_password: ''
  });
  const userSession = useSelector((state) => state.session.userSession);
  const [businessDetails, setBusinessDetails] = useState(null);

  useEffect(() => {
    if (userSession) {
      setBusinessDetails({
        phone: userSession.business_details.business_phone,
        address: userSession.business_details.business_address,
        description: userSession.business_details.business_description,
        services_offered: userSession.business_details.business_services_offered
      });
    }
  }, [userSession]);

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
    businessDetails
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Settings;

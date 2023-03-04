import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

  useEffect(() => {
    const fetchedCategories = [
      'first',
      'second',
      'third',
      'Category 1',
      'Category 2',
      'Category 3',
      'first',
      'second',
      'third',
      'Category 1'
    ];
    setCategories(fetchedCategories);

    // getBusinessDetails();
  }, []);

  const getBusinessDetails = () => {
    dispatch(loadingStart());
    API.business
      .GetBusinessDetails()
      .then((response) => {
        if (response) {
          setCategories(response);
          console.log(response);
        }
      })
      .finally(() => dispatch(loadingStop()));
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
          router.push('/sign-up');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const changePassword = () => {
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
    setPasswords
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Settings;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Body from './Body';
import { Container } from '@/components';
import API from '@/api';
import { sessionActions } from '@/redux/reducer/session';
import { useRouter } from 'next/router';

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [changePasswordModalVisibility, setChangePasswordModalVisibility] = useState(false);

  const handleLogout = () => {
    // dispatch(sessionActions.logout());
    // dispatch(logout());
    // router.push('/');
  };

  useEffect(() => {
    const fetchedCategories = [
      'first',
      'second',
      'third'
      // 'Category 1',
      // 'Category 2',
      // 'Category 3'
    ];
    setCategories(fetchedCategories);
  }, []);

  const _this = {
    categories,
    handleLogout,
    changePasswordModalVisibility,
    setChangePasswordModalVisibility
  };

  return (
    <Container>
      <Body _this={_this} />
    </Container>
  );
};

export default Settings;

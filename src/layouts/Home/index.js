import React, { useState } from 'react';
import Body from './Body';
import API from '@/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const onLogin = () => {
    dispatch(loadingStart());
    API.auth
      .Login(formValue)
      .then((response) => {
        if (response) {
          dispatch(login(response));
          router.push('/dashboard');
          toast.success('Logged in Successfully');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formValue,
    setFormValue,
    onLogin
  };

  return (
    <main>
      <Body {..._this} />
    </main>
  );
};

export default Home;

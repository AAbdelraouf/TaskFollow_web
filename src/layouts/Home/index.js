import React, { useEffect, useState, useRef } from 'react';
import Body from './Body';
import API from '@/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });

  const onLogin = () => {
    dispatch(loadingStart());
    API.Login(formValue)
      .then((response) => {
        if (response) {
          dispatch(login(response));
          toast.success('Successful Login');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const _this = {
    formRef,
    formError,
    formValue,
    setFormError,
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

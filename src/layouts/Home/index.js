import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'rsuite';
import Body from './Body';
import apiPool from '@/api';
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
    apiPool
      .Login(formValue)
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

  return (
    <main>
      <Body
        _this={{
          formRef,
          formError,
          setFormError,
          formValue,
          setFormValue,
          onLogin
        }}
      />
    </main>
  );
};

export default Home;

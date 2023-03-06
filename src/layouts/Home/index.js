import React, { useState } from 'react';
import Body from './Body';
import API from '@/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';

const Home = () => {
  const router = useRouter();
  const userSession = useSelector((state) => state.session.userSession);
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
          if (response.account_type === 'customer') {
            return toast.error('Only Business Account is allowed to Login');
          }
          dispatch(login(response));
          if (userSession?.business_details === '') {
            return router.push({
              pathname: '/sign-up',
              query: {
                businessData: true
              }
            });
          }
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

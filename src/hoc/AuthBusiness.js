import React, { useState } from 'react';
import Body from './Body';
import API from '@/api';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop, login } from '@/redux/action';

const AuthBusiness = (prop) => {
  const router = useRouter();
  const userSession = useSelector((state) => state.session.userSession);
  const dispatch = useDispatch();

  return (
    <main>
      <Body {..._this} />
    </main>
  );
};

export default AuthBusiness;

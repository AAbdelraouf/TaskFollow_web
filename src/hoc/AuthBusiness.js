import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Page403 } from '@/components';

const AuthBusiness = (props) => {
  const router = useRouter();
  const userSession = useSelector((state) => state.session.userSession);

  return userSession && (userSession.account_type != 'business' ? <Page403 /> : props.children);
};

export default AuthBusiness;

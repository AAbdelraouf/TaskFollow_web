import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page403 } from '@/components';

const AuthSession = (props) => {
  const userSession = useSelector((state) => state.session.userSession);

  if (userSession == '') return <></>;

  return userSession == null ? <Page403 /> : props.children;
};

export default AuthSession;

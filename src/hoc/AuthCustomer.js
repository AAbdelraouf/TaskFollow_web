import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page403 } from '@/components';

const AuthCustomer = (props) => {
  const userSession = useSelector((state) => state.session.userSession);

  if (userSession == '') return <></>;

  return userSession == null || userSession.account_type != 'customer' ? (
    <Page403 />
  ) : (
    props.children
  );
};

export default AuthCustomer;

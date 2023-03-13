import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page403 } from '@/components';

const AuthBusiness = (props) => {
  const userSession = useSelector((state) => state.session.userSession);

  if (userSession == '') return <></>;

  return userSession == null || userSession.account_type != 'business' ? (
    <Page403 />
  ) : (
    props.children
  );
};

export default AuthBusiness;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page403 } from '@/components';
import { useRouter } from 'next/router';

const AuthBusiness = (props) => {
  const router = useRouter();
  const userSession = useSelector((state) => state.session.userSession);

  if (userSession == '') return <></>;
  if (userSession.business_details === '') {
    router.push('/sign-up?businessData=true');
  }

  return userSession == null || userSession.account_type != 'business' ? (
    <Page403 />
  ) : (
    props.children
  );
};

export default AuthBusiness;

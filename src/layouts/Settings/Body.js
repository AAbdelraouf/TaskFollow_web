import React from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import BusinessDetails from './BusinessDetails';
import DeleteAccountModal from './DeleteAccountModal';

const Body = (_this) => {
  return (
    <>
      <ChangePasswordModal {..._this} />
      <DeleteAccountModal {..._this} />
      <BusinessDetails {..._this} />
    </>
  );
};

export default Body;

import React from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import BusinessDetails from './BusinessDetails';
import DeleteAccountModal from './DeleteAccountModal';
import EditBusinessDetailsModal from './EditBusinessDetailsModal';
import EditProfile from './EditProfile';

const Body = (_this) => {
  return (
    <>
      <ChangePasswordModal {..._this} />
      <DeleteAccountModal {..._this} />
      <BusinessDetails {..._this} />
      <EditBusinessDetailsModal {..._this} />
      <EditProfile {..._this} />
    </>
  );
};

export default Body;

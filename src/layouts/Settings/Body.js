import React from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import BusinessDetails from './BusinessDetails';
import DeleteAccountModal from './DeleteAccountModal';
import EditBusinessDetailsModal from './EditBusinessDetailsModal';
import EditProfileModal from './EditProfileModal';

const Body = (_this) => {
  return (
    <>
      <ChangePasswordModal {..._this} />
      <DeleteAccountModal {..._this} />
      <BusinessDetails {..._this} />
      <EditBusinessDetailsModal {..._this} />
      <EditProfileModal {..._this} />
    </>
  );
};

export default Body;

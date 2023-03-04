import React from 'react';
import CustomerList from './CustomerList';
import AddCustomerModal from './AddCustomerModal';
import EditCustomerModal from './EditCustomerModal';
import DeleteCustomerModal from './DeleteCustomerModal';

const Body = (_this) => {
  return (
    <>
      <CustomerList {..._this} /> <AddCustomerModal {..._this} /> <EditCustomerModal {..._this} />{' '}
      <DeleteCustomerModal {..._this} />
    </>
  );
};

export default Body;

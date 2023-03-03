import React from 'react';
import CustomerList from './CustomerList';
import AddCustomerModal from './AddCustomerModal';

const Body = (_this) => {
  return (
    <>
      <CustomerList {..._this} /> <AddCustomerModal {..._this} />
    </>
  );
};

export default Body;

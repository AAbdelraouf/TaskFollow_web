import React, { useState } from 'react';
import Body from './Body';

const index = () => {
  const [addCustomerModalVisibility, setAddCustomerModalVisibility] = useState(false);
  const [addCustomerData, setAddCustomerData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const _this = {
    addCustomerModalVisibility,
    setAddCustomerModalVisibility,
    addCustomerData,
    setAddCustomerData
  };
  return (
    <div>
      <Body _this={_this} />
    </div>
  );
};

export default index;

import React, { useState } from 'react';
import Body from './Body';
import { Container } from '@/components';

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

    <Container>
      <Body _this={_this} />
    </Container>

  );
};

export default index;

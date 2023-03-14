import React, { useState, useEffect } from 'react';
import Body from './Body';
import { Container } from '@/components';
import { useRouter } from 'next/router';

const SharedTaskList = () => {
  const router = useRouter();
  const business_email = router.query.email;
  const [profileModalvisibility, setProfileModalvisibility] = useState(false);
  const [servicesOffered, setServicesOffered] = useState([]);

  useEffect(() => {
    const services = ['one', 'two', 'three'];
    setServicesOffered(services);
  }, []);

  const _this = {
    business_email,
    profileModalvisibility,
    setProfileModalvisibility,
    servicesOffered
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default SharedTaskList;

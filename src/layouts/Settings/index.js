import React, { useState, useEffect } from 'react';
import Body from './Body';
import { Container } from '@/components';

const Settings = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchedCategories = [
      'first',
      'second',
      'third'
      // 'Category 1',
      // 'Category 2',
      // 'Category 3'
    ];
    setCategories(fetchedCategories);
  }, []);

  const _this = {
    categories
  };

  return (
    <Container>
      <Body _this={_this} />
    </Container>
  );
};

export default Settings;

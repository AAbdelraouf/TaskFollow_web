import React, { useState, useEffect } from 'react';
import { Container } from '@/components';
import Body from './Body';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '@/redux/action';
import API from '@/api';

const SharedTasks = () => {
  const dispatch = useDispatch();
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    dispatch(loadingStart());
    API.customer
      .GetBusinessList()
      .then((response) => {
        if (response) {
          setBusinessList(response);
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const _this = {
    businessList
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default SharedTasks;

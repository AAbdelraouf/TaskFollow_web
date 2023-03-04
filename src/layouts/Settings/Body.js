import React from 'react';
import { Card } from 'antd';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import { MdOutlineEdit } from 'react-icons/md';
import { BiChevronRight, BiTrash } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import ChangePasswordModal from './ChangePasswordModal';
import BusinessDetails from './BusinessDetails';

const Body = ({ _this }) => {
  return (
    <>
      <ChangePasswordModal {..._this} /> <BusinessDetails {..._this} />
    </>
  );
};

export default Body;

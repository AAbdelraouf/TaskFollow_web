import React from 'react';
import {
  CloseCircleTwoTone,
  SettingOutlined,
  CloseOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  SearchOutlined
} from '@ant-design/icons';

import { Typography } from 'antd';
import { Button, Menu, Input, Card } from 'antd';
import { useState } from 'react';
import CustomerList from './CustomerList';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

const Body = ({ _this }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    getItem('Dashboard', '1', <PieChartOutlined className="py-2" />),
    getItem('Shared Tasks', '2', <DesktopOutlined className="py-2" />),
    getItem('Settings', '3', <SettingOutlined className="py-2" />)
    // getItem('example', 'sub1', <MailOutlined />, [
    //   getItem('Option 5', '5'),
    //   getItem('Option 6', '6'),
    //   getItem('Option 7', '7'),
    //   getItem('Option 8', '8')
    // ])
  ];

  return (
    <>
      <div className="flex h-screen relative duration-200 transition-all">
        <div
          className={
            collapsed
              ? 'relative w-[12%] md:w-[7%] h-full z-0'
              : 'absolute lg:relative w-full lg:w-[300px] h-full z-10'
          }
          style={{ background: 'whitesmoke' }}
        >
          <Button
            onClick={toggleCollapsed}
            className={
              collapsed
                ? 'bg-transparent border-0 flex justify-center pt-1 items-center h-[7%] w-full'
                : 'bg-transparent border-0 flex justify-start pt-1 pl-6 items-center h-[7%] w-full'
            }
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="text-xl" />
            ) : (
              <CloseCircleTwoTone className="text-xl" />
            )}
          </Button>
          <Menu
            className="h-[93%] w-auto py-2"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
            style={{ background: 'whitesmoke' }}
          />
        </div>

        <div className="relative flex flex-col items-top w-[88%] md:w-[93%] h-full z-0 px-5 lg:px-0 bg-white">
          <Card className="bg-background h-24 flex flex-col justify-center shadow-md p-6 w-full mb-4">
            <div className="flex justify-between items-center ">
              <Input
                size="default-size"
                className="h-10 w-[300px] mt-2 mr-3 z-0"
                placeholder="Search"
                prefix={<SearchOutlined className="mr-2" />}
              />

              <Typography.Text className="text-xl text-sky-500 pt-2 z-0">
                Company Name
              </Typography.Text>
            </div>
          </Card>
          <CustomerList _this={_this} />
        </div>
      </div>
    </>
  );
};

export default Body;

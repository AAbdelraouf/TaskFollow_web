import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { Button, Menu, Input, Card } from 'antd';
import {
  CloseCircleTwoTone,
  SettingOutlined,
  CloseOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined
} from '@ant-design/icons';

const items = [
  {
    key: 'dashboard',
    icon: <PieChartOutlined className="py-2" />,
    children: '',
    label: 'Dashboard',
    type: ''
  },
  {
    key: 'shared-tasks',
    icon: <DesktopOutlined className="py-2" />,
    children: '',
    label: 'Shared Tasks',
    type: ''
  },
  {
    key: 'settings',
    icon: <SettingOutlined className="py-2" />,
    children: '',
    label: 'Settings',
    type: ''
  }
];

const Container = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex flex-1 min-h-screen flex-row relative bg-background">
      <div
        className={`w-48 relative flex flex-col header_nav_profile menu ${
          collapsed && 'menu_collapsed'
        }`}
      >
        <div className="h-40">Name image and profile pic</div>
        <Menu
          className="bg-background border-[0px]"
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={[]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      <div className="flex-1 px-5 lg:px-0">
        <div className="flex flex-col justify-center shadow-sm w-full mb-4">
          <div className="flex justify-between items-center py-2">
            <div className="ml-3 cursor-pointer" onClick={toggleCollapsed}>
              {collapsed ? (
                <MenuUnfoldOutlined className="text-xl" />
              ) : (
                <MenuFoldOutlined className="text-xl" />
              )}
            </div>
            <Input
              size="default-size"
              className="h-10 w-[300px] mr-3"
              placeholder="Search"
              prefix={<SearchOutlined className="mr-2" />}
            />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export { Container };

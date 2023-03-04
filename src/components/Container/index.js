import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { Button, Menu, Input, Card } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Menu, Input } from 'antd';
import {
  SettingOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const items = [
  {
    key: '/dashboard',
    icon: <PieChartOutlined className="py-2" />,
    children: '',
    label: 'Dashboard',
    type: ''
  },
  {
    key: '/dashboard/shared-tasks',
    icon: <DesktopOutlined className="py-2" />,
    children: '',
    label: 'Shared Tasks',
    type: ''
  },
  {
    key: '/dashboard/settings',
    icon: <SettingOutlined className="py-2" />,
    children: '',
    label: 'Settings',
    type: ''
  }
];

const Container = (props) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const userSession = useSelector((state) => state.session.userSession);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    if (!collapsed) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [collapsed]);

  return (
    <div className="flex flex-row min-h-screen bg-background">
      <div
        className={
          collapsed
            ? `w-0 md:w-24 relative flex flex-col header_nav_profile menu bg-background transition-all`
            : `w-full md:w-48 pt-5 md:pt-0 h-full absolute md:relative z-10 md:z-0 bg-background transition-all flex flex-col header_nav_profile menu ${
                collapsed && 'menu_collapsed'
              }`
        }
      >
        <div
          className={`py-5 flex flex-col justify-center items-center ${
            collapsed ? `w-24` : `w-full`
          } transition-all`}
        >
          <span className="h-16 w-16 rounded-full border-2 bg-white text-secondary font-normal text-[40px] flex justify-center items-center">
            {userSession ? userSession.name.charAt(0).toUpperCase() : ''}
          </span>
          <div
            className={
              collapsed ? 'text-center opacity-0 transition-all' : 'text-center transition-all'
            }
          >
            <h2
              className={`text-black font-bold text-[21px] pt-2.5 px-1 break-none ${
                collapsed ? `break-none` : `break-all`
              }`}
            >
              {userSession.name}
            </h2>
            <h4
              className={`text-black font-semibold text-[15px] px-1 break-none ${
                collapsed ? `break-none` : `break-all`
              }`}
            >
              {userSession.email}
            </h4>
          </div>
        </div>
        <Menu
          onClick={({ key }) => {
            router.push(key);
          }}
          className="bg-background border-[0px] pl-1 md:pl-2 font-semibold h-full"
          defaultSelectedKeys={['dashboard']}
          defaultOpenKeys={[]}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>

      <div className="w-full h-full flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-3">
          <div className="ml-3 cursor-pointer z-20 relative" onClick={toggleCollapsed}>
            {collapsed ? (
              <MenuUnfoldOutlined className="text-xl z-20" />
            ) : (
              <MenuFoldOutlined className="text-xl z-20" />
            )}
          </div>
          <Input
            size="default-size"
            className="h-10 w-[240px] sm:w-[300px]"
            placeholder="Search"
            prefix={<SearchOutlined className="mr-2" />}
          />
        </div>

        {props.children}
      </div>
    </div>
  );
};

export { Container };

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Menu, Input } from 'antd';
import {
  SettingOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  CloseOutlined
} from '@ant-design/icons';

const items = [
  {
    key: '/dashboard/business',
    icon: <PieChartOutlined className="py-2" />,
    cildren: '',
    label: 'Dashboard',
    type: ''
  },
  {
    key: '/dashboard/customer',
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
  const currentKey = router.pathname;
  const [collapsed, setCollapsed] = useState(false);
  const userSession = useSelector((state) => state.session.userSession);

  const onMenuClick = ({ key }) => {
    router.push(key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="flex flex-1 min-h-screen flex-row relative bg-background">
        <div
          className={`bg-white relative flex flex-col header_nav_profile menu ${
            collapsed ? 'lg:w-20 w-0' : 'lg:w-56 w-screen'
          }`}
        >
          <div
            className="absolute cursor-pointer top-4 right-4 lg:hidden flex justify-center items-center w-10 h-10 border border-secondary rounded-md z-50"
            onClick={toggleCollapsed}
          >
            <CloseOutlined className="text-xl text-secondary" />
          </div>
          <div className="h-40">
            <div className={`pt-5 flex flex-col justify-center items-center transition-all`}>
              <span className="h-16 w-16 rounded-full border-2 bg-white text-secondary font-normal text-[40px] flex justify-center items-center">
                {userSession ? userSession.name.charAt(0).toUpperCase() : ''}
              </span>
              <div
                className={`text-center transition-all ${collapsed ? 'opacity-0' : 'opacity-100'}`}
              >
                <h2 className={`text-black font-bold text-md pt-2.5 px-1 break-none`}>
                  {userSession ? userSession.name : ''}
                </h2>
                <h4 className={`text-black px-1 text-xs break-none`}>
                  {userSession ? userSession.email : ''}
                </h4>
              </div>
            </div>
          </div>
          <Menu
            onClick={onMenuClick}
            className="bg-white border-[0px]"
            defaultSelectedKeys={[currentKey]}
            defaultOpenKeys={[]}
            mode="inline"
            inlineCollapsed={collapsed}
            items={items}
          />
        </div>
        <div className={`lg:flex-1 transition-all ${collapsed ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col justify-center shadow-md w-full mb-4 px-0 bg-primary">
            <div className="flex flex-row justify-between items-center py-2">
              <div className="ml-3 mr-10 cursor-pointer" onClick={toggleCollapsed}>
                {collapsed ? (
                  <MenuUnfoldOutlined className="text-xl text-white" />
                ) : (
                  <MenuFoldOutlined className="text-xl text-white" />
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
    </>
  );
};

export { Container };

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
import { Dropdown, Typography } from 'antd';
import { Button, Menu, Input, Card } from 'antd';
import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}

const Body = () => {
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

  const dropdownItems = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      )
    }
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
          <Card
            title="Customers"
            extra={
              <Button
                className="w-44 p-4 py-5 flex justify-between items-center text-white rounded-lg bg-primary hover:text-primary hover:bg-white"
                icon={<BsPlusLg />}
              >
                Add New Customer
              </Button>
            }
            className="bg-background text-gray-500 tracking-wider h-full flex flex-col justify-start shadow-md w-full"
          >
            <div className="flex justify-center items-center ">
              <Card className="bg-white shadow-md hover:shadow-lg w-full h-36 mb-4">
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="flex justify-start items-center">
                      <FaUserCircle size={25} color="grayLight" className=" mr-1" />
                      <h1 className="font-semibold text-lg text-primary ml-1 mt-1">Raees</h1>
                    </div>
                    <div className="font-semibold text-md">
                      Email: <span className="font-normal text-md">Raees@test.com</span>
                    </div>
                    <div className="font-semibold text-md">
                      Phone: <span className="font-normal text-md">+919874964451</span>
                    </div>
                    <div className="font-semibold text-md">
                      Tasks: <span className="font-normal text-md">0</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-end h-full self-end">
                    <Button
                      icon={<MdEditNote size={25} />}
                      className=" w-24 flex justify-center items-center bg-primary mx-2 text-white hover:bg-white hover:text-primary"
                    >
                      Edit
                    </Button>
                    <Button
                      icon={<MdDeleteForever size={20} />}
                      className=" flex items-center justify-center mx-2 bg-primary text-secondary hover:bg-white"
                    >
                      <p>Delete</p>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center items-center ">
              <Card className="bg-white shadow-md hover:shadow-lg w-full h-36 mb-4">
                <div className="flex justify-between items-center ">
                  <div>
                    <div className="flex justify-start items-center">
                      <FaUserCircle size={25} className="text-primary mr-1" />
                      <h1 className="font-semibold text-lg text-primary ml-1 mt-1">Raees</h1>
                    </div>
                    <div className="font-semibold text-md">
                      Email: <span className="font-normal text-md">Raees@test.com</span>
                    </div>
                    <div className="font-semibold text-md">
                      Phone: <span className="font-normal text-md">+919874964451</span>
                    </div>
                    <div className="font-semibold text-md">
                      Tasks: <span className="font-normal text-md">0</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-end h-full self-end">
                    <Button
                      icon={<MdEditNote size={25} />}
                      className=" w-24 flex justify-center items-center bg-grayLight mx-2 text-white hover:bg-white hover:text-primary"
                    >
                      Edit
                    </Button>
                    <Button
                      icon={<MdDeleteForever size={20} />}
                      className=" flex items-center justify-center mx-2 bg-primary text-secondary hover:bg-white"
                    >
                      <p>Delete</p>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Body;

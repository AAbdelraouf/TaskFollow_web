import React from 'react';
import { useState, useEffect } from 'react';
import { Card } from 'antd';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import { DeleteFilled } from '@ant-design/icons';
import { MdOutlineEdit } from 'react-icons/md';
import { FiChevronRight, FiLogOut } from 'react-icons/fi';

const index = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchedCategories = [
      'first',
      'second',
      'third',
      'Category 1',
      'Category 2',
      'Category 3'
    ];
    setCategories(fetchedCategories);
  }, []);

  return (
    <>
      <div className="flex-col md:flex-row  min-h-2/5 bg-blue-900 flex w-full flex gap-3 md:justify-evenly items-center p-8 rounded-b-2xl">
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="h-20 w-20 rounded-full bg-white text-secondary font-normal text-[40px] flex justify-center items-center">
            M
          </span>
          <br></br>
          <h2 style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '21px' }}>Demo User</h2>
          <h4
            style={{ color: '#ffffff', fontSize: '15px', color: 'whitesmoke' }}
            className="font-semibold"
          >
            demouser@gmail.con
          </h4>
        </div>
        <Button
          className="rounded-none h-12 w-full md:w-2/5 flex justify-center items-center gap-4 font-bold bg-white text-lg text-secondary hover:text-red-700"
          style={{ background: 'whitesmoke' }}
        >
          Edit Profile <FiChevronRight className="text-3xl font-bold" />
        </Button>
      </div>

      <div className="min-h-3/5 w-full p-5 flex flex-col md:flex-row justify-center items-center gap-4">
        <Card className="w-full md:w-3/5 h-full shadow-lg rounded-none md:rounded-xl">
          <Title level={5} className="flex justify-start items-end gap-3 text-black">
            <span>Phone :</span>{' '}
            <Typography className="font-semibold text-slate-600 text-[15px]">8564587453</Typography>
          </Title>
          <Title level={5} className="flex justify-start items-start lg:items-end gap-3 text-black">
            <span className="whitespace-nowrap">Address :</span>{' '}
            <Typography className="font-semibold text-slate-600 text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </Typography>
          </Title>
          <Title level={5} className="flex justify-start items-start lg:items-end gap-3 text-black">
            <span className="whitespace-nowrap">Description :</span>{' '}
            <Typography className="font-semibold text-slate-600 text-[15px]">
              Lorem ipsum dolor sit amet
            </Typography>
          </Title>
          <Title level={5}>Services Offered : </Title>
          <div className="max-w-[400px]">
            {categories.map((category) => (
              <button
                className="m-3 bg-blue-900 text-white text-center px-3 py-1 rounded-md font-semibold"
                style={{ minWidth: '80px' }}
                key={category}
                ghost
              >
                {category}
              </button>
            ))}
          </div>
          <span className="flex justify-end h-4 w-full">
            <MdOutlineEdit className="text-secondary text-2xl cursor-pointer" />
          </span>
        </Card>

        <Card className="shadow-lg rounded-none md:rounded-xl h-full w-full md:w-2/5 py-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <Button className="h-auto w-full flex justify-start items-center gap-4 px-3 py-2 shadow-lg rounded-xl border-0 border-l-4 border-blue-900 font-semibold text-lg">
              <div className="h-9 w-9 rounded-full bg-blue-900 flex text-center justify-center items-center">
                <MdOutlineEdit className="text-white text-xl" />
              </div>{' '}
              Change Password
            </Button>

            <Button className="h-auto w-full flex justify-start items-center gap-4 px-3 py-2 shadow-lg shadow-lg rounded-xl border-0 border-l-4 border-blue-900 font-semibold text-lg">
              <div className="h-9 w-9 rounded-full bg-blue-900 flex text-center justify-center items-center">
                <DeleteFilled className="text-white text-lg -mt-1" />
              </div>{' '}
              Delete Account
            </Button>

            <Button className="h-auto w-full flex justify-start items-center gap-4 px-3 py-2 shadow-xl shadow-lg rounded-xl border-0 border-l-4 border-blue-900 font-semibold text-lg">
              <div className="h-9 w-9 rounded-full bg-blue-900 flex text-center justify-center items-center">
                <FiLogOut className="text-white text-xl" />
              </div>{' '}
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default index;

import React from 'react';
import { Card } from 'antd';
import { Typography, Button } from 'antd';
const { Title } = Typography;
import { MdOutlineEdit } from 'react-icons/md';
import { BiChevronRight, BiTrash } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

const Body = ({ _this }) => {
  return (
    <div className="h-full bg-background">
      <Card
        title={`Settings`}
        extra={
          <div className="w-52 md:w-80 h-14 md:h-16 flex mt-1 justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-sm font-bold rounded-lg custom_button">
            Edit Profile <BiChevronRight size={30} className="mr-2" />
          </div>
        }
        className="bg-background text-gray-500 tracking-wider flex flex-col justify-start w-full p-0"
      >
        <div className="min-h-3/5 w-full py-5 px-0 md:px-0 flex flex-col md:flex-row justify-evenly gap-4 md:gap-8 items-start">
          <Card className="w-full md:w-3/5 h-full shadow-lg rounded-xl">
            <Title level={5} className="flex justify-start items-end gap-3 text-black">
              <span>Phone :</span>{' '}
              <Typography className="font-semibold text-slate-600 text-[15px]">
                8564587453
              </Typography>
            </Title>
            <Title
              level={5}
              className="flex justify-start items-start lg:items-end gap-3 text-black"
            >
              <span className="whitespace-nowrap">Address :</span>{' '}
              <Typography className="font-semibold text-slate-600 text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </Typography>
            </Title>
            <Title
              level={5}
              className="flex justify-start items-start lg:items-end gap-3 text-black"
            >
              <span className="whitespace-nowrap">Description :</span>{' '}
              <Typography className="font-semibold text-slate-600 text-[15px]">
                Lorem ipsum dolor sit amet
              </Typography>
            </Title>
            <Title level={5}>Services Offered : </Title>
            <div className="max-w-[400px]">
              {_this.categories.map((category) => (
                <button
                  className="m-3 bg-primary text-white text-center px-3 py-1 rounded-md font-semibold min-w-[80px]"
                  key={category}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="flex justify-end h-4 w-full">
              <MdOutlineEdit className="text-secondary text-2xl cursor-pointer" />
            </span>
          </Card>

          <Card
            className="shadow-none rounded-none md:rounded-xl h-full w-full md:w-2/5 bg-transparent px-0"
            bodyStyle={{
              padding: 0
            }}
          >
            <div className="flex flex-col justify-center items-start gap-4 md:gap-6 px-0 pt-1">
              <Button
                type="secondary"
                className="h-auto w-full flex justify-start items-center gap-3 px-4 py-2.5 shadow-lg rounded-xl border-0 border-l-4 border-blue-900 font-semibold text-lg text-custom bg-white hover:bg-background text-black hover:opacity-40"
              >
                <div className="h-9 w-9 rounded-full bg-primary flex text-center justify-center items-center">
                  <MdOutlineEdit className="text-white text-xl" />
                </div>{' '}
                <span className="hover:text-black">Change Password</span>
              </Button>

              <Button
                type="secondary"
                className="h-auto w-full flex justify-start items-center gap-3 px-4 py-2.5 shadow-lg shadow-lg rounded-xl border-0 border-l-4 border-blue-900 font-semibold text-lg bg-white hover:bg-background text-black hover:opacity-40"
              >
                <div className="h-9 w-9 rounded-full bg-primary flex text-center justify-center items-center">
                  <BiTrash className="text-white text-lg" />
                </div>{' '}
                <span className="hover:text-black">Delete Account</span>
              </Button>

              <Button
                type="secondary"
                className="h-auto w-full flex justify-start items-center gap-3 px-4 py-2.5 shadow-xl shadow-lg rounded-xl border-0 border-l-4 border-blue-900 font-semibold text-lg bg-white hover:bg-background text-black hover:opacity-40"
              >
                <div className="h-9 w-9 rounded-full bg-primary flex text-center justify-center items-center">
                  <FiLogOut className="text-white text-lg" />
                </div>{' '}
                <span className="hover:text-black">Logout</span>
              </Button>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default Body;

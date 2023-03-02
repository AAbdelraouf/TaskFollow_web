import React from 'react';
import { Button, Card } from 'antd';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import AddCustomerModal from './AddCustomerModal';

const CustomerList = ({ _this }) => {
  return (
    <>
      <Card
        title={`Customers (2)`}
        extra={
          <div
            onClick={() => _this.setAddCustomerModalVisibility(true)}
            className="w-72 p-4 py-4 mt-2 flex justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-sm font-bold rounded-lg"
          >
            <FaUserPlus size={30} className="mr-2" />
            Add New Customer
          </div>
        }
        className="bg-background text-gray-500 tracking-wider h-full flex flex-col justify-start shadow-md w-full"
      >
        <div className="flex justify-center items-center ">
          <Card className="bg-white shadow-md hover:shadow-lg w-full h-36 mb-4">
            <div className="flex justify-between items-center ">
              <div>
                <div className="flex justify-start items-center">
                  <div className="w-8 h-8 rounded-full bg-grayLight flex justify-center items-center mr-1">
                    <FaUserAlt size={17} className="text-primary" />
                  </div>
                  <h1 className="font-semibold text-xl ml-1 mt-1">Raees</h1>
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
                  className=" w-24 flex justify-center items-center bg-grayMedium mx-2 text-white shadow-md"
                >
                  Edit
                </Button>
                <Button
                  icon={<MdDeleteForever size={20} />}
                  className=" flex items-center justify-center mx-2 bg-secondary text-white shadow-md"
                >
                  Delete
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
                  <div className="w-8 h-8 rounded-full bg-grayLight flex justify-center items-center mr-1">
                    <FaUserAlt size={17} className="text-primary" />
                  </div>
                  <h1 className="font-semibold text-xl ml-1 mt-1">Raees</h1>
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
                  className=" w-24 flex justify-center items-center bg-grayMedium mx-2 text-white "
                >
                  Edit
                </Button>
                <Button
                  icon={<MdDeleteForever size={20} />}
                  className=" flex items-center justify-center mx-2 bg-secondary text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Card>
      <AddCustomerModal _this={_this} />
    </>
  );
};

export default CustomerList;

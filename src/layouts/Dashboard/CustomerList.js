import React from 'react';
import { Button, Card } from 'antd';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';

const CustomerList = (_this) => {
  return (
    <Card
      title={`Customers (2)`}
      extra={
        <div
          onClick={() => _this.setAddCustomerModalVisibility(true)}
          className="w-52 md:w-72 p-4 py-1.5 sm:py-4 px-3 md:px-4mt-2 flex flex-col sm:flex-row justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-sm font-bold rounded-lg custom_button"
        >
          <FaUserPlus size={30} className="mr-2" />
          Add New Customer
        </div>
      }
      className="bg-background text-gray-500 tracking-wider h-full flex flex-col justify-start shadow-md w-full"
    >
      {_this.getCustomerDetails &&
        _this.getCustomerDetails.map((customer, index) => (
          <div className="flex justify-center items-center" key={index}>
            <Card className="bg-white shadow-md hover:shadow-lg w-full min-h-36 mb-4">
              <div className="flex justify-between items-center ">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-start items-center pb-2 gap-1">
                    <div className="w-8 h-8 rounded-full bg-grayLight flex justify-center items-center mr-1">
                      <FaUserAlt size={17} className="text-primary" />
                    </div>
                    <h1 className="font-semibold text-xl ml-1 mt-0">{customer.name}</h1>
                  </div>
                  <div className="font-semibold text-md max-w-[180px]">
                    Email: <span className="font-normal text-md break-all">{customer.email}</span>
                  </div>
                  <div className="font-semibold text-md">
                    Phone: <span className="font-normal text-md">{customer.mobile}</span>
                  </div>
                  <div className="font-semibold text-md">
                    Tasks: <span className="font-normal text-md">{customer.task_count}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row items-end justify-end h-full self-end pt-3 pl-1 sm:pt-0">
                  <Button
                    icon={<MdEditNote size={25} />}
                    onClick={() => {
                      _this.setEditCustomerModalVisibility(true);
                      _this.setEditCustomerData((prev) => ({
                        ...prev,
                        _id: customer._id,
                        name: customer.name,
                        email: customer.email
                      }));
                    }}
                    className="w-[85px] flex justify-center items-center bg-grayMedium text-white shadow-md"
                  >
                    Edit
                  </Button>
                  <Button
                    icon={<MdDeleteForever size={20} />}
                    onClick={() => _this.onCustomerDelete({ customer_email: customer.email })}
                    className="w-[85px] flex items-center justify-center bg-secondary text-white shadow-md"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
    </Card>
  );
};

export default CustomerList;

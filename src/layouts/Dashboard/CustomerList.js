import React from 'react';
import { Button, Card, Modal } from 'antd';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';
import { MdDeleteForever, MdEditNote, MdCancel } from 'react-icons/md';
import { toast } from 'react-toastify';

const CustomerList = (_this) => {
  return (
    <>
      <Card
        title={`Customers (${_this.getCustomerDetails.length})`}
        extra={
          <div
            onClick={() => _this.setAddCustomerModalVisibility(true)}
            className="w-52 md:w-72 p-4 py-1.5 sm:py-4 px-3 md:px-4 mt-2 flex justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-sm font-bold rounded-lg custom_button"
          >
            <FaUserPlus size={30} className="mr-2" />
            Add New Customer
          </div>
        }
        className="bg-background text-gray-500 tracking-wider h-full flex flex-col justify-start shadow-md w-full"
      >
        {_this.getCustomerDetails &&
          _this.getCustomerDetails.map((customer) => (
            <div className="flex justify-center items-center" key={customer._id}>
              <Card className="bg-white shadow-md hover:shadow-lg w-full min-h-36 mb-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-start items-center pb-2 gap-1">
                      <div className="w-8 h-8 rounded-full bg-grayLight flex justify-center items-center mr-1">
                        <FaUserAlt size={17} className="text-primary" />
                      </div>
                      <h1 className="font-semibold text-xl ml-1 mt-0">{customer.name}</h1>
                    </div>
                    <div className="font-semibold text-md max-w-[180px] sm:max-w-full">
                      Email: <span className="font-normal text-md break-all">{customer.email}</span>
                    </div>
                    <div className="font-semibold text-md">
                      Phone: <span className="font-normal text-md">{customer.mobile}</span>
                    </div>
                    <div className="font-semibold text-md">
                      Tasks: <span className="font-normal text-md">{customer.task_count}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row items-end justify-end h-full self-end">
                    <Button
                      icon={<MdEditNote size={25} />}
                      onClick={() => {
                        if (!customer.invited_by) {
                          return toast.error(
                            'Registered users are not editable. Please ask the user to login and edit info.'
                          );
                        }
                        _this.setEditCustomerModalVisibility(true);
                        _this.setEditCustomerData((prev) => ({
                          ...prev,
                          _id: customer._id,
                          name: customer.name,
                          email: customer.email
                        }));
                      }}
                      className=" w-[85px] flex justify-center items-center bg-grayMedium text-white shadow-md"
                    >
                      Edit
                    </Button>
                    <Button
                      icon={<MdDeleteForever size={20} />}
                      onClick={() => {
                        _this.setDeleteCustomerModalVisibility(true);
                        _this.setDeleteCustomerData((prev) => ({
                          ...prev,
                          customer_name: customer.name,
                          customer_email: customer.email
                        }));
                      }}
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

      {/* -----------------------------------------------------------------Delete Modal---------------------------------------------------------- */}
      <Modal
        centered
        open={_this.deleteCustomerModalVisibility}
        onOk={() => _this.setDeleteCustomerModalVisibility(false)}
        onCancel={() => _this.setDeleteCustomerModalVisibility(false)}
        width={500}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center">
          <p>
            Are You Sure You want to delete{' '}
            <span className="font-semibold">{_this.deleteCustomerData.customer_name}</span>
          </p>
          <div className=" mt-6 flex justify-end items-end">
            <Button
              icon={<MdCancel size={20} className="mr-1" />}
              onClick={() => _this.setDeleteCustomerModalVisibility(false)}
              className=" flex items-center justify-center mx-2 bg-primary text-white shadow-md"
            >
              Cancel
            </Button>
            <Button
              icon={<MdDeleteForever size={20} />}
              onClick={() => _this.onCustomerDelete()}
              className=" flex items-center justify-center mx-2 bg-secondary text-white shadow-md"
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CustomerList;

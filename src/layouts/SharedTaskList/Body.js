import React from 'react';
import { Card } from 'antd';
import { FaTasks } from 'react-icons/fa';
import { BsFillInfoCircleFill, BsFillCalendarCheckFill } from 'react-icons/bs';
import ProfileModal from './ProfileModal';

const Body = (_this) => {
  return (
    <>
      <Card
        title={
          // <div className="flex flex-col gap-1">
          //   <p>User 1</p>
          //   <div className="flex justify-start items-center gap-3 break-words">
          //     <BsFillCalendarCheckFill className="text-primary" />
          //     <p className="bg-white">Customer since Mar 6, 2023</p>
          //   </div>
          //   <div className="flex justify-start items-center gap-3">
          //     <FaTasks className="text-primary" />
          //     <p>Tasks : </p>
          //     <p>0</p>
          //   </div>
          // </div>
          `tasks (0)`
        }
        extra={
          // <div className="flex justify-center items-center gap-3 sm:gap-8 pr-0 sm:pr-16">
          //   <a className="font-semibold text-primary border-b-2 border-b-secondary text-md sm:text-lg hover:text-grayLight">
          //     Task List
          //   </a>
          //   <a className="font-semibold text-primary text-md sm:text-lg hover:text-grayLight">
          //     Profile details
          //   </a>
          // </div>
          <BsFillInfoCircleFill
            size={30}
            className="text-primary mr-0 sm:mr-10 cursor-pointer"
            onClick={() => _this.setProfileModalvisibility(true)}
          />
        }
        className="bg-background text-gray-500 tracking-wider flex flex-col justify-start w-full py-1.5"
      >
        <h2 className="font-semibold text-lg pb-1">User 1</h2>
        <div className="flex justify-start items-center gap-3 break-words pb-1">
          <BsFillCalendarCheckFill className="text-primary h-4 w-4" />
          <p className="font-semibold">Customer since Mar 6, 2023</p>
        </div>
        <div className="flex justify-start items-center gap-3 font-semibold">
          <FaTasks className="text-primary h-4 w-4" />
          <p>Tasks :</p>
          <p>0</p>
        </div>
      </Card>
      <ProfileModal {..._this} />
    </>
  );
};

export default Body;

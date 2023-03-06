import React from 'react';
import { Button, Card } from 'antd';
import { FaPlusCircle } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';
import { MdDeleteForever, MdEditNote } from 'react-icons/md';
import { toast } from 'react-toastify';
import styles from '@/styles/Task.module.css';

const Body = () => {
  return (
    <>
      <Card
        title={`Tasks(2)`}
        // extra={
        //   <div
        //     // onClick={() => _this.setAddCustomerModalVisibility(true)}
        //     className="w-52 md:w-72 p-4 py-1.5 sm:py-4 px-3 md:px-4 mt-2 flex justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-sm font-bold rounded-lg custom_button"
        //   >
        //     <FaUserPlus size={30} className="mr-2" />
        //     Add Tasks
        //   </div>
        // }
        className="bg-background text-gray-500 tracking-wider flex flex-col justify-center w-full"
      >
        <div className="flex flex-wrap flex-col sm:flex-row justify-between gap-8 items-center">
          <Card
            className="bg-white shadow-md hover:shadow-lg min-h-36 border border-l-8 border-green-600 overflow-visible w-full sm:w-3/12"
            bordered={false}
            actions={[
              <MdEditNote
                size={25}
                key="edit"
                className="w-full p-0 flex justify-center items-center text-grayDark "
              />,
              <MdDeleteForever
                size={25}
                key="delete"
                className="w-full p-0 flex justify-center items-center text-secondary"
              />
            ]}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-start items-start gap-1">
                  <div className=" text-primary flex justify-between items-start w-full font-semibold">
                    Development
                  </div>
                  <div className="text-xs w-16 h-6 font-bold mt-0 text-green-600 bg-completed flex justify-center items-center rounded-md">
                    Low
                  </div>
                </div>
                <div className="font-normal text-grayDark max-w-[180px] sm:max-w-full">
                  design the ditinex website
                </div>
                <div className="flex justify-start items-start gap-1 mt-4">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Expected Start Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Due Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1 mb-2">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Progress
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Progress Bar
                  </p>
                </div>
                <hr className="w-full border-grayDark mb-2" />
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Milestones:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">0</p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Watchers:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">1</p>
                </div>
              </div>
            </div>
          </Card>

          {/* ---------------------------------------Another Card----------------------------------------------- */}

          <Card
            className="bg-white shadow-md hover:shadow-lg min-h-36 border border-l-8 border-green-600 overflow-visible w-full sm:w-3/12"
            bordered={false}
            actions={[
              <MdEditNote
                size={25}
                key="edit"
                className="w-full p-0 flex justify-center items-center text-grayDark "
              />,
              <MdDeleteForever
                size={25}
                key="delete"
                className="w-full p-0 flex justify-center items-center text-secondary"
              />
            ]}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-start items-start gap-1">
                  <div className=" text-primary flex justify-between items-start w-full font-semibold">
                    Development
                  </div>
                  <div className="text-xs w-16 h-6 font-bold mt-0 text-green-600 bg-completed flex justify-center items-center rounded-md">
                    Low
                  </div>
                </div>
                <div className="font-normal text-grayDark max-w-[180px] sm:max-w-full">
                  design the ditinex website
                </div>
                <div className="flex justify-start items-start gap-1 mt-4">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Expected Start Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Due Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1 mb-2">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Progress
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Progress Bar
                  </p>
                </div>
                <hr className="w-full border-grayDark mb-2" />
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Milestones:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">0</p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Watchers:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">1</p>
                </div>
              </div>
            </div>
          </Card>

          {/* ---------------------------------------------------------------------------Another Modal--------------------------------------------- */}
          <Card
            className="bg-white shadow-md hover:shadow-lg min-h-36 border border-l-8 border-green-600 overflow-visible w-full sm:w-3/12"
            bordered={false}
            actions={[
              <MdEditNote
                size={25}
                key="edit"
                className="w-full p-0 flex justify-center items-center text-grayDark "
              />,
              <MdDeleteForever
                size={25}
                key="delete"
                className="w-full p-0 flex justify-center items-center text-secondary"
              />
            ]}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-start items-start gap-1">
                  <div className=" text-primary flex justify-between items-start w-full font-semibold">
                    Development
                  </div>
                  <div className="text-xs w-16 h-6 font-bold mt-0 text-green-600 bg-completed flex justify-center items-center rounded-md">
                    Low
                  </div>
                </div>
                <div className="font-normal text-grayDark max-w-[180px] sm:max-w-full">
                  design the ditinex website
                </div>
                <div className="flex justify-start items-start gap-1 mt-4">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Expected Start Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Due Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1 mb-2">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Progress
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Progress Bar
                  </p>
                </div>
                <hr className="w-full border-grayDark mb-2" />
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Milestones:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">0</p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Watchers:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">1</p>
                </div>
              </div>
            </div>
          </Card>

          {/* -------------------------------------------------------------------------Another Card--------------------------------------------- */}
          <Card
            className="bg-white shadow-md hover:shadow-lg min-h-36 border border-l-8 border-green-600 overflow-visible w-full sm:w-3/12"
            bordered={false}
            actions={[
              <MdEditNote
                size={25}
                key="edit"
                className="w-full p-0 flex justify-center items-center bg-grayMedium text-white "
              />,
              <MdDeleteForever
                size={25}
                key="delete"
                className="w-full p-0 flex justify-center items-center text-secondary"
              />
            ]}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-start items-start gap-1">
                  <div className=" text-primary flex justify-between items-start w-full font-semibold">
                    Development
                  </div>
                  <div className="text-xs w-16 h-6 font-bold mt-0 text-green-600 bg-completed flex justify-center items-center rounded-md">
                    Low
                  </div>
                </div>
                <div className="font-normal text-grayDark max-w-[180px] sm:max-w-full">
                  design the ditinex website
                </div>
                <div className="flex justify-start items-start gap-1 mt-4">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Expected Start Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Due Date:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Mar 6, 2023
                  </p>
                </div>
                <div className="flex justify-start items-start gap-1 mb-2">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Progress
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">
                    Progress Bar
                  </p>
                </div>
                <hr className="w-full border-grayDark mb-2" />
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Milestones:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">0</p>
                </div>
                <div className="flex justify-start items-start gap-1">
                  <div className="flex justify-between items-center text-xs text-grayDark w-full font-semibold">
                    Watchers:
                  </div>
                  <p className="text-xs text-grayMedium font-bold mt-0 whitespace-nowrap">1</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div
          className={`${styles.create_task} fixed bottom-12 right-12 rounded-full bg-white h-[49px] w-[49px]`}
        >
          <FaPlusCircle
            size={50}
            className="text-secondary rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </Card>
    </>
  );
};

export default Body;

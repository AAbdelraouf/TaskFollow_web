import React from 'react';
import { Card } from 'antd';
import { Typography, Button, Modal } from 'antd';
const { Title } = Typography;
import { MdOutlineEdit } from 'react-icons/md';
import { BiChevronRight, BiTrash } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';

const BusinessDetails = (_this) => {
  return (
    <>
      <Card
        title={`Settings`}
        extra={
          <div className="w-52 md:w-72 p-4 py-1.5 sm:py-4 px-3 md:px-4 mt-2 flex justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-lg font-bold rounded-lg custom_button">
            Edit Profile <BiChevronRight size={30} />
          </div>
        }
        className="bg-background text-gray-500 tracking-wider flex flex-col justify-start w-full py-1.5"
      >
        <div className="min-h-3/5 w-full py-0 flex flex-col md:flex-row justify-evenly gap-4 md:gap-7 items-start">
          <Card className="md:w-3/5 h-full shadow-lg rounded-xl flex flex-col">
            <Title
              level={5}
              className="flex justify-start items-start gap-0 text-black h-auto w-full"
            >
              <span className="w-[37%] sm:w-[24%] md:w-[33%] lg:w-[22%]">Phone :</span>{' '}
              <Typography className="font-semibold text-slate-600 text-[15px] flex-grow w-[63%] sm:w-[76%] md:w-[67%] lg:w-[78%] align-text-bottom">
                {_this.businessDetails ? _this.businessDetails.phone : ''}
              </Typography>
            </Title>
            <Title
              level={5}
              className="flex justify-start items-start gap-0 text-black h-auto w-full"
            >
              <span className="w-[37%] sm:w-[24%] md:w-[33%] lg:w-[22%] whitespace-nowrap">
                Address :
              </span>{' '}
              <Typography className="font-semibold text-slate-600 text-[15px] flex-grow w-[63%] sm:w-[76%] md:w-[67%] lg:w-[78%] align-text-bottom">
                {_this.businessDetails ? _this.businessDetails.address : ''}
              </Typography>
            </Title>
            <Title
              level={5}
              className="flex justify-start items-start gap-0 text-black h-auto w-full"
            >
              <span className="w-[37%] sm:w-[24%] md:w-[33%] lg:w-[22%] whitespace-nowrap">
                Description :
              </span>{' '}
              <Typography className="font-semibold text-slate-600 text-[15px] flex-grow w-[63%] sm:w-[76%] md:w-[67%] lg:w-[78%] align-text-bottom">
                {_this.businessDetails ? _this.businessDetails.description : ''}
              </Typography>
            </Title>
            <Title level={5}>Services Offered : </Title>
            <div>
              {_this.businessDetails
                ? _this.businessDetails.services_offered.map((category, index) => (
                    <button
                      className="m-2 bg-primary text-white text-center px-3 py-1 rounded-md font-semibold min-w-[80px] cursor-default"
                      key={index}
                      ghost="true"
                    >
                      {category}
                    </button>
                  ))
                : ''}
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
                onClick={() => _this.setPasswordModalVisibility(true)}
                className="h-auto w-full flex justify-start items-center gap-3 py-2.5 bg-white shadow-md text-grayDark text-lg font-bold rounded-xl custom_button border-0 border-l-4 border-primary"
              >
                <div className="h-9 w-9 rounded-full bg-primary flex text-center justify-center items-center">
                  <MdOutlineEdit className="text-white text-xl" />
                </div>{' '}
                <span>Change Password</span>
              </Button>

              <Button
                type="secondary"
                onClick={() => _this.setDeleteAccountModalVisibility(true)}
                className="h-auto w-full flex justify-start items-center gap-3 py-2.5 bg-white shadow-md text-grayDark text-lg font-bold rounded-xl custom_button border-0 border-l-4 border-primary"
              >
                <div className="h-9 w-9 rounded-full bg-primary flex text-center justify-center items-center">
                  <BiTrash className="text-white text-lg" />
                </div>{' '}
                <span>Delete Account</span>
              </Button>

              <Button
                type="secondary"
                onClick={_this.handleLogout}
                className="h-auto w-full flex justify-start items-center gap-3 py-2.5 bg-white shadow-md text-grayDark text-lg font-bold rounded-xl custom_button border-0 border-l-4 border-primary"
              >
                <div className="h-9 w-9 rounded-full bg-primary flex text-center justify-center items-center">
                  <FiLogOut className="text-white text-lg" />
                </div>{' '}
                <span>Logout</span>
              </Button>
            </div>
          </Card>
        </div>
      </Card>
    </>
  );
};

export default BusinessDetails;

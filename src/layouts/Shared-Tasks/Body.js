import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
import { MdGroups } from 'react-icons/md';
import { BiChevronRight } from 'react-icons/bi';

const Body = (_this) => {
  return (
    <>
      <Card
        title={`Shared Tasks`}
        extra={
          <div
            className="w-52 md:w-72 p-4 py-1.5 sm:py-4 px-3 md:px-4 mt-2 flex justify-center cursor-pointer items-center bg-buttonBgImage bg-cover shadow-md bg-center text-secondary text-lg font-bold rounded-lg custom_button"
            onClick={() => _this.setEditProfileModalVisibility(true)}
          ></div>
        }
        className="bg-background text-gray-500 tracking-wider flex flex-col justify-start w-full py-1.5"
      >
        {_this.sharedTasksList.length === 0 ? (
          <div className="flex justify-center items-center">No customers available</div>
        ) : (
          <div className="flex flex-col gap-4">
            {_this.sharedTasksList &&
              _this.sharedTasksList.map((item) => (
                <Link href={'#'}>
                  <Card className="shadow-md rounded-none">
                    <div className="h-auto w-full flex justify-start items-center gap-4">
                      <MdGroups className="h-8 w-8 rounded-full bg-grayLight p-[4px]" />
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                    </div>
                    <div className="h-auto w-full flex justify-start items-center gap-2 pt-2">
                      <h2 className="font-semibold text-md">Email : </h2>
                      <p>{item.email}</p>
                    </div>
                    <div className="h-auto w-full flex justify-start items-center gap-2">
                      <h2 className="font-semibold text-md">Tasks : </h2>
                      <p>{item.tasks}</p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        )}
      </Card>
    </>
  );
};

export default Body;

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
        className="bg-background text-gray-500 tracking-wider flex flex-col justify-start w-full py-1.5"
      >
        {_this.businessList.length === 0 ? (
          <div className="flex justify-center items-center">No customers available</div>
        ) : (
          <div className="flex flex-col gap-4">
            {_this.businessList &&
              _this.businessList.map((business, index) => (
                <Link href={`/dashboard/shared-tasks/task/${business.email}`} key={index}>
                  <Card className="shadow-md rounded-none">
                    <div className="h-auto w-full flex justify-start items-center gap-4">
                      <MdGroups className="h-8 w-8 rounded-full bg-grayLight p-[4px] text-primary" />
                      <h2 className="font-semibold text-lg">{business.name}</h2>
                    </div>
                    <div className="h-auto w-full flex justify-start items-center gap-2 pt-2">
                      <h2 className="font-semibold text-md">Email : </h2>
                      <p>{business.email}</p>
                    </div>
                    <div className="h-auto w-full flex justify-start items-center gap-2">
                      <h2 className="font-semibold text-md">Tasks : </h2>
                      <p>{business.task_count}</p>
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

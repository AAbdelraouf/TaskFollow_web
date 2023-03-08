import React from 'react';

const Page403 = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="flex flex-row flex-shrink items-center">
        <h1 className="pr-[24px] pt-[10px] pb-[10px] mr-[24px] font-medium border-r border-[rgba(255,255,255,.3)] text-white text-2xl">
          403
        </h1>
        <span className="text-white text-sm">You are not authorized to access this page.</span>
      </div>
    </div>
  );
};

export { Page403 };

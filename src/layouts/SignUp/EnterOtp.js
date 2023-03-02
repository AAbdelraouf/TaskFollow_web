import React from 'react';
import { Button, Input } from 'antd';

const EnterOtp = ({ _this }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-start h-full sm:h-[60vh]">
        <label className="text-sm font-medium text-gray-500 text-center mb-4 mt-6">Enter OTP</label>
        <Input
          className="mb-6 w-72"
          placeholder="Enter OTP..."
          value={_this.OTP}
          onChange={(e) => {
            _this.setOTP(e.target.value);
          }}
        />
        <Button
          onClick={() => _this.onOtpSubmit()}
          className=" w-72 bg-primary hover:bg-primary focus:bg-primary focus:text-gray-300 hover:text-gray-300 text-white text-center h-11 rounded-full"
          block
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EnterOtp;

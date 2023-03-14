import React from 'react';
import { Modal, Card } from 'antd';

const ProfileModal = (_this) => {
  return (
    <>
      <Modal
        centered
        open={_this.profileModalvisibility}
        onOk={() => _this.setProfileModalvisibility(false)}
        onCancel={() => _this.setProfileModalvisibility(false)}
        width={400}
        footer={null}
      >
        <Card className="h-auto w-full">
          <div className="h-full w-full">
            <div className={`pt-5 flex flex-col justify-center items-center transition-all`}>
              <span className="h-16 w-16 rounded-full border-2 border-secondary bg-white text-secondary font-normal text-[40px] flex justify-center items-center">
                H
              </span>
              <div>
                <h2 className={`text-black text-center font-bold text-lg pt-2.5 px-1 break-none`}>
                  test 3
                </h2>
                <h4 className={`text-black px-1 text-md break-none font-semibold text-grayMedium`}>
                  test3@gmail.com
                </h4>
              </div>
            </div>
          </div>
        </Card>

        <Card className="h-auto w-full drop-shadow-xl mb-2">
          <div className="h-full w-full flex flex-col justify-start items-center gap-1">
            <p className="font-semibold pb-1">
              description lorem nuhuugu jnghghgyy t6t6t ipsum dolor{' '}
            </p>
            <div className="h-auto w-full flex justify-start items-start gap-3">
              <p className="font-bold">Phone :</p>
              <p className="font-semibold">+874-6767544390</p>
            </div>
            <div className="h-auto w-full flex justify-start items-start gap-2">
              <p className="font-bold whitespace-nowrap">Address :</p>
              <p className="font-semibold">Jason Villa, Near CharPiece, Santacruz, Mumbai (w)</p>
            </div>
            <div className="h-auto w-full flex justify-start">
              <p className="font-bold text-start">Service Offered :</p>
            </div>
            <div className="h-auto w-full flex flex-row justify-start items-center">
              {_this.servicesOffered
                ? _this.servicesOffered.map((category, index) => (
                    <button
                      className="m-2 bg-primary text-white text-center px-3 py-1 rounded-md font-semibold min-w-[70px] cursor-default"
                      key={index}
                    >
                      {category}
                    </button>
                  ))
                : ''}
            </div>
          </div>
        </Card>
      </Modal>
    </>
  );
};

export default ProfileModal;

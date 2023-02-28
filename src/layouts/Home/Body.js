import React from 'react';
import Login from './Login';
import Marketing from './Marketing';

const Body = (_this) => {
  return (
    <div className="w-screen flex flex-col sm:flex-row justify-center h-screen home_gradient_bg">
      <Login _this={_this} />
      <Marketing />
    </div>
  );
};

export default Body;

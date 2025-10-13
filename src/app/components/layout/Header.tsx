import React from 'react';

const Header = () => {
  return (
    <div
      className="w-full bg-gradient-to-b from-[#f2e6f9] via-white to-white flex px-2 justify-center items-center py-10"
      style={{ height: 'calc(100vh - 4rem)' }} // 4rem = 64px (h-16)
    >
      <div className="bg-white rounded-3xl w-full max-w-6xl h-full border-5 border-gray-300 shadow-lg p-6 flex justify-center items-center">
        <h1 className="text-3xl font-bold">Banner Content</h1>
      </div>
    </div>
  );
};

export default Header;

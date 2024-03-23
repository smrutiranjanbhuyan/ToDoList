import React from 'react';

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-purple-600 text-white h-16 px-6 fixed top-0 left-0 w-full '>
      <div className="logo">
        <span className='font-bold text-xl'>iDo</span>
      </div>
      <ul className="flex items-center gap-8">
        <li className="cursor-pointer hover:text-gray-300 transition duration-300 hover:font-bold">Home</li>
        <li className="cursor-pointer hover:text-gray-300 transition duration-300 hover:font-bold">Your Task</li>
      </ul>
    </nav>
  );
}

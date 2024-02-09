import React from 'react';

function Footer() {
  return (
    <div className='flex justify-between mt-4 text-xs text-gray-500'>
      <p>2 tasks left</p>
      <ul className='flex items-center space-x-1 text-xs'>
        <li className='font-bold cursor-pointer'>All</li>
        <li>|</li>
        <li className='cursor-pointer'>Incomplete</li>
        <li>|</li>
        <li className='cursor-pointer'>Complete</li>
        <li></li>
        <li></li>
        <li className='w-3 h-3 bg-green-500 border-2 border-green-500 rounded-full cursor-pointer md:hover:bg-green-500'></li>
        <li className='w-3 h-3 border-2 border-red-500 rounded-full cursor-pointer md:hover:bg-red-500'></li>
        <li className='w-3 h-3 border-2 border-yellow-500 rounded-full cursor-pointer md:hover:bg-yellow-500'></li>
      </ul>
    </div>
  );
}

export default Footer;

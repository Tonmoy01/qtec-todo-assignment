import React from 'react';

function Footer() {
  return (
    <div className='flex justify-between mt-4 text-xs text-gray-500'>
      <p>2 tasks left</p>
      <div className='flex gap-2'>
        <ul className='flex items-center space-x-1 text-xs'>
          <li className='font-bold cursor-pointer'>All</li>
          <li>|</li>
          <li className='cursor-pointer'>Incomplete</li>
          <li>|</li>
          <li className='cursor-pointer'>Complete</li>
          <li></li>
          <li></li>
        </ul>
        <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white bg-green-500 border-2 border-green-500 rounded-md cursor-pointer hover:bg-green-500'>
          Low
        </button>

        <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500'>
          Medium
        </button>

        <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md cursor-pointer hover:bg-red-500'>
          High
        </button>
      </div>
    </div>
  );
}

export default Footer;

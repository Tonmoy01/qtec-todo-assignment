import React from 'react';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';

function Todo() {
  return (
    <div className='flex items-center justify-start p-2 space-x-4 border-b hover:bg-gray-100 hover:transition-all border-gray-400/20 last:border-0'>
      <div className='flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-white border-2 border-gray-400 rounded-full focus-within:border-green-500'>
        <input type='checkbox' className='absolute rounded-full opacity-0' />
        <svg
          className='hidden w-3 h-3 text-green-500 pointer-events-none fill-current'
          viewBox='0 0 20 20'
        >
          <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
        </svg>
      </div>

      <div className='flex-1 line-through select-none'>
        Learn React from Learn with Sumit YouTube Channel
      </div>

      <div className='flex-shrink-0 w-4 h-4 ml-auto bg-green-500 border-2 border-green-500 rounded-full cursor-pointer hover:bg-green-500'></div>

      <div className='flex-shrink-0 w-4 h-4 ml-auto border-2 border-yellow-500 rounded-full cursor-pointer hover:bg-yellow-500'></div>

      <div className='flex-shrink-0 w-4 h-4 ml-auto border-2 border-red-500 rounded-full cursor-pointer hover:bg-red-500'></div>

      <IoTrashOutline className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer' />
      <IoCreateOutline className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer' />
    </div>
  );
}

export default Todo;

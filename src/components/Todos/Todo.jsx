import React from 'react';
import {
  IoTrashOutline,
  IoCreateOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';

function Todo() {
  return (
    <div className='flex items-center justify-start p-2 space-x-4 border-b hover:bg-gray-100 hover:transition-all border-gray-400/20 last:border-0'>
      {/* <div className='flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 bg-white border-2 border-gray-400 rounded-full focus-within:border-green-500'>
        <input type='checkbox' className='absolute rounded-full opacity-0' />
        <svg
          className='hidden w-3 h-3 text-green-500 pointer-events-none fill-current'
          viewBox='0 0 20 20'
        >
          <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
        </svg>
      </div> */}
      <input type='checkbox' className='w-4 h-4' />

      <div className='flex-1 line-through select-none'>
        Learn React from Learn with Sumit YouTube Channel
      </div>

      <button className='flex items-center gap-1 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500'>
        <IoCreateOutline className='flex-shrink-0 w-4 h-4 cursor-pointer' />{' '}
        <span>Edit</span>
      </button>

      <button className='flex items-center gap-1 px-2 ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md cursor-pointer hover:bg-red-500'>
        <IoTrashOutline className='flex-shrink-0 w-4 h-4 cursor-pointer' />
        <span>Delete</span>
      </button>

      {/* <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white bg-green-500 border-2 border-green-500 rounded-md cursor-pointer hover:bg-green-500'>
        Low
      </button>

      <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500'>
        Medium
      </button>

      <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md cursor-pointer hover:bg-red-500'>
        High
      </button> */}

      {/* <IoCreateOutline className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer' />
      <IoTrashOutline className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer' /> */}
    </div>
  );
}

export default Todo;

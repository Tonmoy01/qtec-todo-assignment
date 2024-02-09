import React from 'react';
import {
  IoNewspaperOutline,
  IoAddCircleOutline,
  IoCheckmarkDone,
} from 'react-icons/io5';

function Header() {
  return (
    <div>
      <form className='flex items-center px-4 py-4 bg-gray-100 rounded-md'>
        <IoNewspaperOutline className='w-6 h-6' />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full px-4 py-1 text-lg text-gray-500 bg-gray-100 border-none outline-none'
        />
        <button
          type='submit'
          className='bg-no-repeat bg-contain appearance-none'
        >
          <IoAddCircleOutline className='w-8 h-8' />
        </button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <IoCheckmarkDone className='w-4 h-4' />
          <span>Complete All Tasks</span>
        </li>
        <li className='cursor-pointer'>Clear completed</li>
      </ul>
    </div>
  );
}

export default Header;

import React from 'react';
import {
  IoNewspaperOutline,
  IoCheckmarkDone,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

function Header() {
  return (
    <div>
      <h1 className='mb-3 text-lg font-medium'>Task Title</h1>
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
          <IoPaperPlaneOutline className='w-8 h-8' />
        </button>
      </form>

      <div className='flex justify-between gap-4 mt-4'>
        <h3 className='text-lg font-normal'>Select Priority</h3>
        <select
          required
          className='px-5 bg-blue-100 rounded-md outline-none text-dark'
        >
          <option value=''>Low</option>
          <option value=''>Medium</option>
          <option value=''>High</option>
        </select>
      </div>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <button className='flex px-4 py-2 text-sm text-white rounded-md bg-cyan-400'>
            <IoCheckmarkDone className='w-4 h-4' />
            <span>Complete All Tasks</span>
          </button>
        </li>
        <li className='cursor-pointer'>
          <button className='px-4 py-2 text-sm text-white rounded-md bg-cyan-400'>
            Clear completed
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;

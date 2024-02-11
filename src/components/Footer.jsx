import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriority } from '../store/slice/prioritySlice';
import { setStatus } from '../store/slice/statusSlice';

function Footer() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const items = useSelector((state) => state.todo);

  const leftTasks = items?.filter((item) => !item.isComplete);

  const amount = leftTasks.length;

  return (
    <div className='flex flex-col justify-between mt-4 text-xs text-gray-500 md:flex-row'>
      <p>
        {amount} {amount === 1 || amount === 0 ? 'task' : 'tasks'} left
      </p>
      <div className='flex flex-col gap-2 md:flex-row'>
        <ul className='flex items-center space-x-1 text-xs'>
          <li
            className={`cursor-pointer ${status === '' && 'font-bold'}`}
            onClick={() => {
              dispatch(setStatus('')), dispatch(setPriority(''));
            }}
          >
            All
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${status === false && 'font-bold'}`}
            onClick={() => dispatch(setStatus(false))}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            className={`cursor-pointer ${status === true && 'font-bold'}`}
            onClick={() => dispatch(setStatus(true))}
          >
            Complete
          </li>
          <li></li>
          <li></li>
        </ul>
        <div className='flex gap-4'>
          <button
            className='flex-shrink-0 px-2 w-max md:ml-auto text-[10px] text-white bg-green-500 border-2 border-green-500 rounded-md cursor-pointer hover:bg-green-500'
            onClick={() => dispatch(setPriority('low'))}
          >
            Low
          </button>

          <button
            className='flex-shrink-0 px-2 w-max md:ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500'
            onClick={() => dispatch(setPriority('medium'))}
          >
            Medium
          </button>

          <button
            className='flex-shrink-0 px-2 w-max md:ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md cursor-pointer hover:bg-red-500'
            onClick={() => dispatch(setPriority('high'))}
          >
            High
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

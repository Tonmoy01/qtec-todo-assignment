import React from 'react';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import todoSlice from '../../store/slice/todoSlice';

function Todo({ item }) {
  const dispatch = useDispatch();

  const { id, title, isSelected } = item;

  const deleteHandler = (id) => {
    dispatch(todoSlice.delete(id));
  };

  console.log(id);

  return (
    <div className='flex items-center justify-between p-2 space-x-4 border-b hover:bg-gray-100 hover:transition-all border-gray-400/20 last:border-0'>
      <div className='flex gap-4'>
        <input type='checkbox' className='w-4 h-4' />
        <div className='flex-1 select-none'>{title}</div>

        {isSelected === 'low' ? (
          <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white bg-green-500 border-2 border-green-500 rounded-md cursor-pointer hover:bg-green-500'>
            Low
          </button>
        ) : isSelected === 'medium' ? (
          <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500'>
            Medium
          </button>
        ) : isSelected === 'high' ? (
          <button className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md cursor-pointer hover:bg-red-500'>
            High
          </button>
        ) : null}
      </div>

      <div className='flex gap-2'>
        <button className='flex items-center gap-1 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500'>
          <IoCreateOutline className='flex-shrink-0 w-4 h-4 cursor-pointer' />{' '}
          <span>Edit</span>
        </button>

        <button
          className='flex items-center gap-1 px-2 ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md cursor-pointer hover:bg-red-500'
          onClick={() => deleteHandler(id)}
        >
          <IoTrashOutline className='flex-shrink-0 w-4 h-4 cursor-pointer' />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default Todo;

import React, { useState } from 'react';
import {
  IoTrashOutline,
  IoCreateOutline,
  IoSaveOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import todoSlice from '../../store/slice/todoSlice';

function Todo({ item }) {
  const dispatch = useDispatch();
  const { id, title, isSelected, isComplete } = item;

  const [isEdit, setIsEdit] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(title);

  const deleteHandler = (id) => {
    dispatch(todoSlice.delete(id));
  };

  const editHandler = () => {
    if (isComplete) {
      setIsEdit(false);
    } else {
      setIsEdit(!isEdit);
    }
  };

  const updateTitleHandler = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(todoSlice.edit({ id, updatedData: { title: updatedValue } }));
    }

    setIsEdit(false);
  };

  const updatedStatusHandler = (id) => {
    dispatch(todoSlice.edit({ id, updatedData: { isComplete: !isComplete } }));
  };

  console.log(isComplete);

  return (
    <div className='flex items-center justify-between p-2 space-x-4 border-b hover:bg-gray-100 hover:transition-all border-gray-400/20 last:border-0'>
      <div className='flex items-center gap-4'>
        <input
          type='checkbox'
          checked={isComplete}
          onChange={() => {
            updatedStatusHandler(id);
          }}
          className='w-4 h-4'
        />
        {isEdit ? (
          <form
            onSubmit={updateTitleHandler}
            className='flex items-center gap-2'
          >
            <input
              type='text'
              value={updatedValue}
              onChange={(e) => setUpdatedValue(e.target.value)}
              className='p-1 py-1 bg-blue-100 rounded-lg outline-none'
            />
            <button>
              <IoSaveOutline className='w-5 h-5' />
            </button>
          </form>
        ) : (
          <div
            className={`flex-1 select-none text-lg ${
              isComplete ? 'line-through opacity-20' : null
            }`}
          >
            {title}
          </div>
        )}

        {isSelected === 'low' ? (
          <div className='flex-shrink-0 px-2 ml-auto text-[10px] text-white bg-green-500 border-2 border-green-500 rounded-md hover:bg-green-500'>
            Low
          </div>
        ) : isSelected === 'medium' ? (
          <div className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md hover:bg-yellow-500'>
            Medium
          </div>
        ) : isSelected === 'high' ? (
          <div className='flex-shrink-0 px-2 ml-auto text-[10px] text-white border-red-500 bg-red-500 rounded-md hover:bg-red-500'>
            High
          </div>
        ) : null}
      </div>

      <div className='flex gap-2'>
        <button
          className={`flex items-center gap-1 px-2 ml-auto text-[10px] text-white border-yellow-500 bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500 ${
            isComplete ? 'opacity-15' : null
          }`}
          onClick={() => editHandler(id)}
          disabled={isComplete ? true : false}
        >
          {!isEdit ? (
            <IoCreateOutline className='flex-shrink-0 w-4 h-4 cursor-pointer' />
          ) : (
            'Cancel'
          )}
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

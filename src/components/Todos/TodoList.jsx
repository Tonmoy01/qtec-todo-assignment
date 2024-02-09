import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function TodoList() {
  const todoItem = useSelector((state) => state.todo);

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {todoItem?.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;

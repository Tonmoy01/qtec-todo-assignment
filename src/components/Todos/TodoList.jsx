import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function TodoList() {
  const todoItem = useSelector((state) => state.todo);
  const priority = useSelector((state) => state.priority);
  const status = useSelector((state) => state.status);

  const filteredTodo =
    priority === ''
      ? todoItem
      : todoItem.filter((item) => item.isSelected === priority);

  const filteredStatusTodo =
    status === ''
      ? filteredTodo
      : filteredTodo.filter((item) => item.isComplete === status);

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {filteredStatusTodo.length === 0
        ? 'You have nothings to do!'
        : filteredStatusTodo?.map((item) => <Todo key={item.id} item={item} />)}
    </div>
  );
}

export default TodoList;

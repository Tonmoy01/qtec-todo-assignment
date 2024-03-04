import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function TodoList() {
  const todosItem = useSelector((state) => state.todo);
  const priority = useSelector((state) => state.priority);
  const status = useSelector((state) => state.status);
  const searchTerm = useSelector((state) => state.search);

  const filteredTodo =
    priority === ''
      ? todosItem
      : todosItem.filter((item) => item.isSelected === priority);

  const filteredStatusTodo =
    status === ''
      ? filteredTodo
      : filteredTodo.filter((item) => item.isComplete === status);

  const filteredSearchTodo = searchTerm
    ? filteredStatusTodo.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredStatusTodo;

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {filteredSearchTodo?.length === 0
        ? 'No matching todos found!'
        : filteredSearchTodo?.map((item) => <Todo key={item.id} item={item} />)}
    </div>
  );
}

export default TodoList;

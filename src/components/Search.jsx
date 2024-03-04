// Search.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/slice/searchSlice';

function Search() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className='flex items-center w-full pl-2 mt-2 border-2 rounded-full border-cyan-500 md:w-6/12'>
      <input
        type='search'
        className='w-full outline-none'
        placeholder='Search your todo'
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className='p-1 text-white rounded-full text-md bg-cyan-500'>
        Search
      </button>
    </div>
  );
}

export default Search;

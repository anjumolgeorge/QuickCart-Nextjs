"use client"
import React from 'react';

const SearchBar = () => {
  return (
    <form className=' flex justify-between gap-4 bg-gray-200 p-2 rounded-md'>
     <input type='text' placeholder='Search'/>
     <button className=' cursor-pointer'>
        <img src="/search.png" alt=""
        width={16}
        height={16} />
     </button>
    </form>
  );
}

export default SearchBar;

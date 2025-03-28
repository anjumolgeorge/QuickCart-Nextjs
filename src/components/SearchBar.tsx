"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (name){
           router.push(`/list?name=${name}`)
        }
    }
  return (
    <form className=' flex justify-between gap-4 bg-gray-200 p-2 rounded-md'
    onSubmit={handleSearch}>
     <input
      type='text' 
      name='name'
      placeholder='Search' 
      className=' bg-transparent outline-none'
      />
     <button
      className=' cursor-pointer'>
      <img src="/search.png" alt=""
      width={16}
      height={16} />
     </button>
    </form>
  );
}

export default SearchBar;

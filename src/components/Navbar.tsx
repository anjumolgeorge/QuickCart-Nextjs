import React from 'react';
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-slate-500 h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <div className=' flex items-center justify-between'>
      {/* MOBILE */}
      <Link href="/">LAMA</Link>
      <Menu/>
      </div>
    </div>
  );
}

export default Navbar;

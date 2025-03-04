"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const router = useRouter()
    // TEMPORARY
    const isLoggedIn = false

    const handleProfile = () => {
        if(!isLoggedIn) {
         router.push("/login")
        }
        setIsProfileOpen((prev) => !prev)
    }
  return (
    <div className=' flex items-center gap-4 xl:gap-6'>
    <img src="/user.png"
      alt=""
      width={22}
      height={22} 
      className='cursor-pointer'
      onClick={handleProfile} />

      {isProfileOpen && 
      <div className=' absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <Link href="/">Profile</Link>
        <div className=' mt-2 cursor-pointer'>Logout</div>
        </div>}

    <img src="/bell.png" 
     alt="" 
     width={22} 
     height={22} 
     className='cursor-pointer' />

     <img src="/online-shopping.png" 
     alt="" 
     width={22} 
     height={22} 
     className='cursor-pointer' />
     
    </div>
  );
}

export default NavIcons;

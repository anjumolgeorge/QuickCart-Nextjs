"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CartModel from './CartModel';

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
    <div className=' flex items-center gap-4 xl:gap-6 relative'>
    <img src="/user.png"
      alt=""
      width={22}
      height={22} 
      className='cursor-pointer'
      onClick={handleProfile} />

      {isProfileOpen && (
      <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20c'>
        <Link href="/">Profile</Link>
        <div className=' mt-2 cursor-pointer'>Logout</div>
        </div>
      )}

    <img src="/bell.png" 
     alt="" 
     width={22} 
     height={22} 
     className='cursor-pointer'
      />
       <div className=' relative cursor-pointer'>
     <img src="/online-shopping.png" 
     alt="" 
     width={22} 
     height={22} 
     className='cursor-pointer' 
     onClick={() => setIsCartOpen((prev) => !prev)}
     />
     <div className=" absolute -top-4 -right-4 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center ">
      2
     </div>
     </div>
     {isCartOpen && <CartModel/>}
     
    </div>
  );
}

export default NavIcons;

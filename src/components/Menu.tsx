"use client"

import Link from "next/link";
import { useState } from "react";

const Menu = () => {

    const [open,setOpen] = useState(false)

  return (
    <div className="">
      <img src="/burger-bar.png" alt=""
       width={28} 
       height={28} 
       className="cursor-pointer"
       onClick={()=> setOpen((prev) => !prev)}
         />
         {
         open && (
            <div className=" absolute bg-black w-full h-[calc(100vh-80px)] text-white left-0 top-20 flex flex-col items-center justify-center gap-8 text-xl z-10 ">
                <Link href="/">Homepage</Link>
                <Link href="/">Shop</Link>
                <Link href="/">Deals</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart{1}</Link>
            </div>
         )}
    </div>
  );
}

export default Menu;

"use client"

const slides = [
    {
        id:1,
        title: "Summer sale Collections",
        description:"Sale, Up to 50% OFF!",
        img:"summercollections.jpg",
        url:"/",
        bg:"bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        id:2,
        title: "Winter sale Collections",
        description:"Sale, Up to 50% OFF!",
        img:"winter.jpg",
        url:"/",
        bg:"bg-gradient-to-r from-pink-50 to-blue-50"
    },{
        id:3,
        title: "spring.webp",
        description:"Sale, Up to 50% OFF!",
        img:"https://www.istockphoto.com/photo/a-back-view-of-a-woman-holding-shopping-bags-in-front-of-a-store-window-gm2155795543-576589822?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_bottombanner_media&utm_term=spring+sale+collections",
        url:"/",
        bg:"bg-gradient-to-r from-blue-50 to-yellow-50"
    },
]
import Link from 'next/link';
import React, { useState } from 'react';

const Slider = () => {
     const [current, setcurrent] = useState(0);
  return (
    <div className=' h-[calc(100vh-80px)] overflow-hidden'>
      <div className=' w-max h-full flex transition-all ease-in-out duration-1000'>
        {slides.map((slide)=>(
            <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}>
                {/* TEXT CONTAINER */}
                <div className=' h-1/2 xl:w-1/2  xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
                    <h2 className=' text-xl lg:text-3xl 2xl:text-5xl'>{slide.description}</h2>
                    <h1 className=' text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>{slide.title}</h1>
                    <Link href={slide.url}>
                    <button className=' rounded-md bg-black text-white py-3 px-4 '>SHOP NOW</button>
                    </Link>
                </div>
                {/* IMAGE CONTAINER */}
                <div className=' xl:w-1/2 xl:h-full relative'>
                    <img src={slide.img} 
                    alt="" 
                    
                    sizes='100%' 
                    className=' h-[40rem] object-contain'/>
                </div>
            </div>
        ))}
      </div>
      <div>
       {slides.map((slide,index =>(
            <div 
            className={'w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
            }'}
             key={slide.id}
             >
                {current === index && (
                    <div className=' w-[6px] h-[6px] bg-gray-600 rounded-full'></div>
                )}
             </div>
        ))
      }
      </div>
    </div>
  );
}

export default Slider;



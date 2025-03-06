"use client"

const slides = [
    {
        id:1,
        title: "Summer sale Collections",
        description:"Sale, Up to 50% OFF!",
        img:"https://www.istockphoto.com/photo/young-indian-family-with-trolley-bag-luggage-going-for-summer-vacations-isolated-gm1594029247-529666838?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=summer+sale+collections",
        url:"/",
        bg:"bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        id:2,
        title: "Winter sale Collections",
        description:"Sale, Up to 50% OFF!",
        img:"https://www.istockphoto.com/photo/set-of-seasonal-autumn-fashion-woman-clothes-top-view-with-copy-space-trendy-shoes-gm1041292966-278782554?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_topbanner_media&utm_term=winter+sale+collections",
        url:"/",
        bg:"bg-gradient-to-r from-pink-50 to-blue-50"
    },{
        id:3,
        title: "Spring sale Collections",
        description:"Sale, Up to 50% OFF!",
        img:"https://www.istockphoto.com/photo/a-back-view-of-a-woman-holding-shopping-bags-in-front-of-a-store-window-gm2155795543-576589822?utm_source=pixabay&utm_medium=affiliate&utm_campaign=sponsored_image&utm_content=srp_bottombanner_media&utm_term=spring+sale+collections",
        url:"/",
        bg:"bg-gradient-to-r from-blue-50 to-yellow-50"
    },
]
import { url } from 'inspector';
import Link from 'next/link';
import React, { useState } from 'react';

const Slider = () => {
     const [current, setcurrent] = useState(0);
  return (
    <div className=' h-[calc(100vh-80px)] overflow-hidden'>
      <div className=' w-max h-full flex transition-all ease-in-out duration-1000'>
        {slides.map(slide=>(
            <div className='`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`' 
            key={slide.id}>
                {/* TEXT CONTAINER */}
                <div className=' w-1/2'>
                    <h2>{slide.description}</h2>
                    <h1>{slide.title}</h1>
                    <Link href={slide.url}>
                    <button>SHOP NOW</button>
                    </Link>
                </div>
                {/* IMAGE CONTAINER */}
                <div className=' w-1/2 relative'>
                    <img src={slide.img} alt="" sizes='100%' className=' object-contain'/>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;


// "use client";
// import Link from "next/link";
// import React, { useState } from "react";

// const slides = [
//   {
//     id: 1,
//     title: "Summer Sale Collections",
//     description: "Sale, Up to 50% OFF!",
//     img: "https://images.unsplash.com/photo-1555529771-835f59fc5efe",
//     url: "/",
//     bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
//   },
//   {
//     id: 2,
//     title: "Winter Sale Collections",
//     description: "Sale, Up to 50% OFF!",
//     img: "https://images.unsplash.com/photo-1517898718980-56d9ec7ff2c5",
//     url: "/",
//     bg: "bg-gradient-to-r from-pink-50 to-blue-50",
//   },
//   {
//     id: 3,
//     title: "Spring Sale Collections",
//     description: "Sale, Up to 50% OFF!",
//     img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
//     url: "/",
//     bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
//   },
// ];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);

//   return (
//     <div className="h-[calc(100vh-80px)] overflow-hidden relative">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         // style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id} className="min-w-full flex items-center justify-center">
//             {/* TEXT CONTAINER */}
//             <div className="text-center p-6">
//               <h2 className="text-xl font-semibold">{slide.description}</h2>
//               <h1 className="text-3xl font-bold">{slide.title}</h1>
//               <Link href={slide.url}>
//                 <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
//                   SHOP NOW
//                 </button>
//               </Link>
//             </div>
//             {/* IMAGE CONTAINER */}
//             <div className="relative w-[50%]">
//               <img src={slide.img} alt="sale" className="w-full object-cover" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Buttons for sliding */}
//       <button
//         className="absolute top-1/2 left-4 bg-gray-800 text-white px-3 py-1 rounded"
//         // onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
//       >
//         Prev
//       </button>
//       <button
//         className="absolute top-1/2 right-4 bg-gray-800 text-white px-3 py-1 rounded"
//         // onClick={() => setCurrent((current + 1) % slides.length)}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Slider;


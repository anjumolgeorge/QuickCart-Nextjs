// import Link from 'next/link';
// import React from 'react';

// const ProductList = () => {
//   return (
//     <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
//       <Link href='/test' className=' w-full flex flex-col gap-4' >
//       <div className='w-full h-80'>
//       <img src="winter.jpg" 
//       alt="" 
//       sizes='25vw'
//       className=' absolute object-cover rounded-md z-10 hover: opacity-0 transition-opacity easy duration-500'/>
//       <img src="winter1.jpg" 
//       alt="" 
//       sizes='25vw'
//       className=' absolute object-cover rounded-md'/>

//       </div>
//       </Link>
//     </div>
//   );
// }

// export default ProductList;

import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href='/test' className='w-full flex flex-col gap-4'>
        <div className='w-full h-80 relative overflow-hidden'>
          {/* First Image (Default) */}
          <img 
            src="winter.jpg" 
            alt="Winter Collection" 
            className="w-full h-full object-cover rounded-md absolute top-0 left-0 transition-opacity duration-500 ease-in-out hover:opacity-0"
          />
          {/* Second Image (Appears on Hover) */}
          <img 
            src="winter1.jpg" 
            alt="Winter Collection Hover" 
            className="w-full h-full object-cover rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100"
          />
        </div>
      </Link>
    </div>
  );
}

export default ProductList;

import Link from 'next/link';
import React from 'react';

const ProductList = () => {
  return (
    <div className=' flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link href='/test'className=' w-full h-80' >
      <img src="summercollections.jpg" 
      alt="" 
      sizes='25vw'/>
      </Link>
    </div>
  );
}

export default ProductList;

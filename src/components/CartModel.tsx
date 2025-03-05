"use client"
import React from 'react';

const CartModel = () => {

    const CartItems = false
  return (
    <div className=' absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
  {!CartItems ? (
    <div> Cart is empty</div>
  ) : (
    <div>
        <img src="https://cdn.pixabay.com/photo/2017/03/28/12/09/chairs-2181944_640.jpg"
         alt="" 
         width={72}
         height={72}
         className=' object-cover rounded-md'
         />
         <div className=''>
        {/* TOP */}
        <div>
            {/* TITLE */}
            <div>
                <h3>Product Name</h3>
                <div className=''>$49 </div>
            </div>
            {/* DESC */}
            <div className=''>available </div>
        </div>

        {/* BOTTOM */}
         </div>
    </div>
  )}
    </div>
  );
}

export default CartModel;

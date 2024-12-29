
import { useContext } from 'react';
import { CartContext } from '@/app/context/Cartcontext';
import React from 'react';
import { AiOutlineLeft, AiOutlineClose } from 'react-icons/ai'; // Import both the curved left and close icons

const Cart = () => {
     const { showCart, setShowCart }: any = useContext(CartContext);
   
     const handleClose= () => {
       setShowCart(!showCart)
     }
  return (
    <div className="fixed mt-40 top-0 right-0 w-1/2 h-auto bg-white shadow-lg">
      {/* Empty Cart Section */}
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          {/* Back Arrow Icon */}
          <button onClick={handleClose} >
            <AiOutlineLeft className="text-gray-500 text-2xl cursor-pointer" />
          </button>

          <h2 className="text-xl font-semibold text-gray-800">Your Cart  <span className='text-pink-600'>0</span></h2>
         

          {/* Close Icon (X) */}
          <button className="text-gray-500 text-2xl">
            <AiOutlineClose className="cursor-pointer" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 p-4">
          <p className="text-gray-600">Your cart is empty.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { LuMinus } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import CartItem from "./CartItem";

function Cartpage() {
  const { cart,totalAmount,handleclear } = useContext(CartContext);

  return (
    <div className="w-full min-h-screen  ">
      <div class="h-full   pt-20 pb-6 ">
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3 ">
            <h1 class="mb-10 text-start text-3xl pl-4 font-bold">
              Shopping Cart
            </h1>
            <hr className="py-3 border-slate-600 " />
            {/* cart part */}
            {cart.map((item) => {
              
                return <CartItem product={item} key={item.id} />;
           
            })}
          </div>
          {/* Show part */}
          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="flex justify-between">
              <p class="text-gray-700 text-base font-bold">Shipping</p>
              <p class="text-gray-700 hover:underline font-bold" onClick={handleclear}>Clear</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold text-slate-900">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">${parseInt(totalAmount).toFixed(2)}</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;

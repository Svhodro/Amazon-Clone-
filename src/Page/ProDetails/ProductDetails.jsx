import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

import { CartContext } from "../../context/CartContext";

function ProductDetails() {
  const { details } = useContext(UserContext);
  const {handleplus,handleminus,addtocart,cartAmount}=useContext(CartContext)
console.log(details)
  const AddToCart = () => {
    const userData = JSON.parse(localStorage.getItem("userdata"));
    const data = {
      ProductId: details._id,
      img: details.image,
      title: details.title,
      price: details.price,
      catagory: details.catagore,   
      };
  };

  const [quantity,setQuantity]=useState(0)

 
  return (
    <div className=" w-full min-h-screen bg-slate-900  flex justify-center items-center ">
      <div className=" py-4 w-full h-full ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px]  rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full p-4 object-cover"
                  src={details.image}
                  alt="Product Image"
                />
              </div>
              
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
                {details.title}
              </h2>
              <p className="text-gray-600  text-sm mb-4">
               categore:{details.category               }
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold  text-white">
                    Price: ${details.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-white dark:text-gray-300">
                    Availability : 
                  </span>
                  <span className="text-white dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>

              <div className="mb-4">
               
              </div>
              <div>
                <span className="font-bold text-slate-300 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {details.description }
                 
                </p>
              </div>
              <div className="flex -mx-2 mb-4 mt-6">
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-white dark:bg-gray-600 text-slate-900 py-2 px-4 rounded-full font-bold hover:bg-gray-800 "
                    onClick={()=>addtocart(details)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

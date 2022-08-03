import React from "react";
import { GrCart } from "react-icons/gr";
//import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";



const Product2 = () => {
  return (
    <div className=" flex flex-wrap bg-Cardoverl">
      <div className=" flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden text-yellow-400 sm:w-500">
        30% off
        <img
          src="https://demo.bestrolly.com/_next/image?url=https%3A%2F%2Fimages.nana.sa%2Fpics%2Fe4f739d0ece36e0498f045d07f361b4fb16441da-00%3D%3Dh400%3Dw400.jpg&w=128&q=75  "
          alt=""
          className=" h-20 m-6"
        />
        <div>
          <h2 className=" text-center px-2 pb-2 text-black"> SAR 8.8 </h2>
          <h2 className=" text-center px-2 pb-2 text-black">
            
            Halwani and Tahhan Red Lentil Whole 500 G
          </h2>
          <span className="flex items-center bg-white mb-5 ml-2 mr-2">
            <img src="https://t3.ftcdn.net/jpg/03/69/03/90/360_F_369039092_oUKvZobOdh908Qx2b13CWIAM0X8mF56t.jpg"   />
          </span>
          
        </div>
        <a
          href="#"
          className=" h-10 bg-cde text-white p-1   transition-all duration-500"
        >
          <span className=" flex items-center mt-1 mb-5 ml-5  ">
            {" "}
            <GrCart className=" mr-2" /> Add To Bag
          </span>
        </a>
      </div>
    </div>
  );
};

export default Product2;

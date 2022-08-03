import React from "react";
import { GrCart } from "react-icons/gr";
//import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";



const Productone = () => {
  return (
    <div className=" flex flex-wrap bg-Cardoverl">
      <div className=" flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden text-yellow-400 sm:w-500">
        30% off
        <img
          src="https://demo.bestrolly.com/_next/image?url=https%3A%2F%2Fimages.nana.sa%2Fpics%2Fc86cbbd00f2673ccc9a2d8d8cfeeb628bc2f1264-02%3D%3Dh400%3Dw400.jpg&w=640&q=75  "
          alt=""
          className=" h-20 m-6"
        />
        <div>
          <h2 className=" text-center px-2 pb-5 text-black"> SAR 20 </h2>
          <h2 className=" text-center px-2 pb-5 text-black">
            {" "}
            Kasih chickpeas 135 G X 4{" "}
          </h2>
          <span className="flex items-center bg-white mb-5 ml-2 mr-2">
            <img src="https://t3.ftcdn.net/jpg/03/69/03/90/360_F_369039092_oUKvZobOdh908Qx2b13CWIAM0X8mF56t.jpg"   />
          </span>
          
        </div>
        <a
          href="#"
          className=" h-10 bg-cde text-white p-1  hover:bg-cde transition-all duration-500"
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

export default Productone;
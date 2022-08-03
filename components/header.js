import React from "react";
import Image from "next/image";
import { CgSearch } from "react-icons/cg";
import { GrCart  } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
function Header() {
  return (
    <header>
      <div className="flex items-center bg-abc p-1  ">
        <div className="mt-2 flex items-center flex-grow ml-4 mb-5  sm:flex-grow-0">
          <img
            src="https://demo.bestrolly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.81089e4a.svg&w=256&q=75"
            width={200}
            height={200}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  ">
          <input
            className="p-2 h-full w-2 flex-grow items-center flex-shrink rounded-md focus:outline-none px-2 ml-8 "
            type="text" placeholder="  Search Product "
          />
          <CgSearch className="h-10 w-8 bg-yellow-300 rounded-md  mr-20 hover:bg-yellow-500 " />
          
        </div>
        
        {/* Right div*/}
        <div className="text-white flex flex-grow-0 items-start  ml-2 cursor-pointer">
          <div className="flex ">
            <MdLocationOn  className="h-10 cursor-pointer w-6  items-start text-white   " />
           <h4 className=" text-left mr-32 ">Delivery To</h4>
          </div>
          <div>
            <GrCart className="h-10 cursor-pointer w-5 mr-10  " />
          </div>

          <MdManageAccounts className="h-10 cursor-pointer w-5 items-cente ml-10   " />
          <div
            className="flex flex-col mr-8 items-start
                "
          >
            <p className="  items-center font-light font-Poppins  ">Hello Guest</p>
            <p2 className=" font-extrabold align-text-bottom items-baseline font-Poppins ">
              {" "}
              Sign in/Rejister
            </p2>
          </div>
        </div>
      </div>
      {/* Bottam nav8*/}
      <div className="flex h-10   items-center px-5 bg-cde cursor-pointer">
        <p className="link flex mr-8 h-10 text-center w-32 font-Poppins items-center bg-white font-light text-xs text-neutral-600  ">
          <BiCategory className="h-8 ml-2  mr-2 w-6  " />
          All Catagorey
        </p>
        <p className="link pl-3  text-xs  text-white font-light cursor-pointer font-Poppins">
          Weekly Deals
        </p>

        <p className="link  pl-5 text-xs  text-white font-light cursor-pointer font-Poppins ">
          Comobo Offers
        </p>

        <p className="link ml-3 pl-5 text-xs font-light text-white cursor-pointer font-Poppins">
          Hot Offers
        </p>

        <p className="link ml-3 pl-5 text-xs font-light text-white cursor-pointer font-Poppins ">
          Daily Essintial Offers
        </p>
      </div>
    </header>
  );
}

export default Header;

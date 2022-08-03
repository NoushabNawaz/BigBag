import React from 'react'
import { MdShoppingCart } from "react-icons/md";

const Mainrow = () => {
  return (
    <div
    className=' w-full my-12 overflow-x-scroll: overflow-x-hidden flex-col'
    >
        <div className=' flex-col w-300 md:w-350 h-auto bg-gray-100 rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg'>
            <div className=' w-full flex items-center justify-between'>
                <img src="https://demo.bestrolly.com/_next/image?url=https%3A%2F%2Fimages.nana.sa%2Fpics%2Fe4f739d0ece36e0498f045d07f361b4fb16441da-00%3D%3Dh400%3Dw400.jpg&w=640&q=75" alt="" className=' w-40 -mt-8' />
                <div className=' w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingCart className=' text-white' />
                </div>
                <div className=' w-full flex items-end justify-end'>
                    <p className=' text-textColor font-semibold text-base md:text-lg'> SAR 25</p>
                    <p className=' mt-1 text-sm text-black'> Halwani Packet</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainrow
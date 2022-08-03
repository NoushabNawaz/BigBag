import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div><footer className="text-white body-font bg-efg font-Poppins ">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <Link  href={"/"} >
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
         <img src="https://demo.bestrolly.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.81089e4a.svg&w=256&q=75" alt="" width={200} height={200} />
          
        </a>
       </Link>
      </div>
      <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first font-Poppins">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 font-Poppins">About Us</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">What We do</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Customer Reviews</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Careers</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Media</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Affiliate Program</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Sell On BB</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Terms and Conditions</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Vendor Connect</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Contact Us</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 font-Poppins">Quick Links</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Become a Brand Partner</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Corporate Gift</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Gift Card</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">New Products</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 font-Poppins">More</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Receipes</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Deals & Coupons</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">faviourite Menue</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Products FAQ's</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 font-Poppins">Customer Care</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Shipping Information</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Our Gurantee</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">FAQs</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800 font-Poppins">Refund Policy</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-efg">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left font-Poppins">©  2022 www.bigbag.com . All Rights Reserved
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@knyttneve</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer
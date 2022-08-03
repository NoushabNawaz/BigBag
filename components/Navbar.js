import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Card from './card.js'
import Card2 from './rowslider/card2.js'
import Category from './category.js'



const Navbar = () => {
  return ( 

    
    <div>
    <h1 className=' ml-5 mt-5 font-semibold font-Poppins text-xl mb-2 text-center  '>Shop By Category</h1>
    <Category />
    <h1 className=' ml-5 mt-2 font-semibold font-Poppins text-xl mb-2 '>Explore  Somthing  New</h1>
    <Card />
    <div className=' mt-5 mb-3 ml-3 mr-3 '>
      <img src="https://demo.bestrolly.com/_next/image?url=https%3A%2F%2Fbigbag.sirv.com%2FHomepage%2FproductBannerAdv.svg&w=1920&q=75" alt="" />
    </div>
    <h1 className=' ml-5  font-semibold font-Poppins text-xl mb-8 mt-5  '>Best Moving products</h1>
    <Card2 />
    <div className=' mt-5 mb-3 ml-3 mr-3 '>
<img src="https://demo.bestrolly.com/_next/image?url=https%3A%2F%2Fbigbag.sirv.com%2FHomepage%2Fadvertisment.svg&w=1920&q=75" alt="" />
    </div>
    <h1 className=' ml-5  font-semibold font-Poppins text-xl mb-8 mt-5  '> Today's Deal</h1>
    <Card2 />
    <div className=' flex flex-row' >
     <div className=' ml-5 mr-3 ' ><img src="https://drive.google.com/uc?export=view&id=14Ukqn2iCP1OWJWSs9uX3VqTWo8_JsUXY " alt="" /></div> 
     <div className=' ml-3 mr-3 '><img src="https://drive.google.com/uc?export=view&id=1Yj0YlhgLebsbRRw7A5CfEjb31z2tCS4U" alt="" /></div> 
     <div className=' mr-4 '><img src="https://drive.google.com/uc?export=view&id=1rx8qF1-ctiJVMVcHra6HUFDw49WBdEV2" alt="" /></div> 
    </div>
    <h1 className=' ml-5  font-semibold font-Poppins text-xl mb-8 mt-5  '> Recommended Products </h1>
    <Card2 />
    
        </div>
        
    
  )
}

export default Navbar;
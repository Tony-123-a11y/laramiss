import React, { useContext } from 'react';
import productContext from '../context/ProductContext';
import Heading from './Heading';
import { IoStar } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { motion } from 'motion/react';


const Preview=(props)=>{
    let {setpreview,preview,productDetails}=useContext(productContext)
    let discountInPrice= productDetails.discount * (100/productDetails.price)
    let finalPrice= Math.round(productDetails.price-discountInPrice)
    return(
        <div className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-100 w-full h-full bg-[rgba(0,0,0,0.6)]   flex items-center justify-center'>
            <div className="absolute left-0 top-0 w-full h-full backdrop-blur-sm"></div>
        <motion.div
        initial={{
            scale:0.9,
        }}
        animate={{
            scale:1
        }}
        transition={{
            delay:.05,
            duration:0.2
        }}
        className="container xl:max-w-[1050px]   max-sm:max-w-[640px]  h-[450px] bg-secondary  relative max-md:h-screen ">
            {/* flex container */}
            <div className="preview flex h-full py-6 max-md:block max-md:overflow-y-scroll max-md:py-2">
                {/* image container */}
           <div className='h-full w-[40%] pl-6 max-md:w-full m-auto max-md:p-5 max-md:h-[350px] max-sm:p-2'>
           <img src={productDetails.thumbnail} alt="" className='h-full w-full object-contain   object-top max-md:object-cover max-md:object-center' />
           </div>
           {/* text container */}
          <div className='preview pl-11 pr-20 w-[60%] overflow-y-scroll max-md:w-full max-md:overflow-y-hidden max-md:p-6 max-sm:p-2'>
          <h1 className='text-4xl font-medium font-productTitle text-white max-md:text-2xl'>{productDetails.title}</h1>
          <ul className='flex items-center justify-start mt-4'>
               {
                Array(5).fill('').map((star,i)=>{
                   return  Math.round(productDetails.rating)>i ? <li className='text-yellow-400 text-3xl max-md:text-xl'><MdOutlineStarPurple500/></li> : <li className='text-yellow-400 text-3xl max-md:text-xl'><MdOutlineStarOutline/></li>
                })
               }
               </ul>
             
               <p className='text-sm text-primaryFont mt-6 leading-6 tracking-wider'>{productDetails.description}</p>
               <hr className='text-primaryFont opacity-25 mt-6 ' />
               <h2 className='text-lg tracking-wider text-white mt-4'>Availability:<span className={`${productDetails.availability==="In Stock" ? 'text-green-500' : 'text-red-500'} ml-2 text-sm font-base`}>
                {productDetails.availability}</span></h2>
               <div className="flex justify-between items-center mt-3"><h2><span className='text-4xl font-bold text-white max-md:text-3xl'>${finalPrice}</span><sub><del className='text-white text-lg max-md:text-sm'>${productDetails.price}</del></sub></h2>
                 { ( productDetails.discount>0 && <span className='text-lg font-semibold text-red-500 max-md:text-sm'>-${productDetails.discount}%</span>)}
               </div>

               <div className="flex items-center justify-between mt-10 flex-wrap gap-y-8 ">
                <div className="flex items-center justify-center text-white text-lg gap-16">
                <span className='cursor-pointer text-primaryFont hover:text-hover  transition duration-200'><FaMinus/></span>
                <span>1</span>
                <span className='cursor-pointer text-primaryFont hover:text-hover  transition duration-200'><FaPlus/></span>
                </div>
                <button className='px-8 py-4 bg-hover uppercase font-semibold tracking-widest cursor-pointer text-sm hover:text-white hover:bg-black transition duration-200 max-md:px-4 max-md:py-3 max-md:text-xsm max-sm:w-full'>Add to cart</button>
                </div>
          </div>
            </div>
            {/* cross button */}
            <div onClick={()=>setpreview(false)} className=" absolute right-6 top-6 w-6 h-6  cursor-pointer group">
                <span className='h-[1px] rotate-45 bg-white w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-150 ease-out group-hover:rotate-0'></span>
                <span className='h-[1px] rotate-[-45deg] bg-white w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-150 ease-out group-hover:rotate-0'></span>
            </div>
        </motion.div>
        </div>
    )
}

export default  Preview



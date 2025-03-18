import React, { useContext } from 'react'
import SmallHead from './SmallHead'
import Heading from './Heading'
import ProductCarousel from './productCarousel'
import ProductContext from '../context/ProductContext'

const BestSell = () => {
  let {products}=useContext(ProductContext)
  // const arr=products
const ringArr=products.slice(14,19)
const neckArr=products.slice(24,29)
const earArr=products.slice(34,39)
const arr=[...ringArr,...neckArr,...earArr]
console.log(arr)
  return (
    <div className='py-27 max-md:py-10'>
      <div className="container xl:max-w-[1350px]  ml-auto max-lg:max-w-[850px]  border-white max-sm:px-0">
       <div className="flex items-center justify-start max-md:block">
      <div className=" bg-[url(src/assets/bg-ring.webp)] bg-cover px-10  bg-no-repeat bg-center relative w-[40%] py-12  bg-primary max-md:w-full max-sm:px-2">
      <div className="absolute w-full h-full left-0 top-0 bg-black z-10 opacity-60"></div>
      <div className='relative z-30'>
     <SmallHead smallHeading={'Buy Now'} align={'left'}/>
    <Heading heading={'Best selling Products'} align={'left'}/>
     <p className=' text-sm leading-6 text-primaryFont mt-6 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
 <button className='py-4 mt-7 block text-sm font-bold shadow-button border-2 uppercase tracking-widest bg-hover  cursor-pointer border-hover text-black font-secondaryHead px-8 transition hover:bg-primary hover:border-hover hover:text-hover max-sm:py-3 max-sm:px-5 max-sm:tracking-wide max-sm:font-semibold'>Shop Now</button>
</p>
</div>
</div>
<div className="w-[60%] max-md:w-full">
  <ProductCarousel products={arr}/>
</div>

      </div>
      </div>
    </div>
  )
}

export default BestSell

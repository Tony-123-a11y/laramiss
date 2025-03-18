import React from 'react'
import SmallHead from './SmallHead'
import Heading from './Heading'

const ShopNow = () => {
  return (
    <div className='relative  py-27 max-md:py-10'>
      <div className="absolute left-0 top-0 w-full z-10 h-full bg-secondary opacity-60 ">  </div>
            <img src="src/assets/product-banner-min.png" alt="" className='absolute w-full h-full  object-cover top-0 left-0'/>
           <div className="container  z-20 relative xl:max-w-[1200px] m-auto px-4 max-sm:max-w-[640px] max-sm:px-2 flex justify-start ">
            
       <div className="  relative w-[60%] max-md:w-full">
     <SmallHead smallHeading={'buy now'}/>
     <Heading heading={'Rare collections.'}/>
     <p className=' text-sm leading-6 text-primaryFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
 <button className='py-4 mt-7 block text-sm font-bold shadow-button border-2 uppercase tracking-widest bg-hover  cursor-pointer border-hover text-black font-secondaryHead px-8 transition hover:bg-primary hover:border-hover hover:text-hover max-sm:py-3 max-sm:px-5 max-sm:tracking-wide max-sm:font-semibold'>Shop Now</button>
</p>
      </div>
      </div>
    
            
           
         
    </div>
  )
}

export default ShopNow

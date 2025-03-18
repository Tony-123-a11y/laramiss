import React from 'react'

const KnowMore = () => {
  return (
    <div className='mt-30 relative  border-white max-sm:mt-10'>
         <div className="container xl:max-w-[1200px] m-auto px-4 max-sm:max-w-[640px] max-sm:px-2 ">
            {/* main flexbox */}
            <div className="flex items-center justify-between max-lg:block">
      {/* flex box */}
      <div className="flex items-center justify-center border-white relative z-20  w-[47%] gap-7 max-lg:w-full max-sm:gap-4 ">
        {/* leftbox */}
        <div className="w-[50%] max-sm:w-full">
            {/* textbox */}
            <div className="bg-secondary text-center   px-8  py-15 mb-7 max-sm:mb-4 max-sm:px-4 max-sm:py-9">
                <img src="./src/assets/ringGold.png" alt="" className='w-17 h-17 object-cover m-auto' />
                <h1 className='text-white text-2xl font-primaryHead tracking-wider mt-4 mb-6'>New Rings</h1>
                <p className='text-primaryFont text-sm tracking-wider leading-6 max-sm:text-xsm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            {/* imageBox */}
            <div className="">
                <img src="src/assets/feature-01.jpg" alt="" className='w-full object-cover ' />
            </div>
        </div>
        {/* right box */}
        <div className="w-[50%] translate-y-10 max-sm:translate-y-0 max-sm:w-full">
             {/* imageBox */}
             <div className="">
                <img src="src/assets/feature-02.jpg" alt="" className='w-full object-cover  max-sm:mt-4' />
            </div>
            {/* textbox */}
            <div className="bg-secondary text-center   px-8  py-12 mt-7 max-sm:mt-4 max-sm:px-4 max-sm:py-9">
                <img src="./src/assets/necklaceGold.png" alt="" className='w-17 h-17 object-cover m-auto' />
                <h1 className='text-white text-2xl font-primaryHead tracking-wider mt-4 mb-6'>Wedding Collections</h1>
                <p className='text-primaryFont text-sm tracking-wider leading-6 max-sm:text-xsm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
           
        </div>
      </div>
      {/* content box*/}
      <div className=" z-20 w-[47%] relative max-lg:w-full max-lg:mt-30  max-lg:py-15 max-sm:mt-20">
     <h3 className='uppercase tracking-[3px] text-primaryFont font-bold font-secondaryHead'>About us</h3>
     <h1 className='capitalize max-w-96 text-7xl text-white font-primaryHead tracking-wide  leading-18 mt-2 mb-7 max-lg:max-w-full max-lg:text-6xl max-sm:text-5xl max-sm:leading-14 max-sm:mb-5'>Crafting Jewellery Since 1990.</h1>
     <p className='text-white text-sm pr-25 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
 <button className='py-4 mt-7 block text-sm font-bold shadow-button border-2 uppercase tracking-widest bg-hover  cursor-pointer border-hover text-black font-secondaryHead px-8 transition hover:bg-primary hover:border-hover hover:text-hover max-sm:py-3 max-sm:px-5 max-sm:tracking-wide max-sm:font-semibold'>Know More</button>
</p>
      </div>
      {/* container for shadow and image */}
      <div className=" border-white absolute bottom-[-140px] right-0 w-[55%]  h-[600px] max-lg:w-full max-lg:left-0 max-lg:bottom-[-90px] max-sm:h-[500px] max-sm:bottom-0">
            <div className=" w-full h-full absolute left-0 right-0  bg-gradient-to-b inset-shadow-lg from-primary via-transparent to-primary z-10"></div>
           <img src="src/assets/couple.webp" alt="" className='absolute w-full h-full object-cover left-0'/>
         </div>
      </div>
      </div>

    </div>
  )
}

export default KnowMore

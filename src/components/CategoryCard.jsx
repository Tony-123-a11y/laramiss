import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className='relative flex-grow basis-45 cursor-pointer group '>
        {/* hover container */}
        <div className="absolute w-full h-full top-0 left-[50%] items-center justify-center translate-x-[-50%] z-20 flex flex-col  space-y-4 opacity-0  group-hover:opacity-100 transtion duration-100 delay-100">
        <h1 className='text-3xl font-primaryHead  text-primary text-center  tracking-widest'>{props.title}</h1>
        <p className='text-center text-sm'>Lorem ipsum dolor sit amet.</p>
        <button className='flex gap-2 justify-center cursor-pointer'><span className="bi bi-arrow-right"></span><span>Buy Now</span></button>
        </div>
        <div className="absolute z-10 w-full  top-[50%] ">
        <h1 className='text-3xl font-primaryHead  text-white text-center  tracking-widest group-hover:opacity-0 transition duration-100 delay-100 max-xl:text-2xl'>{props.title}</h1>
        <button  className='py-4 text-sm font-semibold border-2  uppercase tracking-[3px] transition block m-auto mt-10 text-white border-hover  cursor-pointer font-secondaryHead px-9 hover:bg-hover  group-hover:border-primary group-hover:text-primary duration-100 max-xl:px-4 max-xl:py-2 max-xl:tracking-wide max-xl:text-xsm max-xl:mt-5 max-lg:tracking-wider max-md:tracking-wide max-md:px-5'>View More</button>
        </div>
        {/* black bg container */}
        <div className="absolute w-full h-full left-0 top-0 bg-[rgba(28,27,25,0.6)] group-hover:bg-[rgba(252,212,89,0.9)] transition duration-500"></div>
      <img src={props.imgSrc} alt="" className='w-full h-[500px] max-xl:h-[300px] object-cover'/>
    </div>
  )
}

export default CategoryCard

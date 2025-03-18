import React from 'react'

const Support = () => {
  return (
    <div>
      <ul className='py-5 text-white bg-[url(./assets/bg-header.png)] bg-center bg-cover bg-black flex items-center  gap-10 max-lg:gap-6 max-md:flex-wrap max-md:gap-2 max-md:gap-x-0 max-md:py-0 max-sm:hidden'>
          <li onClick={() => navigate('/delivery')} className='px-8 py-5 text-sm uppercase cursor-pointer relative duration-300  hover:bg-hover transition font-semibold tracking-widest flex-grow text-center after:content-[""] after:absolute after:w-[1px] after:bg-gray-500 after:h-[120%] after:right-[-6.5%] after:top-[50%] after:translate-y-[-50%] max-md:after:hidden max-md:py-6  max-md:w-[40%] max-sm:w-[100%]  max-md:border-b'>
            Easy Devlivery & Setup
          </li>
          <li onClick={() => navigate('/delivery')} className='px-8 py-5 text-sm uppercase cursor-pointer relative duration-300  hover:bg-hover transition font-semibold tracking-widest flex-grow text-center after:content-[""] after:absolute after:w-[1px] after:bg-gray-500 after:h-[120%] after:right-[-6.5%] after:top-[50%] after:translate-y-[-50%] max-md:after:hidden max-md:py-6  max-md:w-[40%] max-sm:w-[100%]  max-md:border-b'>
           Live Chat Support
          </li>
          <li onClick={() => navigate('/delivery')} className='px-8 py-5 text-sm uppercase cursor-pointer relative duration-300  hover:bg-hover transition font-semibold tracking-widest flex-grow text-center after:content-[""] after:absolute after:w-[1px] after:bg-gray-500 after:h-[120%] after:right-[-6.5%] after:top-[50%] after:translate-y-[-50%] max-md:after:hidden max-md:py-6  max-md:w-[40%] max-sm:w-[100%]  max-md:border-b'>
            post sale support
          </li>
          <li onClick={() => navigate('/delivery')} className='px-8 py-5 text-sm uppercase cursor-pointer relative duration-300  hover:bg-hover transition font-semibold tracking-widest flex-grow text-center max-md:after:hidden max-md:py-6  max-md:w-[40%] max-sm:w-[100%]  max-md:border-b'>
            30 days money returns
          </li>

        </ul>
    </div>
  )
}

export default Support

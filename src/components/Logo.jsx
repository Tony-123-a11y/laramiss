import React from 'react'

const Logo = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='relative w-50 m-auto 
      after:content-[""]   after:absolute after:h-[1px]  after:opacity-50 after:w-[200px] max-sm:after:w-[100px] after:bg-secondary after:top-[50%] after:left-[150px] after:translate-y-[-50%]
      before:content-[""]  before:absolute before:h-[1px]  before:w-[200px] max-sm:before:w-[100px] before:opacity-50 before:bg-secondary before:top-[50%] before:right-[150px] before:translate-y-[-50%]'>
      <img src="/src/assets/logo.webp" alt="" className='object-cover object-center  w-18 rounded-full m-auto  h-18 
      
      '/>
      </div>
      </div>
    </div>
  )
}

export default Logo

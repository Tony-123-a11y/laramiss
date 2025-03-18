import React from 'react'

const Category = (props) => {
  return (
    <div className='w-full max-xsm:text-center  max-xsm:bg-secondary'>
      <div className="p-5 border-2  border-border cursor-pointer hover:bg-primary transition duration-200 hover:border-primary relative group max-xsm:border-secondary">
        <span className='bi bi-anklet bg-hover w-13 h-13 flex items-center justify-center z-10 relative max-xsm:m-auto'>
            <img src={props.imgSource} alt="" className='w-[50%] obejct-contain' />
        </span>
        <h1 className='text-xl text-white font-[poppins] my-3 font-semibold z-10 relative max-xsm:text-lg max-xsm:font-normal'>{props.heading}</h1>
        <p className='text-primaryFont text-sm font-medium '>{props.productCount} Products</p>
        <img src={props.imgSource} alt="" className='absolute w-25 h-25  pointer-events-none opacity-0 right-[-5%] top-[50%] translate-y-[-30%] transition ease-out duration-300 group-hover:opacity-100 group-hover:translate-x-[-20%] group-hover:translate-y-[-50%] max-xl:group-hover:translate-x-[-40%] max-xsm:hidden'/>
      </div>
    </div>
  )
}

export default Category

import React from 'react'

const SaleCard = (props) => {
    console.log(props)
  return (
    <div  className={`${props.index==0 ? 'row-span-2 ' : 'row-span-1'} max-md:row-span-1`}>
       <div className='relative group cursor-pointer w-full h-full  overflow-hidden'>
                <div className="absolute left-0 top-0 w-full h-full bg-black opacity-25 group-hover:opacity-0 transition duration-300"></div>
                <img src={props.background} alt="" className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-400 ease-out'/>
                <div className="absolute left-10 bottom-10 text-white max-md:left-4 max-md:bottom-4">
                    <h1 className='text-4xl mb-4 font-semibold max-md:mb-2 max-md:text-2xl'>{props.title}</h1>
                    <p className='text-sm font-medium max-md:text-xsm max-md:font-normal'>{props.description}</p>
                </div>
            </div>
    </div>
  )
}

export default SaleCard

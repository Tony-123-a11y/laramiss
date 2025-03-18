import React from 'react'


const Heading = (props) => {
  return (
    <div className=''>
       <h1 style={{textAlign:props.align}} className='capitalize  text-7xl text-white font-primaryHead tracking-wide  leading-20  max-lg:max-w-full max-lg:text-6xl max-sm:text-4xl max-sm:leading-14 max-sm:mb-3'>{props.heading}</h1>
    </div>
  )
}

export default Heading

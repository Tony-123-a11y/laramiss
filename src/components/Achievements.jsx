import React from 'react'
import { GiHeartNecklace } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { li } from 'motion/react-client';
const Achievements = () => {
    const arr=[
      {
        icon:<GiHeartNecklace  />,
        heading:'84K',
        descrp:'Jwelleries in album'
      },
      {
        icon: <FaRegThumbsUp />,
        heading:'10M',
        descrp:'Happy Feedbacks'
      },
      {
        icon:  <TbCategory />,
        heading:'2K',
        descrp:'Categories saved'
      },
      {
        icon:     <IoPersonOutline />,
        heading:'100M',
        descrp:'Happy clients'
      },
    ]
    
  return (
    <div className='py-27 max-md:py-10 bg-secondary'>
      <div className="container xl:max-w-[1200px] m-auto px-4 max-sm:max-w-[640px] max-sm:px-2 ">
       <ul className="flex items-center justify-around gap-8 flex-wrap">
           {
            arr.map((achviement,i)=>{
                return <li className='flex-grow basis-[222px] text-center'>
                    <div className='text-7xl text-hover flex items-start justify-center max-md:text-5xl max-sm:text-4xl'>{achviement.icon}</div>
                    <h1 className='text-white text-6xl font-semibold font-[poppins] mt-10 max-md:text-5xl max-md:font-medium max-sm:font-semibold max-sm:text-4xl max-sm:mt-5'>{achviement.heading}</h1>
                    <p className='text-primaryFont text-sm font-medium font-secondaryHead mt-4 max-sm:text-xsm'>{achviement.descrp}</p>
                </li>
            })
           }
       </ul>
       
      
   
      </div>
    </div>
  )
}

export default Achievements

import React from 'react'
import SmallHead from './SmallHead'
import Heading from './Heading'
import { FaPlay } from "react-icons/fa";
import VideoModel from './VideoModel';
import { useState } from 'react';
const HomeVideo = () => {
    const [visible, setvisible] = useState(false);
  return (
    <div className='relative'>
       <div className='py-27 max-md:py-10 bg-secondary relative  '>
       <div className="absolute right-0 top-0 h-full w-[30%] bg-hover bg-[url('/src/assets/pattern-03.png')] bg-no-repeat"></div>
       <div className="container relative   xl:max-w-[1200px] m-auto  max-sm:max-w-[640px] max-sm:px-2  ">
           <div className="flex items-center justify-start relative z-10 max-md:block ">
            {/* text content */}
            <div className=' w-[50%] px-6 max-md:w-full'>
                <SmallHead smallHeading={'design video'} align={'left'}/>
                <Heading heading={'Make Your Day Brighter'}/>
                <p className='text-sm  text-primaryFont tracking-wider leading-6 my-8 max-sm:my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat you have to understand this.</p>
                <button className='py-4 mt-7 block text-sm font-bold shadow-button border-2 uppercase tracking-widest bg-hover  cursor-pointer border-hover text-black font-secondaryHead px-8 transition hover:bg-primary hover:border-hover hover:text-hover max-sm:py-3 max-sm:px-5 max-sm:tracking-wide max-sm:font-semibold'>See more</button>
            </div>
            {/* video content */}
            <div className="h-[500px] bg-[url('/src/assets/videoThumbnail.jpg')] w-[48%] bg-no-repeat  bg-cover bg-center relative max-md:w-full max-md:h-[400px] max-md:mt-10 max-sm:mt-5 max-sm:h-[250px]">
             <div onClick={()=> setvisible(true)} className=" play absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-30 h-30 rounded-full bg-secondary cursor-pointer flex items-center justify-center text-white text-xl max-md:w-20 max-md:h-20">
                   <FaPlay/>
             </div>
            </div>
           </div>
           {
            (visible &&  <VideoModel source={"https://www.youtube.com/embed/EEJFMdfraVY?si=Ss1zbRpa7iKLCe25"} func={setvisible} visible={visible}/>)
           }
         
        </div>
        </div>
    </div>
  )
}

export default HomeVideo

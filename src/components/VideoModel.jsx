import React from 'react'

const VideoModel = (props) => {
    let {func,visible}=props
   
  return (
    <div>
         <div className={`fixed h-full w-full z-50 left-0 top-0  pointer-events-none  bg-black ${visible ? 'opacity-60' : 'opacity-0'}`}></div>
       <div className="w-[75%] h-[500px]  absolute z-60  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
       <div onClick={()=>func(false)} className=" absolute right-0 top-[-35px] w-6 h-6  cursor-pointer group">
                <span className='h-[2px] rotate-45 bg-white w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-150 ease-out group-hover:rotate-0'></span>
                <span className='h-[2px] rotate-[-45deg] bg-white w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-150 ease-out group-hover:rotate-0'></span>
            </div>
            <iframe className='h-full w-full' src={props.source} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           </div>
    </div>
  )
}

export default VideoModel

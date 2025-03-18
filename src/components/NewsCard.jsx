import React from 'react'

export default function NewsCard({date,image,heading}) {
  console.log(image)
    return (
      <div className="relative   w-full max-w-md h-[450px] bg-cover bg-center  overflow-hidden shadow-lg max-md:h-[350px]" style={{backgroundImage: `url(${image})`}}>
        <div className="absolute bg-gradient-to-t from-black/80 to-transparent  h-full w-full left-0 top-0"></div>
        <div className=" bottom-0 absolute left-0 w-full  p-6">
          <p className="text-sm text-white mb-1 cursor-pointer hover:text-hover transition duration-300">{date}</p>
          <h3 className="text-xl font-semibold text-white mb-2 cursor-pointer hover:text-hover transition duration-300">{heading}</h3>
          <button className="text-white  hover:text-gold cursor-pointer hover:text-hover transition duration-300">
            Read More →
          </button>
        </div>
      </div>
    );
  }
  



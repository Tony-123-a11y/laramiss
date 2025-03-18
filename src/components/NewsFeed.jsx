import React from 'react'
import SmallHead from './SmallHead'
import Heading from './Heading'
import NewsCarousel from './NewsCarousel'
const NewsFeed = () => {
  return (
    <div>
        <div className='py-27 max-md:py-10 bg-primary relative  '>
       <div className="container relative   xl:max-w-[1200px] m-auto  max-sm:max-w-[640px] max-sm:px-2  ">
             <div className="flex items-center justify-start">
              <div>
              <SmallHead smallHeading={'blog'}/>
              <Heading heading={'news feed'}/>
              </div>
              
             </div>
             <div className="mt-15 max-sm:mt-5">
                <NewsCarousel/>
              </div>
       </div>
       </div>
    </div>
  )
}

export default NewsFeed

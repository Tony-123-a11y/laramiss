import React from 'react'

const SmallHead = (props) => {
  return (
    <div>
<h3 style={{textAlign:props.align}} className=' my-4 uppercase tracking-[3px] text-primaryFont font-bold font-secondaryHead max-sm:text-sm max-sm:my-1'>{props.smallHeading}</h3>
    </div>
  )
}

export default SmallHead

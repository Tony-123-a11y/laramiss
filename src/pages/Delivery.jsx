import React from 'react'
import { useLocation } from 'react-router-dom'


const Delivery = () => {
  let location=useLocation()
console.log(location)
  return (
    <div>
      <h1 className='text-xl'>Hello this is delivery support page</h1>
    
    </div>
  )
}

export default Delivery

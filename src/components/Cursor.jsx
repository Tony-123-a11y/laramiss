import React from 'react'
import { useState,useEffect } from 'react'

function Cursor() {
 const [coords, setcoords] = useState({x:0,y:0})
   function movement(e){
     setcoords({x:e.clientX,y:e.clientY})
      
   }
   useEffect(() => {
     window.addEventListener('mousemove',movement)
   }, [])
   
    
   return (
  
     <>
   <div style={{ transform: `translate(${coords.x}px, ${coords.y}px)`}} className='absolute left-0 top-0 z-40   backdrop-blur-sm rounded-full   h-10 w-10'></div>
 </>
   )
}

export default Cursor

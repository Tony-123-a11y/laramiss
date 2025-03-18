import React from 'react'
import CategoryList from './CategoryList'
import { motion } from 'motion/react'
import { useState,useEffect } from 'react'


const Hero = () => {
  const [slide, setslide] = useState(true)
  const [startX, setstartX] = useState(0)
  

    function handleStart(e){
      setstartX(e.clientX)
    }
    function handleEnd(e){
     let endX=e.clientX
     if(startX - endX > 50 || endX - startX > 50){
     setslide(!slide)
   }
   
    }
    useEffect(() => {
      const timeout = setTimeout(() => {
        setslide(!slide);
      }, 5000);
  
      return () => clearTimeout(timeout); 
    }, [slide]);

    
  return (
    <div className='mt-30 max-md:mt-25 max-sm:mt-10'>
      <div className="container xl:max-w-[1200px] m-auto px-4 max-sm:max-w-[640px] max-sm:px-2 no-select overflow-hidden">
        <div onPointerDown={handleStart} onPointerUp={handleEnd} className="flex items-center justify-between max-lg:gap-x-4 max-sm:block ">
             {/* textContent */}
          <motion.div key={slide}
           initial={{
            translateX: -50,
            opacity:0
                 
          }}
          
          animate={{
             translateX: 0,
             opacity:1,
          }} 
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            duration:1,
            
          }}
            className=" w-[50%] max-sm:w-full max-sm:text-center">
            <motion.h3
            initial={{
              opacity:0,
              translateY:-30
            }}
            animate={{
              opacity:1,
              translateY:0
            }}
            transition={{
              duration:0.4,
              delay:0.5
            }}
             className='uppercase tracking-[3px] text-primaryFont font-bold font-secondaryHead'>jewelery design with love</motion.h3>
            <h1 className='capitalize text-[110px] text-white font-primaryHead tracking-wider  leading-30 my-8 max-lg:text-8xl max-lg:leading-25 max-md:text-6xl max-md:leading-16'>High End Jwellery Items</h1>
            <div className="flex items-center justify-start space-x-7 max-sm:justify-center">
            <motion.button
             initial={{
                  translateY:50,
                  opacity:0
            }} 
            transition={{
              delay:0.3,
              duration:0.4,
              ease:[0.32, 0, 0.64, 1],
              
            }}
            animate={{
              translateY:0,
              opacity:1
            }
            }
            className='py-5 text-sm font-semibold border-2 uppercase tracking-[3px] bg-hover  cursor-pointer border-hover text-primary font-secondaryHead px-8 hover:bg-primary hover:border-hover hover:text-hover max-lg:px-6 max-lg:py-3 max-lg:tracking-wider max-md:tracking-wide max-md:px-4'>Buy Now</motion.button>
            <motion.button
             initial={{
                  translateY:50,
                  opacity:0
            }} 
            animate={{
              translateY:0,
              opacity:1
            }
            }
            transition={{
              delay:0.5,
              duration:0.4,
              ease:[0.32, 0, 0.64, 1],
              
            }}
            className='py-5 text-sm font-semibold border-2 uppercase tracking-[3px] bg-primary text-primaryFont border-border  cursor-pointer font-secondaryHead px-9 hover:bg-hover hover:text-primary hover:border-hover max-lg:px-7 max-lg:py-3 max-lg:tracking-wider max-md:tracking-wide max-md:px-5'>Explore Now</motion.button>
          </div>
          </motion.div>
          {/* ImageContent */}
          <motion.div
          key={slide+1}
           initial={{
            translateX:70,
            opacity:0

          }} animate={{
             translateX:0,
             opacity:1,
          }} 
          transition={{
            ease: [0.25, 0.1, 0.25, 1.0],
            repeatDelay:5,
            duration:1,
            repeat:Infinity
          }}
          className=" w-[50%]  max-sm:hidden ">
            <img src={ slide ? "./src/assets/banner-01.jpg": "./src/assets/banner-02.jpg"} alt="" className='h-[590px]  w-full ml-auto  object-cover max-lg:h-[500px] max-md:h-[400px]' />
          </motion.div>
          </div>
          {/* Category List */}
          <CategoryList/>
      </div>
    </div>
  )
}

export default Hero

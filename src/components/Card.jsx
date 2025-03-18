import React, { useContext } from 'react'
import { motion } from 'motion/react'
import productContext from '../context/ProductContext'
const Card = ({product,current,border}) => {
  let {handlePreview}=useContext(productContext)
  let discountInPrice= product.discount * (100/product.price)
    let finalPrice= Math.round(product.price-discountInPrice)
  return (
    <div>
       <motion.li key={current+Math.random()*2}
     initial={{
      scale:0.85,
     opacity:0
     }}
     animate={{
      scale:1,
      opacity:1,
     
     }}
     transition={{
      duration:.4,
      
     }}

    
      className={` bg-secondary   ${border} cursor-pointer border-b-8 max-xl:border-b-0 hover:border-b-0 border-black relative overflow-hidden min-h-[510px] group max-lg:min-h-[470px] max-md:min-h-[420px] max-sm:min-h-[350px]`}>
      <div className="flex overflow-hidden items-center justify-center relative w-full max-sm:h-40 ">
       <img src={product.thumbnail} alt="ring" className='h-full w-full object-cover  group-hover:scale-105 transition duration-250'/>
       <div className="flex items-center justify-center w-18 h-8 bg-primary rounded-md absolute right-2 bottom-2 border border-gray-500 max-sm:w-14 max-sm:h-6">
         <img src={product.brandLogo} alt="" className='w-10 max-sm:w-8' />
       </div>
      </div>
     
     <div className="px-2">
     <h1 className='text-white text-xl tracking-wider font-productTitle font-semibold my-4 max-md:text-lg max-sm:text-base max-sm:text-xsm max-sm:font-normal max-md:my-2'>{product.title}</h1>
     <p className='text-sm text-primaryFont font-semibold my-4 max-md:my-1 max-md:font-normal max-md:text-xsm max-sm:my-2'>{product.description}</p>
     <div className="flex justify-between items-center "><h2><span className='text-2xl  font-bold text-hover max-md:text-lg'>${finalPrice}</span><sub><del className='text-white text-sm tracking-widest ml-1 font-semibold max-md:text-xsm'>{product.price}</del></sub></h2>
      { ( product.discount>0 && <span className='text-lg font-semibold text-red-500 max-md:text-sm'>-${product.discount}%</span>)}
      
      </div>
     </div>
    
     <ul className=" w-full  py-2 flex items-center justify-center space-x-10 absolute translate-y-10 duration-350 bottom-0 left-0 opacity-0 text-white font-semibold text-lg bg-black group-hover:translate-y-0  group-hover:opacity-100  transition max-lg:text-base max-xl:opacity-100 max-xl:translate-y-0 max-lg:py-1 max-sm:space-x-4 max-sm:py-1 max-sm:text-sm">
       <li onClick={()=> handlePreview(product)}><span className='bi bi-eye-fill hover:text-hover transition' title='Quick View'></span></li>
       <li><span className='bi bi-heart-fill hover:text-hover transition' title='Wishlist'></span></li>
       <li><span className='bi bi-repeat hover:text-hover transition' title='Compare'></span></li>
     </ul>
      </motion.li>
    </div>
  )
}

export default Card

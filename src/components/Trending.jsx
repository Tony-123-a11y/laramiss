import React, { memo, useContext } from 'react'
import SecondaryHeader from './SecondaryHeader'
import CategoryCard from './CategoryCard'
import ProductContext from '../context/ProductContext'
import Card from './Card'

const Trending = () => {
  let {products}= useContext(ProductContext)
 let sliceArr=  products.slice(18,22)


  return (
    <div className='mt-60 max-md:mt-30 max-sm:mt-10'>
       <div className="container xl:max-w-[1200px] m-auto px-4 max-sm:max-w-[640px] max-sm:px-2 ">
      <SecondaryHeader alignSmall={'center'} alignHead={'center'} smallHeading={'Avail our offers'} heading={'trending collection'} />
      <ul className='grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-2'>
       {
        sliceArr.map((product,i)=>{
           return <Card product={product} current={i}/>
        })
       }
      </ul>
      </div>
      <div className='flex items-center justify-start flex-wrap mt-15 max-sm:mt-5'>
         <CategoryCard imgSrc={'/src/assets/menu-gallery-1.jpg'} title={'Anklets'}/>
         <CategoryCard imgSrc={'/src/assets/menu-gallery-2.jpg'} title={'Armlets'}/>
         <CategoryCard imgSrc={'/src/assets/menu-gallery-3.jpg'} title={'Bracelets'}/>
         <CategoryCard imgSrc={'/src/assets/menu-gallery-4.jpg'} title={'Earrings'}/>
      </div>
    </div>
  )
}

export default memo(Trending)

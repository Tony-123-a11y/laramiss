import React from 'react'
import Category from './Category'


const CategoryList = () => {
  return (
    <div className='mt-17'>
      <div className="grid grid-cols-4  px-14 py-10 gap-8  bg-secondary max-xl:grid-cols-2  max-lg:px-4 max-lg:py-5 max-md:gap-2 max-sm:p-3 max-sm:grid-cols-2 max-sm:gap-y-2  max-xsm:bg-transparent">
          <Category heading={'Anklets'} productCount={3} imgSource={'./src/assets/bracelets2.png'}/>  
          <Category heading={'Armlets'} productCount={6} imgSource={'./src/assets/ring2.png'}/>  
          <Category heading={'Necklaces'} productCount={7} imgSource={'./src/assets/necklace2.png'}/>  
          <Category heading={'Earrings'} productCount={12} imgSource={'./src/assets/earrings2.png'}/>  
            </div>
    </div>
  )
}

export default CategoryList

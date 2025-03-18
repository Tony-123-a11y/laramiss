import React, { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext'
import SmallHead from './SmallHead'
import Heading from './Heading'
import FilterCategoryList from './filterCategoryList'
import Card from './Card'
import { memo } from 'react'


const FilterCategory = () => {
    let {products}=useContext(ProductContext)
    const [arr, setarr] = useState(products);
    const [filterArr, setfilterArr] = useState([]);
    const [active, setactive] = useState(1);

    function filterFunc(category,active){
      
         let filterArr= arr.filter((product)=> product.category===category)
         setfilterArr(filterArr)
         setactive(active)
    }
    
  return (
    <div className='py-27 max-md:py-10'>
      <div className="container xl:max-w-[1200px] m-auto px-4 max-sm:max-w-[640px] max-sm:px-2">
      <div id='top'></div>
    <SmallHead smallHeading={'Categories'}/>
    <Heading heading={'Our categories'}/>
    <FilterCategoryList filterFunction={filterFunc}/>
    <ul className='grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-2'>
    {
      filterArr.map((product,i)=>{
      return  <Card product={product} current={active}/>
      })
    }
</ul>
    </div>
    </div>
  )
}

export default FilterCategory

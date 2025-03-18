import React from 'react'
import SecondaryHeader from './SecondaryHeader'
import SaleCard from './SaleCard'


const Sale = () => {
    let arr=[
        {
            title:'Anklets',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, necessitatibus.',
            background:"/src/assets/sale1.jpg"
        },
        {
            title:'Armlets',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, necessitatibus.',
            background:"/src/assets/sale2.jpg"
        },
        {
            title:'Necklaces',
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, necessitatibus.',
            background:"/src/assets/sale3.jpg"
        }
    ]
  return (
    <div>
        <div className="container xl:max-w-[1200px] m-auto py-27 px-4 max-sm:max-w-[640px]  max-sm:py-10 max-sm:px-2 ">
        <SecondaryHeader alignSmall={'center'} alignHead={'center'} smallHeading={'may be you have earned it'} heading={'our sale products'} />
        <div className="grid grid-cols-2 grid-rows-[repeat(2,300px)] gap-8 mt-15 max-md:grid-cols-1 max-md:grid-rows-[repeat(3,250px)] max-md:gap-4  max-sm:gap-2">
           {
            arr.map((data,i)=>{
               return <SaleCard key={i} index={i}  title={data.title} description={data.description} background={data.background}/>
            })
           }
           
        </div>
        </div>
    </div>
  )
}

export default Sale

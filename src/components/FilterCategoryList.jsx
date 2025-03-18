import { a } from 'motion/react-client'
import React, { act, useEffect,useState } from 'react'


const FilterCategoryList = ({filterFunction}) => {
  const [active, setactive] = useState(1)

   useEffect(()=>{
    filterFunction('rings',active)
   },[])
    const arr=[
        <svg
      width="2em"
      height="2em"
      viewBox="0 0 512 512"
      fill='none'
      stroke="none"
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round"
     
    >
      <circle cx="256" cy="320" r="150" stroke="currentColor" strokeWidth="30" />
      <polygon points="180,120 256,40 332,120 256,200" stroke="currentColor" strokeWidth="25" />
      <line x1="200" y1="120" x2="256" y2="200" stroke="currentColor" strokeWidth="25" />
      <line x1="312" y1="120" x2="256" y2="200" stroke="currentColor" strokeWidth="25" />
      <line x1="256" y1="10" x2="256" y2="30" stroke="currentColor" strokeWidth="20" />
      <line x1="136" y1="80" x2="156" y2="100" stroke="currentColor" strokeWidth="20" />
      <line x1="376" y1="80" x2="356" y2="100" stroke="currentColor" strokeWidth="20" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" color="" fill="none" >
    <path d="M10.542 12.0002L10.9325 8.87621C11.0235 8.14822 11.3545 8.00024 12.042 8.00024C12.7295 8.00024 13.0605 8.14822 13.1515 8.87621L13.542 12.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8.2844 12.6118C9.6196 11.8003 10.785 12.1273 11.485 12.6482C11.7721 12.8618 11.9156 12.9685 12 12.9685C12.0845 12.9685 12.228 12.8618 12.5151 12.6482C13.2151 12.1273 14.3805 11.8003 15.7157 12.6118C17.468 13.6767 17.8645 17.1898 13.8226 20.1538C13.0527 20.7183 12.6678 21.0005 12 21.0005C11.3323 21.0005 10.9474 20.7183 10.1775 20.1538C6.13558 17.1898 6.53208 13.6767 8.2844 12.6118Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2.0059 3.00024C1.90863 4.57792 2.97686 8.0433 8.05347 9.66205M21.9941 3.00024C22.0914 4.57792 21.0231 8.0433 15.9465 9.66205" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" color="" fill="none" >
    <path d="M4 14.0056C7.6 14.0056 6.4 18.0056 10 18.0056" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 14.0056C17.6 14.0056 16.4 18.0056 20 18.0056" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 20.9998C8.65685 20.9998 10 18.5382 10 15.5016C10 12.4651 8.65685 10.0035 7 10.0035C5.34315 10.0035 4 12.4651 4 15.5016C4 18.5382 5.34315 20.9998 7 20.9998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 20.9999C18.6569 20.9999 20 18.5383 20 15.5018C20 12.4653 18.6569 10.0037 17 10.0037C15.3431 10.0037 14 12.4653 14 15.5018C14 18.5383 15.3431 20.9999 17 20.9999Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9.95511 7.2344C9.60461 7.03294 9.06061 6.71307 8.93297 4.78798C8.81979 3.08095 7.26883 2.90969 6.67606 3.03009C6.11908 3.14328 5.07565 3.73133 5.00769 4.95443C4.96211 5.77417 5.47047 6.56049 6.67279 7.03896C6.87541 7.1196 7.0183 7.30991 7.0183 7.52792V9.76224" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.937 7.2344C19.5865 7.03294 19.0425 6.71307 18.9149 4.78798C18.8017 3.08095 17.2508 2.90969 16.658 3.03009C16.101 3.14328 15.0576 3.73133 14.9896 4.95443C14.944 5.77417 15.4524 6.56049 16.6547 7.03896C16.8573 7.1196 17.0002 7.30991 17.0002 7.52792V9.76224" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em"  fill="none" >
    <path d="M18 4.5C18 5.88071 16.8807 7 15.5 7C14.1193 7 13 5.88071 13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 19.5C18 20.8807 16.8807 22 15.5 22C14.1193 22 13 20.8807 13 19.5C13 18.1193 14.1193 17 15.5 17C16.8807 17 18 18.1193 18 19.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M22 4.50006L18 4.49997M6 7.99988C6 6.59542 6 5.89319 6.33706 5.38874C6.48298 5.17036 6.67048 4.98286 6.88886 4.83694C7.39331 4.49988 8.09554 4.49988 9.5 4.49988H13M22 19.5002L18 19.5001M6 16.0002C6 17.4046 6 18.1069 6.33706 18.6113C6.48298 18.8297 6.67048 19.0172 6.88886 19.1631C7.39331 19.5002 8.09554 19.5002 9.5 19.5002H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em" color="" fill="none"  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em"  fill="none" >
    <path d="M9 9L5 5M16 12H22M12 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
</svg>

  
    ]
    const headingArr=[
      'rings','necklaces','earrings','anklets','armlets','bracelets'
    ]


    
  return (
    <div className='max-sm:fixed max-sm:right-0 max-sm:top-[50%] max-sm:translate-y-[-50%] z-30'>
      
      <ul className='flex items-center rounded-l-md overflow-hidden justify-center gap-8 mt-15 flex-wrap max-lg:gap-4 max-sm:block max-sm:w-10'>
             {arr.map((svg,index)=>{
               return  <li key={index+1}   onClick={()=>{
                filterFunction(headingArr[index],active)
               setactive(index+1)
               }}  className={`${active==index+1 ? 'bg-hover text-black max-sm:bg-hover' : 'bg-secondary text-white max-sm:bg-[rgba(0,0,0,0.4)]'} relative p-6 w-[14.3%] max-xl:w-[30%] max-lg:w-[14.3%] max-sm:w-full   rounded-sm  cursor-pointer text-3xl  flex gap-4 items-center justify-center flex-col  transition max-lg:p-3 max-lg:text-xl max-sm:text-xsm max-sm:rounded-none max-sm:py-3   max-sm:backdrop-blur-md`}>
                <a href='#top' className='absolute left-0 top-0 w-full h-full  z-60'></a>
                     {svg}
                     <h2 className='text-xsm font-bold uppercase tracking-wider max-lg:font-semibold max-lg:tracking-wide max-sm:hidden'>{headingArr[index]}</h2>
               </li>
             })}
      </ul>
    </div>
  )
}

export default FilterCategoryList

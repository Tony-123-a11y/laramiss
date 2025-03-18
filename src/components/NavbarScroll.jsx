import React from 'react'
import { useState } from 'react'
import { motion } from 'motion/react'

const NavbarScroll = () => {
      const [homePage, sethomePage] = useState(false)
      const [blogPage, setblogPage] = useState(false)
      const [blogPageList, setblogPageList] = useState(false)
      const [featurePage, setfeaturePage] = useState(false)
      const [pages, setpages] = useState(false)
      const [pageList, setpageList] = useState(false)
      const [galleryList, setgalleryList] = useState(false)
      const [shop, setshop] = useState(false)
      const [product, setproduct] = useState(false)
      const [active, setactive] = useState(1)
      const [contactUs, setcontactUs] = useState(false)
      const lists={
        1: [
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
                <ul className='w-full'>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>
                
             ],
        2: [
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
                
             ],
        3: [
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
               
                
             ],
        4: [
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
               
               
                
             ],
        5: [
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
               
               
                
             ],
        6: [
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
                <ul>
                  <h1 className='px-6 text-xl my-4'>Shop Pages</h1>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Left Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Right Sidebar V2</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Shop Centered</li>
                  <li className='py-2 px-6 text-sm text-primaryFont hover:text-white transition duration-300 font-semibold'>Product Details</li>
                </ul>,
               
               
               
                
             ]
          
      }
    
  return (
    <motion.div
    initial={{
        opacity:0,
        translateY:-200
    }}
    animate={{
        opacity:1,
        translateY:0
    }}
    transition={{
        duration:0.5,
        ease:'easeOut'
    }}

    className="bg-secondary shadow-2xl fixed left-0 top-0 w-full z-50">
            <div className="container xl:max-w-[1200px]  m-auto px-4 max-sm:max-w-[640px] max-sm:px-2 font-secondaryHead">
            <nav className="bg-secondary w-full    relative row justify-between max-xl:px-6 max-xl:py-4 max-sm:px-4 max-sm:py-3">
            {/* Logo */}
            <div className='w-50 cursor-pointer flex items-center justify-start  text-center gap-2 font-primaryHead'>
        <img src="/src/assets/logo.webp" alt="" className='object-cover object-center  w-18 rounded-full   h-18'/>
        <div className=''>
          <h1 className='text-hover  uppercase  text-2xl font-bold font-primaryHead '>Evara</h1>
          <h2 className='text-sm text-left'>Luxury Pieces</h2>
        </div>
      </div>
      {/* Middle List */}
      <ul className='flex items-center justify-center  max-xl:hidden'>
      <li onMouseEnter={()=>sethomePage(true)} onMouseLeave={()=>sethomePage(false)} onClick={() => navigate('/delivery')} className=' py-10 px-4 relative max-xl:px-3 cursor-pointer transition font-bold text-hover'>
           Home
           {/* Home list */}
           <ul  className={`bg-secondary absolute left-0 top-full text-primaryFont  w-[235px] transition duration-[400ms] ${homePage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Homepage 1</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Homepage 2</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Homepage 3</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Homepage 4</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Homepage 5</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Homepage 6</li>
           </ul>
          </li>
          <li onMouseEnter={()=>setblogPage(true)} onMouseLeave={()=>setblogPage(false)} onClick={() => navigate('/delivery')} className=' py-10 px-4 relative max-xl:px-3 cursor-pointer transition font-bold hover:text-hover'>
          Blog
          {/* Blog List */}
           <ul  className={`bg-secondary absolute left-0 top-full text-primaryFont  w-[235px] transition duration-[400ms] ${blogPage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Blog List</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Blog Grid</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Blog Details</li>
            <li onMouseEnter={()=>setblogPageList(true)} onMouseLeave={()=>setblogPageList(false)} className='py-3 px-6 relative text-sm font-medium hover:text-black hover:bg-hover transition duration-300 row justify-between'><span>Post Formats</span> <span className='bi bi-chevron-right text-xs font-extrabold'></span>
            {/* Inner Blog List */}
            <ul  className={`bg-secondary absolute left-full top-0 text-primaryFont  w-[235px] transition duration-[400ms] ${blogPageList ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Gallery Format</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Video Format</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Quote Format</li>
            <li className='py-3 px-6 relative text-sm font-medium hover:text-black hover:bg-hover transition duration-300 row justify-between'>Audio Format</li>
            <li className='py-3 px-6 relative text-sm font-medium hover:text-black hover:bg-hover transition duration-300 row justify-between'>Link Format</li>
           </ul>
            </li>
           </ul>
          </li>
          <li onMouseEnter={()=>setfeaturePage(true)} onMouseLeave={()=>setfeaturePage(false)} onClick={() => navigate('/delivery')} className=' py-10 duration-200 px-4 max-xl:px-3 cursor-pointer transition font-bold hover:text-hover'>
           Feautres
           <div className={`bg-secondary w-full flex items-start justify-between border-t border-border h-max absolute left-0 top-full text-primaryFont transition duration-[400ms] ${featurePage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
           <ul  className='h-full w-[30%] relative   after:content-[""] after:absolute after:top-0 after:w-[1px] after:bg-border after:h-full after:right-0'>
            <li onClick={()=> setactive(1)} className={`${active==1 ? 'bg-gradient-to-r from-hover via-hover to-transparent text-black' : 'bg-secondary'} py-2 px-6 text-sm row justify-start  space-x-3 font-medium hover:text-black transition duration-300`}><span className="text-lg bi bi-house-door-fill"></span><span>Shop Styles</span></li>
            <li onClick={()=> setactive(2)} className={`${active==2 ? 'bg-gradient-to-r from-hover via-hover to-transparent text-black' : 'bg-secondary'} py-2 px-6 text-sm row justify-start  space-x-3 font-medium hover:text-black transition duration-300`}><span className="text-lg bi bi-pen-fill"></span><span>Blog Styles</span></li>
            <li onClick={()=> setactive(3)} className={`${active==3 ? 'bg-gradient-to-r from-hover via-hover to-transparent text-black' : 'bg-secondary'} py-2 px-6 text-sm row justify-start  space-x-3 font-medium hover:text-black transition duration-300`}><span className="text-lg bi bi-images"></span><span>Gallery Styles</span></li>
            <li onClick={()=> setactive(4)} className={`${active==4 ? 'bg-gradient-to-r from-hover via-hover to-transparent text-black' : 'bg-secondary'} py-2 px-6 text-sm row justify-start  space-x-3 font-medium hover:text-black transition duration-300`}><span className="text-lg bi bi-backpack-fill"></span><span>Pendants</span></li>
            <li onClick={()=> setactive(5)} className={`${active==5 ? 'bg-gradient-to-r from-hover via-hover to-transparent text-black' : 'bg-secondary'} py-2 px-6 text-sm row justify-start  space-x-3 font-medium hover:text-black transition duration-300`}><span className="text-lg bi bi-asterisk"></span><span>Necklaces</span></li>
            <li onClick={()=> setactive(6)} className={`${active==6 ? 'bg-gradient-to-r from-hover via-hover to-transparent text-black' : 'bg-secondary'} py-2 px-6 text-sm row justify-start  space-x-3 font-medium hover:text-black transition duration-300`}><span className="text-lg bi bi-eyeglasses"></span><span>Additonal Pages</span></li>
           </ul>
           {/* Second List */}
           <div  className=' relative w-full h-max transition py-4 pb-6 px-4'>
             <motion.ul
             key={active}
              initial={{
                opacity:0.8, 
                translateY:50
              
             }} 
             animate={{
              opacity:1,
              translateY:0,
            }}
             transition={{
              duration:0.2,
              ease:'easeOut',
             }}
             className='z-50 bg-secondary flex flex-wrap'>
              {lists[active].map((item,index)=>{
                 return <li key={index} className='flex-grow'>{item}</li>
              })}
             </motion.ul>
           
           </div>
           </div>
          </li>
          <li onMouseEnter={()=>setpages(true)} onMouseLeave={()=>setpages(false)} onClick={() => navigate('/delivery')} className=' py-10 px-4 relative max-xl:px-3 cursor-pointer transition font-bold hover:text-hover'>
           Pages
           {/* Page List */}
           <ul  className={`bg-secondary absolute left-0 top-full text-primaryFont  w-[235px] transition duration-[400ms] ${pages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>About</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Classification</li>
            <li onMouseEnter={()=>setpageList(true)} onMouseLeave={()=>setpageList(false)} className='py-3 px-6 relative text-sm font-medium hover:text-black hover:bg-hover transition duration-300 row justify-between'><span>Designer Portfolio</span> <span className='bi bi-chevron-right text-xs font-extrabold'></span>
            {/* Inner Page List */}
            <ul  className={`bg-secondary absolute left-full top-0 text-primaryFont  w-[235px] transition duration-[400ms] ${pageList ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Porfolio </li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Porfolio Details</li>
           </ul>
            </li>
            <li onMouseEnter={()=>setgalleryList(true)} onMouseLeave={()=>setgalleryList(false)} className='py-3 px-6 relative text-sm font-medium hover:text-black hover:bg-hover transition duration-300 row justify-between'><span>Gallery</span> <span className='bi bi-chevron-right text-xs font-extrabold'></span>
            {/* Inner gallery List */}
            <ul  className={`bg-secondary absolute left-full top-0 text-primaryFont  w-[235px] transition duration-[400ms] ${galleryList ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Gallery 1</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Gallery 2</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Gallery 3</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Gallery 4</li>
           </ul>
            </li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Our Team</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>404</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Support</li>
           </ul>
          </li>
          <li onMouseEnter={()=>setshop(true)} onMouseLeave={()=>setshop(false)} onClick={() => navigate('/delivery')} className=' py-10 px-4 relative max-xl:px-3 cursor-pointer transition font-bold hover:text-hover'>
           Shop
           {/* Shop List */}
           <ul  className={`bg-secondary absolute left-0 top-full text-primaryFont  w-[235px] transition duration-[400ms] ${shop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Shop Archive</li>
          
            <li onMouseEnter={()=>setproduct(true)} onMouseLeave={()=>setproduct(false)} className='py-3 px-6 relative text-sm font-medium hover:text-black hover:bg-hover transition duration-300 row justify-between'><span>Product Details</span> <span className='bi bi-chevron-right text-xs font-extrabold'></span>
            {/* Inner gallery List */}
            <ul  className={`bg-secondary absolute left-full top-0 text-primaryFont  w-[235px] transition duration-[400ms] ${product ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>style 1</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>style 2</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>style 3</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>style 4</li>
           </ul>
            </li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Cart</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Checkout</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>My Account</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Wishlist</li>
           
           </ul>
          </li>
          <li onMouseEnter={()=>setcontactUs(true)} onMouseLeave={()=>setcontactUs(false)} onClick={() => navigate('/delivery')} className=' py-10 px-4 relative max-xl:px-3 cursor-pointer transition font-bold hover:text-hover'>
          Reach-Out
           {/* Reach-Out List */}
           <ul  className={`bg-secondary absolute left-0 top-full text-primaryFont  w-[235px] transition duration-[400ms] ${contactUs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Contact Us 1</li>
            <li className='py-3 px-6 text-sm font-medium hover:text-black hover:bg-hover transition duration-300'>Contact Us 2</li>
           </ul>
          </li>
      </ul>
      {/* IconList */}
      <ul className='row justify-center gap-5 max-xl:gap-3'>
        <li className='border-2 flex items-center justify-center w-17 h-16  border-border cursor-pointer hover:bg-hover transition max-xl:w-15 max-xl:h-14 max-xl:text-sm max-xsm:hidden'>
            <span className="bi bi-person text-xl"></span>
        </li>
        <li className='border-2 flex items-center justify-center w-17 h-16  border-border cursor-pointer hover:bg-hover transition max-xl:w-15 max-xl:h-14 max-xl:text-sm max-sm:hidden'>
            <span className="bi bi-search text-lg"></span>
        </li>
        <li className='border-2 flex items-center  justify-center  group w-17 h-16 text-lg border-border cursor-pointer hover:bg-hover transition  px-4 max-xl:px-3 max-xl:w-15 max-xl:h-14  max-xl:order-1'>
            <div className="flex flex-col items-start justify-center space-y-1.5 w-full h-full max-xl:items-center">
            <span className='w-full h-[1px] bg-white block max-xl:w-full group-hover:w-full transition-all duration-300'></span>
            <span className='w-6 h-[1px] bg-white block max-xl:w-6 group-hover:w-full transition-all duration-300'></span>
            <span className='w-4 h-[1px] bg-white block max-xl:w-4 group-hover:w-full transition-all duration-300'></span> 
            </div>
        </li>
        <li className='border-2 flex items-center justify-center  w-17 h-16  border-border cursor-pointer hover:bg-hover transition max-xl:w-15 max-xl:h-14  max-xsm:hidden'>
            <span className="bi bi-bag text-xl max-xl:text-lg"></span>
        </li>
      </ul>
        </nav>
            </div>
    </motion.div>
  )
}


export default NavbarScroll

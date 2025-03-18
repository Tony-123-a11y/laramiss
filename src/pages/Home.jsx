import React, { useContext, useState } from 'react'
import HoverAnimation from '../components/HoverAnimation'
import Hero from '../components/Hero'
import KnowMore from '../components/KnowMore'
import Trending from '../components/Trending'
import ShopNow from '../components/ShopNow'
import BestSell from '../components/BestSell'
import FilterCategory from '../components/FilterCategory'
import Achievements from '../components/Achievements'
import Preview from '../components/Preview'
import productContext from '../context/ProductContext'
import Sale from '../components/Sale'
import HomeVideo from '../components/HomeVideo'
import NewsFeed from '../components/NewsFeed'
import Support from '../components/Support'
import Footer from '../components/Footer'


const Home = () => {
 let {preview}=useContext(productContext)
  return (
    <div>
      {(preview && <Preview/>)}
      
      {/* <HoverAnimation/> */}
      <Hero/>
      <KnowMore/>
      <Trending/>
      <ShopNow/>
      <BestSell/>
      <FilterCategory/>
      <Achievements/>
      <Sale/>
      <HomeVideo/>
      <NewsFeed/>
      <Support/>
      <Footer/>
    </div>
  )
}

export default Home

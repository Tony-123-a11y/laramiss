import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Support from './Support'

const Header = () => {
  let navigate = useNavigate()
  return (
    <div>

      <header className='text-white bg-primary font-secondaryHead'>
        <Support/>
        {/* Navbar call */}
        <Navbar/>
      </header>
    </div>
  )
}

export default Header

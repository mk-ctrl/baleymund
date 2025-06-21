import React from 'react'
import logo from '../images/logo-rem.png'

const Navbar = () => {
  return (
    <div className="absolute w-full left-0 top-0 md:bg-black opacity-80 ">
      <div className="container mx-auto flex justify-between items-center py-3.5 p-5">
      <div className='flex flex-row items-center gap-2'>
        <img src={logo} alt="Baleymund" className='w-10 h-10 opacity-100'/>
        <h4 className='text-white font-funnel-display'>Baleymund Designs & Architecture</h4>
      </div>
      <ul className='hidden md:flex gap-4 -mr-10'>
        <a href="#" className='hover:text-white text-gray-400'>Home</a>
        <a href="#" className='hover:text-white text-gray-400'>Projects</a>
        <a href="#" className='hover:text-white text-gray-400'>About</a>
        <a href="#" className='hover:text-white text-gray-400'>Contact Us</a>
      </ul>
      <button className='md:hidden border border-white text-white transition delay-150 duration-300 ease-in-out rounded-full hover:scale-110 hover:cursor-pointer w-20 h-7'>Explore</button>
      </div>
    </div>
  )
}

export default Navbar

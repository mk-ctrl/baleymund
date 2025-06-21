import React from 'react'
import {motion} from 'framer-motion'
import backImage from '../images/background.jpg'
import Navbar from './Navbar.jsx'

const Header = () => {
  const container = (delay,x,duration)=>({
        hidden: {
            x:x,opacity:0
        },
        inview: {
            x:0,opacity:1,
            transition:{duration:duration, delay:delay}
        },
        
    })
  return (
    
    <div className='min-h-screen bg-cover bg-center flex items-center overflow-auto w-full relative ' style={{ backgroundImage: `url(${backImage})` }}>
  {/* Overlay Div for Opacity */}
  <div className='absolute inset-0 bg-black opacity-40'></div> {/* Adjust opacity-XX as needed */}

  <Navbar/>
  <div className='container text-center mx-auto text-white px-10 z-10 md:mt-15'> {/* Added z-10 to ensure content is above overlay */}
    <motion.h2 
    whileInView={{y:0,opacity:1}}
            initial={{y:-100,opacity:0}}
            transition={{delay:0.8,duration:1}}
    className='font-gravitas-one-regular text-4xl md:text-6xl antialiased md:subpixel-antialiased'>Spaces That Tell Your Story</motion.h2>
    <h6 className='font-medium text-2xl md:text-4xl text-blue-300 font-bonheur-royale-regular'>Inspired by a legacy of artistry to design for the way you live and work.</h6>
    <motion.div whileInView={{y:0,opacity:1}}
            initial={{y:100,opacity:0}}
            transition={{delay:0.8,duration:1}} className='flex flex-row gap-10 mt-10 justify-center'>
        <button className='border border-white rounded-2xl p-1 w-30 hover:cursor-pointer hover:bg-black hover:border-black'>Projects</button>
        <button className='p-1 w-30 rounded-2xl bg-blue-400 hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110'>Contact Us</button>
    </motion.div>
  </div>
  
</div>
    
  )
}

export default Header

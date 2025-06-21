import React from 'react'
import about from '../images/about.jpg'
import { motion } from "framer-motion"

const About = () => {
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
    <div className='text-white'>
      <div className="flex flex-col items-center justify-center container mx-auto w-full overflow-hidden mt-20" id='About'>
            <motion.h1 
                        variants={container(0.5,-100,0.5)}
                        initial="hidden"
                        
                        whileInView="inview"
                        className="text-3xl font-gravitas-one-regular text-center text-blue-300"
                        
                        >Baleymund Designs & Architect</motion.h1>
        <motion.h1 
        variants={container(1,100,0.8)}
                        initial="hidden"
                        animate="visible"
                        whileInView="inview"
        className='font-light text-center'>More Than Just a <span className='font-medium '>Company</span>, It's a <span className='font-medium'>Partnership in Crafting Your Vision</span></motion.h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 mt-10">
        <motion.img 
        variants={container(0.5,-100,0.5)} initial="hidden" whileInView="inview"
        src={about} alt="" className='w-80 h-80 md:w-100 md:h-100 rounded-xl'/>
        <motion.div variants={container(1,-100,0.5)}
                        initial="hidden"
                        animate="visible"
                        whileInView="inview"
                        className="flex flex-col items-center md:items-start mt-10 p-5">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-white text-center">
                <div>
                    <p className='text-4xl font-medium text-white'>3</p>
                    <p>Years of Excellence</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-white'>12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-white'>20+</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-white'>25+</p>
                    <p>Ongoing Projects</p>
                </div>
                
            </div>
            <p className='md:w-120 mt-10 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laborum maxime itaque repellat alias blanditiis quaerat odit quisquam dolores. Sequi laborum asperiores expedita eveniet enim illo tempora fugiat iure quod architecto explicabo perspiciatis temporibus maiores nulla, itaque nihil. Maiores officia nisi magni, tenetur natus veniam sit voluptate neque ratione modi culpa, optio quasi aperiam harum perspiciatis numquam saepe accusamus fugiat libero exercitationem doloremque expedita obcaecati? Omnis ad sunt fugiat sequi!</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About

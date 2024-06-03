'use client'
import React from 'react'
import { FaDownload, FaGithub, FaLinkedin, FaSquareUpwork } from 'react-icons/fa6'
import SocialMediaIcons from './components/SocialMediaIcons'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    // 
    <div className="h-[70vh] w-full bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000011] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
    <div className='p-5 md:p-10' id='contact' >
         <motion.h1
         initial={{y:50, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{duration:1}}
         className='text-3xl md:text-5xl text-center font-bold' >Don’t Wait</motion.h1>
         <motion.p
         initial={{y:50, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{duration:1}}
         className='md:text-xl text-center' >Start Building Your Website Today—Contact Me Now</motion.p>
     </div>
     <div className='flex text-xl md:text-3xl gap-5 md:gap-7 items-center justify-center' >
        <SocialMediaIcons icon = {FaSquareUpwork} path = "https://www.upwork.com/freelancers/~012ede10b6b995aeae" />
        <SocialMediaIcons icon = {FaGithub} path = "https://github.com/Kashan-Haider" />
        <SocialMediaIcons icon = {FaLinkedin} path = "https://www.linkedin.com/in/kashan-haider-ab2a56230/" />
     </div>
     <motion.div
          initial={{y:50, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1}}
          className="mt-10 relative  border border-light rounded-lg group cursor-pointer"
        >
          <div className="bg-light flex absolute w-0 h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300"></div>
          <a
          href='Resume.pdf'
          download
            className="relative z-10 flex items-center gap-3 group-hover:text-black duration-300 px-8 py-2"
          >
            Download My Resume
            <FaDownload/>
          </a>
        </motion.div>
  </div>
  )
}

export default Contact
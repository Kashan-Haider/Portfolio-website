'use client'
import React from 'react'
import { GlobeDemo } from '../ui/GlobeDemo'
import {motion} from "framer-motion"
import { BackgroundBeams } from '../ui/Background-beams'

const WhyChooseMe = () => {
  return (
    <div className='relative pb-0 p-5 md:p-10 md:pb-0'>
        <BackgroundBeams className='absolute top-0' />
        <div className='flex flex-col items-center justify-center' >
        <div className='md:w-[50vw]' >
          <motion.h1
          initial={{y:50, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1}}
          className='text-3xl md:text-5xl font-bold text-center capitalize' >Fast-track your business success with a sleek website <span className='text-white'>built in no time!</span></motion.h1>
          <motion.p
          initial={{y:50, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:1}}
          className='text-center'
          >Your convenience is my priority—<span className='text-white font-semibold' >I'm available at times that work best for you</span></motion.p>
        </div>
        </div>
        <motion.div
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1}}
        >
        <GlobeDemo/>
        </motion.div>
    </div>
  )
}

export default WhyChooseMe
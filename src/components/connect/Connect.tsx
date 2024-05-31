'use client'
import React, {useState} from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import {motion} from 'framer-motion'

const Connect = () => {
    const [isCopied, setIsCopied] = useState(false)
    const handleCopy = ()=>{
        navigator.clipboard.writeText('hkashan.dev@gmail.com').then(()=> setIsCopied(true))
    }
  return (
    <div className="p-5 md:p-10 lg:p-20 relative h-[300px] flex items-center justify-center">
      <BackgroundGradientAnimation />
      <div className="text-center flex flex-col items-center justify-center gap-2">
        <motion.h1
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {duration: 0.4 },}}
        className="text-2xl md:text-5xl font-semibold">Get in Touch</motion.h1>
        <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {duration: 0.4 },}}
        className="">
          Drop Me an <span className="text-white font-semibold">Email</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {duration: 0.4 },
          }}
          className="relative  border border-light rounded-lg group cursor-pointer"
        >
          <div className={`bg-light flex absolute ${isCopied? "w-full" : "w-0"} h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300`}></div>
          <button
            className={`relative z-10 flex items-center gap-3 group-hover:text-black ${isCopied && "text-black"} duration-300 px-8 py-2`}
            onClick={handleCopy}
          >
            {isCopied?  "Email Address Copied" : "Copy My Email Address"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;

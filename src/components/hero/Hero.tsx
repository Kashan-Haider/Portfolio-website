"use client";
import React from "react";
import { AuroraBackground } from "../ui/Aurora-background";
import { motion } from "framer-motion";
import {Link} from "react-scroll";
import { FaPaperPlane } from "react-icons/fa";
import { GridBackgroundDemo } from "../ui/Dotted-background";
import { Spotlight } from "../ui/Spotlight";

const Hero = () => {
  return (
    <div className="" id="home">
      
      <AuroraBackground className="">
      <div className="relative z-10 h-screen w-screen flex flex-col items-center justify-center text-center">
        <div className="flex w-full md:w-[70vw] lg:w-[60vw] justify-center items-center flex-col gap-2 capitalize px-5">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.4 },
            }}
            className="text-xs uppercase tracking-wide"
          >
            Unleash the power of dynamic web development with Next.js
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.4 },
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            Turning ideas into flawless <span className="text-white" >user experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 0.4 },
            }}
          >
            Hi, I'm Kashan, a passionate Next.js developer ready to bring your
            web projects to life!
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.4, duration: 0.4 },
          }}
          className="mt-10 relative  border border-light rounded-lg group cursor-pointer"
        >
          <div className="bg-light flex absolute w-0 h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300"></div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative z-10 flex items-center gap-3 group-hover:text-black duration-300 px-8 py-2"
          >
            My Work
            <FaPaperPlane />
          </Link>
        </motion.div>
      </div>
      <GridBackgroundDemo/>
      </AuroraBackground>
      
    </div>
  );
};

export default Hero;

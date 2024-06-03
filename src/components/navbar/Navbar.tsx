"use client";
import React, { useEffect, useState } from 'react';
import NavLink from "./compnents/NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState('upward');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setScrollDirection('downward');
      } else if (scrollTop < lastScrollTop) {
        setScrollDirection('upward');
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <div className="relative z-50" >
    <motion.div
      initial={{ y: -100}}
      animate={{ y: 0}}
    >
      <div className={`flex justify-center items-center gap-5 md:gap-8 bg-[#00000057] hover:bg-[#00000093] transition-all duration-700 py-3 px-8 rounded-lg w-fit fixed ${scrollDirection === 'upward' ? 'translate-y-0' : '-translate-y-[100px]'} left-[50%] -translate-x-[50%] top-5 shadow-black shadow-lg capitalize text-sm font-light backdrop-blur-lg`}>
        <NavLink path="home" title="Home" />
        <NavLink path="projects" title="Projects" />
        <NavLink path="skills" title="Skills" />
        <NavLink path="contact" title="Contact" />
      </div>
    </motion.div>
    </div>
  );
};

export default Navbar;

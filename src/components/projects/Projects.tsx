'use client'
import React from 'react'
import { ThreeDCardDemo } from '../ui/ThreeDCardDemo'
import { BackgroundBeams } from '../ui/Background-beams'
import {motion} from 'framer-motion'

const Projects = () => {
  interface cardDataType {
    title:string,
    description:string,
    image:string,
    link:string,
    github?:string
  }
  const data:cardDataType[]  = [
    {
      title:"Dine Market",
      description:"Dine Market is an e-commerce website built using Next js, typescript, tawilwind css and sanity.io",
      image:"/work/dine-market.png",
      link:"https://dine-market-psi.vercel.app/",
      github:"https://github.com/Kashan-Haider/dine-market"
    },
    {
      title:"Dashboard",
      description:"A Dashboard design built with Next js and React Chart library",
      image:"/work/dashboard.png",
      link:"https://dashboard-test-project-theta.vercel.app/",
      github:"https://github.com/Kashan-Haider/dashboard-test-project"
    },
    {
      title:"Scribbler's Corner",
      description:"A blogging website template with awesome features built using Next js, Typescript, Tailwind css and sanity.io",
      image:"/work/scribblers-corner.png",
      link:"https://scribblers-corner-cljkhfpzh-kashan-haiders-projects.vercel.app",
      github:"https://github.com/Kashan-Haider/scribblers-corner"
    },
    {
      title:"Portfolio Website",
      description:"Portfolio website built using React js",
      image:"/work/portfolio.png",
      link:"https://portfolio-awanpro786-gmailcom.vercel.app/",
      github:"https://github.com/Kashan-Haider/Portfolio/tree/main"
    },
    {
      title:"Todo App",
      description:"A simple Todo App built using Next js and MongoDB",
      image:"/work/todo-app.png",
      link:"https://todo-app-mongodb.vercel.app/",
    },
    {
      title:"Portfolio Website",
      description:"Portfolio Website with amazing animations built using Next js and Framer Motion",
      image:"/work/portfolio1.png",
      link:"https://portfolio-1-gxbbmb9wg-kashan-haiders-projects.vercel.app",
    },
  ]
  return (
    <div className='p-5 md:p-10 md:py-20 relative' id="projects" >
        <BackgroundBeams className='absolute top-0' />
        <motion.h1
        initial={{ opacity: 0, y: 50}}
        whileInView={{ opacity:  1, y: 0}}
        transition={{ duration: 1 }}
        className='text-center text-3xl md:text-5xl font-bold mb-5 md:mb-10'>
        Explore My Latest <span className='text-white' >Creative Endeavors</span>
        </motion.h1>
        <div className='flex flex-wrap items-center justify-center gap-5 gap-y-10' >
        {data.map((card:cardDataType, index:number)=>{
          return(
            <ThreeDCardDemo key={index} index={index} title={card.title} description={card.description} image={card.image} link={card.link} github={card.github} />
          )
        })}
        </div>
    </div>
  )
}

export default Projects
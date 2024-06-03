"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import {motion} from 'framer-motion'

export const Skills = () => {
  return (
    <div className="p-5 md:p-10" id="skills">
      <motion.h1 
      initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:1}}
      className="text-3xl md:text-5xl capitalize text-center font-bold">
        Skills I Bring to <span className="text-white">the Table</span>
      </motion.h1>
      <HoverEffect items={skills} />
    </div>
  );
};

export const skills = [
  {
    title: "Javascript",
  },
  {
    title: "Typescript",
  },
  {
    title: "Tailwind Css",
  },
  {
    title: "React Js",
  },
  {
    title: "Next Js",
  },

  {
    title: "Aceternity.ui",
  },
  {
    title: "Shadcn.ui",
  },
  {
    title: "Chakra.ui",
  },
  {
    title: "Framer Motion",
  },
  {
    title: "Sanity.io",
  },
  {
    title: "Contentful",
  },
  {
    title: "Mongo DB",
  },
];

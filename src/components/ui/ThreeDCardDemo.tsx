"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import {motion} from 'framer-motion'

export function ThreeDCardDemo(props:{index:number, title:string, description:string, image:string, link:string, github?:string}) {
  return (
    <motion.div
    initial={{y:50, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1.5}}
    >
      <CardContainer className="inter-var p-0">
      <CardBody className="shadow-black shadow-xl hover:shadow-2xl transition-all duration-300 bg-[#00000065] w-auto sm:w-[400px] h-[500px] rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-[70px]"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.image}
            height="1000"
            width="1000"
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={props.link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Site
          </CardItem>
          {props.github && <CardItem
            translateZ={20}
            as={Link}
            href={props.github}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Github
          </CardItem>}
        </div>
      </CardBody>
    </CardContainer>
    </motion.div>
  );
}

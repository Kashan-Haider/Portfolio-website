"use client";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

const SocialMediaIcons = (props: { icon: IconType; path: string }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link
        href={props.path}
        className="hover:text-white transition-all duration-300 ease-linear"
      >
        <props.icon />
      </Link>
    </motion.div>
  );
};

export default SocialMediaIcons;

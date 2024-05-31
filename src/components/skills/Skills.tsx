"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";

export const Skills = () => {
  return (
    <div className="p-5 md:p-10" id="skills">
      <h1 className="text-3xl md:text-5xl capitalize text-center font-bold">
        Skills I Bring to <span className="text-white">the Table</span>
      </h1>
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
  {
    title: "Vercel Postgres DB",
  }
];

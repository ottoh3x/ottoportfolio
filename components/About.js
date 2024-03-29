import React from "react";
import Image from "next/image";

import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";
import SkillsIcon from "./SkillsIcon";
import { motion } from "framer-motion";


export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration:0.6,
      delay:0.4
    },
  },
};
function About() {
  return (
      <div className="flex flex-col justify-center relative  mx-auto container h-full p-6  my-6 space-y-6 rounded-lg shadow-lg">
        <motion.div 
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center p-4 mt-10">
          {" "}
          <h1 
          className="text-5xl font-black text-white">
            About
          </h1>
        </motion.div>
        <div className="flex flex-col gap-4">
          <motion.img whileHover={{rotate:50}} className="object-contain mx-auto max-w-max w-60  rounded-full" src="/pfp.png" />
        <motion.p initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:0.6,delay:0.25}}} className="text-gray-400 text-xl text-center font-custom2 font-extralight leading-relaxed
 md:w-1/2 mx-auto">
        Hi i'm OTTO Programmer.I'm a Freelance Full Stack Devoloper, and I'm very passionate and dedicated to my work.With 3 years experience as a professional Full Stack Devoloper. I have acquired the skills necessary to build great and premium websites.
        </motion.p></div>
        {/* <motion.div 
         variants={textVariant2}
         initial="hidden"
         whileInView="show"
        className="flex flex-col items-center p-4">
          {" "}
          <h1 className="text-5xl font-black text-white">
            Skills
          </h1>
        </motion.div>

        <div className="text-gray-500 text-5xl  w-full grid grid-cols-4 gap-y-4 place-items-center md:w-2/5 mx-auto justify-between py-6">
          <SkillsIcon icon={<SiNextdotjs />} />
          <SkillsIcon icon={<SiReact />} />
          <SkillsIcon icon={<SiJavascript />} />
          <SkillsIcon icon={<SiPython />} />
          <SkillsIcon icon={<SiDjango />} />
          <SkillsIcon icon={<SiHtml5 />} />
          <SkillsIcon icon={<SiCss3 />} />
          <SkillsIcon icon={<SiTailwindcss />} />
        </div> */}
      </div>

      
  
  );
}

export default About;

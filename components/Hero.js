import React, { useState,useEffect } from "react";
import Image from "next/image";
import { SiGithub, SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";
import Header from "./Header";
import {motion} from "framer-motion"
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";

function Hero() {
 
// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
  
  return (
    
    <section className=" border-b-2 css-selector bg-neutral-900 h-screen border-gray-600 pb-4 pt-16" id="hero">
      {/* <Header /> */}
      <div className="container relative mt-0  h-screen flex items-center mx-auto justify-between">
      
        {/* <div className="flex absolute bottom-0 w-full place-content-center space-x-4">
          <div className="cursor-pointer text-gray-200 hover:brightness-150 hover:scale-[1.20] transition-all ease">
            <SiGithub size={32} />
          </div>
          <div className="cursor-pointer text-sky-500 hover:brightness-150 hover:scale-[1.20] transition-all ease">
            <SiTwitter size={32} />
          </div>
          <div className="cursor-pointer text-red-300 hover:brightness-150 hover:scale-[1.20] transition-all ease">
            <SiInstagram size={32} />
          </div>
          <div className="cursor-pointer text-blue-600 hover:brightness-150	hover:scale-[1.20] transition-all ease">
            <SiFacebook size={32} />
          </div>
        </div> */}
        
        
          <motion.div initial={{opacity:0}} animate={{opacity:1}}  className="w-full">
            <h1 className="text-center text-4xl p-4 	 lg:text-5xl font-black  text-gray-400">
              <span  className="text-gray-200">I Design</span>, <span className="text-blue-600">Build</span> & <span className="text-gray-200">Improve</span>
            </h1>
            <p className="text-gray-400 text-center text-xl p-2">
              I create beautiful websites your users will love.
            </p>
          </motion.div>


        

        
        

          <div className="relative z-index-[5] h-[90%] w-fit">
          <Lottie {...defaultOptions} />
        </div> 
      </div>
    </section>
    
  );
}

export default Hero;

import React, { useState,useEffect } from "react";
import Image from "next/image";
import { SiGithub, SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";
import Header from "./Header";
import {motion} from "framer-motion"

function Hero() {
 

  
  return (
    
    <section className=" border-b-2  border-gray-600 py-4 " id="hero">
      <Header />
      <div className="container relative h-64 lg:h-[70vh] flex items-center mx-auto justify-between">
        
        <div className="flex absolute bottom-0 w-full place-content-center space-x-4">
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
        </div>
        
        
          <motion.div initial={{opacity:0}} animate={{opacity:1}}  className="w-full">
            <h1 className="text-center text-4xl p-4 	 lg:text-7xl font-black  text-gray-400">
              <span  className="text-gray-200">Design</span>. <span className="text-blue-600">Build</span>. <span className="text-gray-200">Improve</span>
            </h1>
            <p className="text-gray-400 text-center text-xl p-2">
              I create beautiful websites your users will love.
            </p>
          </motion.div>


        

        
        

        
      </div>
    </section>
    
  );
}

export default Hero;

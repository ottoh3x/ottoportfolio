import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

function ProjectsItem({ src, title, url }) {
  return (
    
      <motion.div initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: {
          duration:0.55,
          type: "spring",
          stiffness: 170,
          ease: "easeInOut",
        },
      }} className="md:max-w-md bg-[#00000069] p-4 rounded-lg w-full hover:translate-y-[-0.2rem] transition-all ease-in-out duration-300 cursor-pointer shadow-2xl border-[1px] border-gray-600">
        <Image src={src} width={500} height={300} lazy="loading" />
        <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
          {title}
        </h1>
        <p className="text-gray-400 p-2 text-center">
          An Ad Free Anime Streaming web app to give you a better experience.
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button
            href={url}
            target="_blank"
            className="border-[2px] hover:scale-105 border-[#008bff] text-gray-200 p-3 my-2 text-center mx-auto w-full  transition-all ease-in-out duration-200 hover:shadow-2xl hover:bg-[#008bff] hover:text-white"
          >
            Visit Website
          </button>
        </a>
      </motion.div>
    
  );
}

export default ProjectsItem;

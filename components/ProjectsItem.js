import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

function ProjectsItem({ src, title, url,desc }) {
  return (
    
      <div className="md:max-w-sm  p-4 rounded-lg w-full cursor-pointer shadow-2xl border-[1px] hover:bg-black/50 border-neutral-800 hover:scale-[1.01] transition-all duration-500">
        <Image src={src} width={500} height={300} lazy="loading" />
        <h1 className="text-gray-100 p-2 font-bold text-3xl w-full mx-auto text-center">
          {title}
        </h1>
        <p className="text-gray-400 p-2 text-center">
          {desc}
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button
            href={url}
            target="_blank"
            className=" text-gray-200 p-3 my-2 text-center mx-auto w-full  transition-all ease-in-out duration-200 hover:shadow-2xl bg-neutral-900 hover:bg-neutral-800 hover:text-white"
          >
            Visit Website
          </button>
        </a>
      </div>
    
  );
}

export default ProjectsItem;

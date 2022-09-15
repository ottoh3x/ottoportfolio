import React from "react";
import ProjectsItem from "./ProjectsItem";
import Zoom from "react-reveal/Zoom";
import {motion} from "framer-motion"

function Projects() {
  return (
    
      <motion.div initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration:1.3,
      
        },
      }} className="container mx-auto p-6  my-6  rounded-lg shadow-lg">
        <div className="flex flex-col items-center p-4">
          {" "}
          <h1 className="text-5xl font-black text-white">
            Projects
          </h1>
        </div>
        <h1 className="text-gray-400 text-center text-3xl font-normal p-4 animate-pulse mb-8">
          My latest Work.
        </h1>

        <motion.div
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition: {
        duration:0.9,
      },
    }} className="grid md:grid-cols-2 gap-4 lg:w-2/3 items-center mx-auto py-10">
          <ProjectsItem
            title="Anime Faze"
            src="/anifaze.png"
            url="https://anifaze.herokuapp.com"
          />
          <ProjectsItem
            title="StreamAnimex"
            src="/animex.png"
            url="https://animex4stream.herokuapp.com"
          />
        </motion.div>
      </motion.div>
        
  
  );
}

export default Projects;

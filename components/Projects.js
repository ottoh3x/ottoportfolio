import React from "react";
import ProjectsItem from "./ProjectsItem";
import {motion} from "framer-motion"

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


export const pt = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y : direction === "up" ? 100 : 0
  },
  show: {
    opacity: 1,
    x: 0,
    y:0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration:0.8,
      delay:0.4
    },
  },
})

function Projects() {
  return (
      <div className="container mx-auto p-6  my-6  rounded-lg shadow-lg overflow-hidden">
        <motion.div 
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center p-4">
          {" "}
          <h1 className="text-5xl font-black text-white">
            Projects
          </h1>
        </motion.div>
        <h1 className="text-gray-400 text-center text-3xl font-costum2 p-4 animate-pulse mb-8">
          My latest Work.
        </h1>

        <div
     className="container grid md:grid-cols-3 gap-3 items-center mx-auto py-4">
      <motion.div
      variants={pt('left')}
      initial="hidden"
      whileInView="show"
      >
        <ProjectsItem
            title="Portfolio"
            src="/lucy.png"
            url="https://ottocomponents.vercel.app"
            desc={`A Portfolio Template.`}
          />

      </motion.div>
      <motion.div
      variants={pt('left')}
      initial="hidden"
      whileInView="show"
      >
        <ProjectsItem
            title="OTMovies"
            src="/otmovies.png"
            url="https://otmovies.vercel.app"
            desc={`Movie app based on TMDB api.`}
          />

      </motion.div>

      <motion.div
      variants={pt('up')}
      initial="hidden"
      whileInView="show"
      >
         <ProjectsItem
            title="Anime Faze"
            src="/anifaze.png"
            url="https://anifaze.herokuapp.com"
            desc={`An Ad Free Anime Streaming web app to give you a better experience.`}
          />

      </motion.div>
      
         

<motion.div
      variants={pt('right')}
      initial="hidden"
      whileInView="show"
      >
         <ProjectsItem
            title="Animex Stream"
            src="/animex.png"
            url="https://www.animex.live"
            desc={`An Ad Free Anime Streaming web app to give you a better experience..`}
          />

      </motion.div>
         
        </div>
      </div>
        
  
  );
}

export default Projects;

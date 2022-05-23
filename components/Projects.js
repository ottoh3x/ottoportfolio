import React from "react";
import ProjectsItem from "./ProjectsItem";
import Zoom from "react-reveal/Zoom";

function Projects() {
  return (
    <Zoom>
      <div className="container mx-auto p-6  my-6  rounded-lg shadow-lg">
        <div className="flex flex-col p-4">
          {" "}
          <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
            Projects
          </h1>
          <span className="rounded-full border-2 w-6 border-gray-400  "></span>
        </div>
        <h1 className="text-gray-400 text-center text-3xl font-normal p-4 animate-pulse mb-8">
          My latest Work.
        </h1>

        <div className="grid md:grid-cols-2 gap-4 lg:w-2/3 items-center mx-auto">
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
        </div>
      </div>
    </Zoom>
  );
}

export default Projects;

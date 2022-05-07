import React from "react";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <div className="container mx-auto p-6  my-6 bg-[#56565614] rounded-lg shadow-lg">
      <div className="flex flex-col p-4">
        {" "}
        <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
          Projects
        </h1>
        <span className="rounded-full border-2 w-6 border-gray-400  "></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:w-2/3 items-center mx-auto">
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem />
      <ProjectsItem /></div>
    </div>
  );
}

export default Projects;

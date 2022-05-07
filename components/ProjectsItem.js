import React from 'react'
import Image from "next/image"

function ProjectsItem({src,title}) {
  return (
    
    <div className="shadow-lg ">
      <div className="md:max-w-md bg-[#f9f9f90d] p-4 rounded-lg w-full hover:translate-y-[-0.2rem] transition-all ease-in-out duration-600 cursor-pointer">
        <Image src={src} width={500} height={300} lazy="loading" />
        <h1 className="text-gray-100 p-2 bold text-3xl w-full mx-auto text-center">{title}</h1>
        <p className="text-gray-400 p-2 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla quos odit sed atque possimus commodi illo ut harum quisquam.</p>
        <button className="bg-green-600 text-gray-200 p-3 my-2 text-center mx-auto w-full hover:translate-y-[-0.1rem] transition-all ease-in-out duration-700">Visit Website</button>
      </div>
    </div>
  )
}

export default ProjectsItem
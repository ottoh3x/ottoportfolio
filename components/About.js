import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col justify-center  w-1/2 text-center mx-auto h-full p-6 border-2 my-16 space-y-6">
        <h1 className=" text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          About
        </h1>
        <p className="text-gray-300 text-xl font-mono light">
          Whatever makes u happy idk what the fuck are u talking about im not
          running a charity here okay
        </p>
        <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          Skills
        </h1>
      </div>
    </>
  );
}

export default About;

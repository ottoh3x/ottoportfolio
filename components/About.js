import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-col justify-center  w-1/2 text-center mx-auto h-full p-6 border-2 my-16 space-y-6">
        <h1 className=" text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          About
        </h1>
        <p className="text-gray-300 text-xl font-mono light">
          Hello , i'm Otto Programmer I love to make new ideas and bring them to
          the browser , i'm based in morocco .
        </p>
        <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          Skills
        </h1>
      </div>
    </>
  );
}

export default About;

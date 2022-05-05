import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";
function About() {
  return (
    <>
      <div className="flex flex-col justify-center  mx-auto lg:w-1/2 h-full p-6  my-6 space-y-6">
        <div className="flex flex-col p-4">
          {" "}
          <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
            About
          </h1>
          <span className="rounded-full border-2 w-6 border-gray-400  "></span>
        </div>
        <p className="text-gray-300 text-xl text-center font-mono light">
          Hello , i'm Otto Programmer I love to make new ideas and bring them to
          the browser , i'm based in morocco .
        </p>
        <div className="flex flex-col p-4">
          {" "}
          <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
            Skills
          </h1>
          <span className="rounded-full border-2 w-6 border-gray-400   "></span>
        </div>

        <div className="text-gray-500 text-5xl grid grid-cols-4 gap-y-4 place-items-center justify-between hover:text-gray-200">
          <SiNextdotjs />
          <SiReact />
          <SiJavascript />
          <SiPython />
          <SiDjango />
          <SiHtml5 />
          <SiCss3 />
          <SiTailwindcss />
        </div>
      </div>
    </>
  );
}

export default About;

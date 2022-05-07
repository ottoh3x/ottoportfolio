import React from "react";
import Image from "next/image";
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
import SkillsIcon from "./SkillsIcon";
function About() {
  return (
    <>
      <div className="flex flex-col justify-center  mx-auto container h-full p-6  my-6 space-y-6 bg-[#56565614] rounded-lg shadow-lg">
        <div className="flex flex-col p-4">
          {" "}
          <h1 className="text-3xl bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-700">
            About
          </h1>
          <span className="rounded-full border-2 w-6 border-gray-400  "></span>
        </div>
          <img className="object-contain mx-auto max-w-max w-60 border-2 border-gray-600 rounded-full" src="/pfp.png" />
        <p className="text-gray-300 text-xl text-center font-mono light md:w-1/2 mx-auto">
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

        <div className="text-gray-500 text-5xl  w-full grid grid-cols-4 gap-y-4 place-items-center md:w-1/2 mx-auto justify-between ">
          <SkillsIcon icon={<SiNextdotjs />} />
          <SkillsIcon icon={<SiReact />} />
          <SkillsIcon icon={<SiJavascript />} />
          <SkillsIcon icon={<SiPython />} />
          <SkillsIcon icon={<SiDjango />} />
          <SkillsIcon icon={<SiHtml5 />} />
          <SkillsIcon icon={<SiCss3 />} />
          <SkillsIcon icon={<SiTailwindcss />} />
        </div>
      </div>
    </>
  );
}

export default About;

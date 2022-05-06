import Link from "next/link";
import React from "react";
import { useState } from "react";
import HeaderItem from "./HeaderItem";
import { FaQuestion, FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";

function Header() {
  const [show, setShow] = useState(false);

  const showNav = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="flex justify-between container mx-auto py-4 px-4 md:py-2 font-poppins text-xl text-gray-200 ">
        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-600">
          OTTO PROGRAMMER
        </h2>
        <div className="hidden md:flex gap-4 ">
          <HeaderItem url={`home`} title="Home" />
          <HeaderItem url={`home`} title="About" />
          <HeaderItem url={`home`} title="Projects" />
          <div className=" border-2 rounded-md bg-green-900 hover:bg-green-700">
            <HeaderItem url={`home`} title="Contact" />
          </div>
        </div>

        <div
          className="cursor-pointer md:hidden animate-bounce transition-all ease-out duration-500"
          onClick={showNav}
        >
          {!show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`absolute ${
          show
            ? "flex max-w-full z-100 overflow-y-scroll"
            : "max-w-0 overflow-hidden"
        } h-56 left-0 top-16 '} w-full z-100 lg:hidden transition-all duration-1000 ease-in-out shadow-2xl bg-[#0a0909] text-gray-300 border-b-2 border-gray-800`}
      >
        <div className="py-4 flex w-full">
        
        <div className='text-gray-400 space-y-4 border-r-2 border-gray-800 px-4 '>
          <FaHome size={28}/>
          <FaQuestion size={28} />
          <GrProjects  size={28}/>
          <RiContactsFill  size={28}/>{" "}
        </div>
        <ul className="text-gray-300 font-poppins text-xl space-y-4 flex flex-col text-center mx-auto ">
          <li className=""> Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul></div>
      </div>
    </>
  );
}

export default Header;

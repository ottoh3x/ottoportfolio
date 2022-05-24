import React, { useState,useEffect } from "react";
import Image from "next/image";
import Flip from "react-reveal/Flip";
import { Link } from "react-scroll";
import { SiGithub, SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";

function Hero() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };


    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }})

    const closeMenu = () => setClick(false);
    const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left:0,
      behavior: "smooth",
    });
  };
  return (
    
    <section className="bg-black  border-b-2  border-gray-600 p-4 " id="hero">
      {" "}
      <div className="container relative h-64 lg:h-98 flex items-center mx-auto justify-between">
        <Flip top>
        <div className="flex absolute bottom-0 w-full place-content-center space-x-4">
          <div className="cursor-pointer text-gray-200 hover:brightness-150">
            <SiGithub size={32} />
          </div>
          <div className="cursor-pointer text-sky-500 hover:brightness-150">
            <SiTwitter size={32} />
          </div>
          <div className="cursor-pointer text-red-300 hover:brightness-150">
            <SiInstagram size={32} />
          </div>
          <div className="cursor-pointer text-blue-600 hover:brightness-150	">
            <SiFacebook size={32} />
          </div>
        </div>
        </Flip>
        <Flip top>
          <div className="w-full">
            <h1 className="text-center text-4xl p-4 tracking-widest	 lg:text-7xl font-extrabold font-custom1 text-transparent bg-clip-text bg-gradient-to-r from-[#5fffea] via-green-300 to-[#3fff09]">
              Design. Build. Improve
            </h1>
            <p className="text-gray-400 text-center text-lg p-2">
              I create beautiful websites your users will love.
            </p>
          </div></Flip>


        

        {scrollY >= 300 ? <Flip bottom><div className="fixed right-6 bottom-4 p-3 z-100 animate-pulse cursor-pointer " onClick={scrollUp}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-200 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
        </div></Flip> : ""}
        

        <nav
          className={
            click
              ? "selected-circle"
              : "hidden lg:inline-block fixed left-12 top-32"
          }
        >
          <div className="absolute left-50 transform -translate-x-1/2 flex flex-col space-y-6">
            <Link
              activeClass="bg-green-600 rounded-full "
              to="hero"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onClick={closeMenu}
            >

              <button
                className={`cursor-pointer  nav-dot h-7 w-7 block rounded-full border-4 hover:bg-green-600 active:bg-green-600`}
              ></button>
              
            </Link>
            <Link
              activeClass="bg-green-600 rounded-full "
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-600 "></button>
            </Link>
            <Link
              activeClass="bg-green-600 rounded-full "
              to="services"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7  block rounded-full border-4   hover:bg-green-600"></button>
            </Link>
            <Link
              activeClass="bg-green-600 rounded-full "
              to="projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-600"></button>
            </Link>
            <Link
              activeClass="bg-green-600 rounded-full "
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7  block rounded-full border-4   hover:bg-green-600"></button>
            </Link>
          </div>
        </nav>
      </div>
    </section>
    
  );
}

export default Hero;

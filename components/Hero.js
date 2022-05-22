import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { SiGithub, SiTwitter, SiInstagram, SiFacebook } from "react-icons/si";

function Hero() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <section
      className="bg-black  border-b-2  border-gray-600 p-4 "
      id="hero"
    >
      {" "}
      <div className="container relative h-64 lg:h-98 flex items-center mx-auto justify-between">
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
        <div className="max-w-2xl">
          <h1 className="text-center text-4xl p-4 lg:text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
            Design. Build. Improve
          </h1>
          <p className="text-gray-400 text-center text-8 p-2">
            I create beautiful websites your users will love.
          </p>
        </div>
        <div className="hidden md:inline">
          <Image src="/bg.png" alt="bg" width={500} height={500} />
        </div>

        <nav
          className={
            click
              ? "selected-circle"
              : "hidden lg:inline-block fixed left-12 top-32"
          }
        >
          <div className="absolute left-50 transform -translate-x-1/2 flex flex-col space-y-6">
            <Link
              activeClass="bg-green-400 rounded-full "
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onClick={closeMenu}
            >
              <button
                className={`cursor-pointer  nav-dot h-7 w-7 block rounded-full border-4 hover:bg-green-400 active:bg-green-400`}
              ></button>
            </Link>
            <Link
            activeClass="bg-green-400 rounded-full "
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-400 "></button>
            </Link>
            <Link
            activeClass="bg-green-400 rounded-full "
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7  block rounded-full border-4   hover:bg-green-400"></button>
            </Link>
            <Link
            activeClass="bg-green-400 rounded-full "
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-400"></button>
            </Link>
            <Link
            activeClass="bg-green-400 rounded-full "
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={closeMenu}
            >
              <button className="cursor-pointer nav-dot h-7 w-7  block rounded-full border-4   hover:bg-green-400"></button>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Hero;

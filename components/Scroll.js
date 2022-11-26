import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

function Scroll() {
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
    };
  });

  const closeMenu = () => setClick(false);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav
        className={
          click
            ? "selected-circle z-50"
            : "hidden  fixed left-12 top-32 z-50 md:flex w-full justify-center"
        }
      >
        <div className="fixed flex top-2 py-2 gap-2 px-4 bg-neutral-900 mt-2 rounded-full transform -translate-x-1/2  ">
          <Link
            activeClass="bg-[#007bff] rounded-full "
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onClick={closeMenu}
            className="group relative"
          >
            <button
              className={`cursor-pointer  nav-dot h-7 w-7 block rounded-full border-4 hover:bg-[#007bff] active:bg-[#007bff]`}
            ></button>
            <span className="invisible group-hover:visible transition-all duration-100 ease-in-out bg-stone-800 z-50 text-white py-1 px-2 absolute top-0 rounded-sm drop-shadow-xl right-[-3.9rem]">
              Home
            </span>
          </Link>
          <Link
            activeClass="bg-[#007bff] rounded-full "
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            onClick={closeMenu}
            className="group relative rounded-full cursor-pointer hover:bg-[#007bff] h-7 w-7 border-4 "
          >
            <button className="   "></button>
            <span className="invisible group-hover:visible transition-all duration-100 ease-in-out bg-stone-800 z-50 text-white py-1 px-2 absolute top-0 rounded-sm drop-shadow-xl right-[-4.1rem]">
              About
            </span>
          </Link>
          <Link
            activeClass="bg-[#007bff] rounded-full "
            to="services"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
            className="group relative"
          >
            <button className="cursor-pointer nav-dot h-7 w-7  block rounded-full border-4   hover:bg-[#007bff]"></button>
            <span className="invisible group-hover:visible transition-all duration-100 ease-in-out bg-stone-800 z-50 text-white py-1 px-2 absolute top-0 rounded-sm drop-shadow-xl right-[-5.2rem]">
              Services
            </span>
          </Link>
          <Link
            activeClass="bg-[#007bff] rounded-full "
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            onClick={closeMenu}
            className="group relative"
          >
            <button className="cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-[#007bff]"></button>
            <span className="invisible group-hover:visible transition-all duration-100 ease-in-out bg-stone-800 z-50 text-white py-1 px-2 absolute top-0 rounded-sm drop-shadow-xl right-[-5.2rem]">
              Projects
            </span>
          </Link>
          <Link
            activeClass="bg-[#007bff] rounded-full "
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            onClick={closeMenu}
            className="group relative"
          >
            <button className="cursor-pointer nav-dot h-7 w-7  block rounded-full border-4   hover:bg-[#007bff]"></button>
            <span className="invisible group-hover:visible transition-all duration-100 ease-in-out bg-stone-800 z-50 text-white py-1 px-2 absolute top-0 rounded-sm drop-shadow-xl right-[-5.2rem]">
              Contact
            </span>
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {scrollY >= 300 && (
          <motion.div
            initial={{ x: "-100vh" }}
            animate={{
              x: 0,
              transition: { type: "spring", stiffness: 170, duration: 0.3 },
            }}
            exit={{ x: "100vh", transition: { duration: 0.9 } }}
            className="fixed right-6 bottom-4 p-3 z-100 animate-pulse cursor-pointer "
            onClick={scrollUp}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Scroll;

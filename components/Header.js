import React from "react";
import { useState, useRef, useEffect } from "react";
import HeaderItem from "./HeaderItem";
// import { Link } from "react-scroll";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";


export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
     
    },
  },
};

function Header() {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  function listenForOutsideClicks(listening, setListening, menuRef, setShow) {
    return () => {
      if (listening) return;
      if (!menuRef.current) return;
      setListening(true);
      [`click`, `touchstart`].forEach((type) => {
        document.addEventListener(`click`, (evt) => {
          if (menuRef?.current?.contains(evt.target)) return;
          setShow(false);
        });
      });
    };
  }
  useEffect(listenForOutsideClicks(listening, setListening, menuRef, setShow));

  const showNav = () => {
    setShow(!show);
  };
  return (
    <div className="md:w-2/3 rounded-full mx-auto fixed mt-5 p-2 shadow-2xl bg-neutral-900 z-50 inset-0 max-h-fit   drop-shadow-2xl ">
      <AnimatePresence>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="flex justify-between container  mx-auto  px-4  items-center  text-xl text-gray-200 "
      >
        <Image src="/Ghost.svg" height={40} width={40} objectFit="contain" />

        <div className="hidden md:flex items-center gap-4 ">
          <Link
            // activeClass="active"
            href="/"
            // to="hero"
            // spy={true}
            // smooth={true}
            // offset={0}
            // duration={500}
          >
            {/* <HeaderItem title="Home" /> */}
            <span className="text-neutral-400 hover:text-white cursor-pointer">Home</span>
          </Link>
          <Link
            // activeClass="active"
            href="/about"
            // to="hero"
            // spy={true}
            // smooth={true}
            // offset={0}
            // duration={500}
          >
            {/* <HeaderItem title="Home" /> */}
            <span className="text-neutral-400 hover:text-white cursor-pointer">About</span>
          </Link>
          <Link
            // activeClass="active"
            href="/services"
            // to="hero"
            // spy={true}
            // smooth={true}
            // offset={0}
            // duration={500}
          >
            {/* <HeaderItem title="Home" /> */}
            <span className="text-neutral-400 hover:text-white cursor-pointer">Services</span>
          </Link>
          <Link
            // activeClass="active"
            href="/projects"
            // to="hero"
            // spy={true}
            // smooth={true}
            // offset={0}
            // duration={500}
          >
            {/* <HeaderItem title="Home" /> */}
            <span className="text-neutral-400 hover:text-white cursor-pointer">Projects</span>
          </Link>
          <Link
            // activeClass="active"
            href="/contact"
            // to="hero"
            // spy={true}
            // smooth={true}
            // offset={0}
            // duration={500}
          >
            {/* <HeaderItem title="Home" /> */}
            <span className="text-neutral-400 hover:text-white cursor-pointer">Contact</span>
          </Link>
          

          
        </div>

        <div
          ref={menuRef}
          className="cursor-pointer md:hidden animate-pulse transition-all ease-out duration-500"
          onClick={toggle}
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
              className="h-8 w-8"
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
      </motion.div>
      </AnimatePresence>
      <AnimatePresence>
      {show && (<motion.div
      // initial={{y:"-100vh"}}
      // animate={{y:0,transition:{type:"spring",stiffness:280,duration:0.3}}}
      // exit={{y:"100vh"}}
        className={` bg-transparent h-screen 
         relative flex max-w-full  overflow-y-scroll
           
        left-0 top-16  w-full  lg:hidden shadow-2xl  text-gray-300 `}
      >
        <ul className="text-gray-300 font-costum2 text-xl gap-2 flex flex-col text-center mx-auto w-full">
          <Link
            activeClass="active"
            href={"/about"}
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setShow(false)}
          >
            <li className="w-full p-2 ">Home</li>
          </Link>
          
        </ul>
      </motion.div>)}
      </AnimatePresence>
      
    </div>
  );
}

export default Header;

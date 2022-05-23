import React from "react";
import { useState,useRef,useEffect } from "react";
import HeaderItem from "./HeaderItem";
import { Link } from "react-scroll";

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
          if (menuRef.current.contains(evt.target)) return;
          setShow(false);
        });
      });
    }
  }
  useEffect(listenForOutsideClicks(
    listening,
    setListening,
    menuRef,
    setShow,
  ));

  const showNav = () => {
    setShow(!show);
  };
  return (
    
    <div className="w-full bg-[#050505] shadow-2xl">
      <div className="flex justify-between container mx-auto py-4 px-4 md:py-2 font-poppins text-xl text-gray-200 ">
        <h2 className="text-xl md:text-1xl lg:text-2xl place-self-center font-black text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-600">
          OTTO PROGRAMMER
        </h2>
        <div className="hidden md:flex gap-4 ">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderItem title="Home" />
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderItem title="About" />
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderItem title="Services" />
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HeaderItem title="Projects" />
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <div className=" border-2 rounded-sm border-green-500 hover:text-white bg-[#092513]">
            <HeaderItem title="Hire me" />
            </div>
          </Link>


          
        </div>

        <div ref={menuRef}
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
      </div>
      <div
        className={`absolute ${
          show
            ? "flex max-w-full z-100 overflow-y-scroll"
            : "max-w-0 overflow-hidden"
        } h-auto left-0 top-16 '} bg-[#040404] w-full z-100 lg:hidden transition-all duration-300 ease-in-out shadow-2xl bg-[#0a0909] text-gray-300 border-b-2 border-gray-800`}
      >
          
          <ul className="text-gray-300 font-poppins text-xl space-y-4 flex flex-col text-center mx-auto w-full">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="w-full p-2 border-b-[1px] border-gray-600">Home</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="w-full p-2 border-b-[1px] border-gray-600">About me</li>         </Link>
            <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="w-full p-2 border-b-[1px] border-gray-600">Services</li>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="w-full p-2 border-b-[1px] border-gray-600">Projects</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <li className="w-full p-2 border-b-2">Hire me</li>
          </Link>
          </ul>
        
      </div>
          </div>
  );
}

export default Header;

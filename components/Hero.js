import React from "react";
import Image from 'next/image'
import {Link} from 'react-scroll'


function Hero() {

   
  return (
    <section className="bg-gradient-to-r from-[#1c502421] to-black p-4 " id="hero">
      {" "}
      <div className="container relative h-52 lg:h-98 flex items-center mx-auto justify-between">
        <div className="max-w-2xl">
        <h1 className="text-center text-3xl lg:text-5xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          Building Projects For The Next Genration
        </h1>
        <p className="text-gray-400 text-8 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae eos a quos suscipit dolorem sapiente fuga id minus quaerat.</p></div>
        <div className="hidden md:inline">
        <Image src="/bg.png" alt="bg" width={500} height={500}  /></div>

        <nav className="hidden lg:inline-block fixed left-12 top-32 ">
            <div className="absolute left-50 transform -translate-x-1/2 flex flex-col space-y-6">
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={700} >
            <button className={`cursor-pointer active:bg-green-700 focus:bg-green-700 nav-dot h-7 w-7 block rounded-full border-4 hover:bg-green-400`}></button></Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={700} >
            <button className='cursor-pointer nav-dot h-7 w-7 block rounded-full border-4 active:bg-green-700 focus:bg-green-700  hover:bg-green-400 '></button></Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={700} >
            <button className='cursor-pointer nav-dot h-7 w-7 block rounded-full border-4 active:bg-green-700 focus:bg-green-700  hover:bg-green-400'></button></Link>
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} >
            <button className='cursor-pointer nav-dot h-7 w-7 active:bg-green-700 focus:bg-green-700 block rounded-full border-4   hover:bg-green-400'></button></Link>
            </div>
        </nav>
      </div>
    </section>
  );
}

export default Hero;

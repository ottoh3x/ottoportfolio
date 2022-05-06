import React from "react";
import Image from 'next/image'


function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#1c502421] to-black p-4 ">
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
            <div className="absolute left-50 transform -translate-x-1/2 space-y-6">
            <a className='cursor-pointer selected-circle nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-400'></a>
            <a className='cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-400 active:bg-green-700'></a>
            <a className='cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-400'></a>
            <a className='cursor-pointer nav-dot h-7 w-7 block rounded-full border-4   hover:bg-green-400'></a>
            </div>
        </nav>
      </div>
    </section>
  );
}

export default Hero;

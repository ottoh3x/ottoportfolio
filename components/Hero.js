import React from "react";
import Image from 'next/image'


function Hero() {
  return (
    <section className="bg-gradient-to-l from-stone-700 via-stone-900 to-black ">
      {" "}
      <div className="container relative h-98 flex mx-auto justify-between">
        <h1 className="flex items-center text-center text-2xl lg:text-5xl font-extrabold max-w-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          BUILDING PROJECTS FOR THE NEXT GENERATION
        </h1>
        

        <Image src="/bg.png" width={500} height={500} />

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

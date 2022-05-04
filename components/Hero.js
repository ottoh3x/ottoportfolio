import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import AnimatedModel from "./AnimatedModel";

function Hero() {
  return (
    <section className="bg-gradient-to-l from-green-900 via-stone-900 to-black ">
      {" "}
      <div className="container relative h-98 flex mx-auto ">
        <h1 className="flex items-center text-center text-2xl lg:text-6xl font-extrabold max-w-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-400 to-green-700">
          BUILDING PROJECTS FOR THE NEXT GENERATION
        </h1>
        <Canvas shadows>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight color="#FF99CC" intensity={0.9} />
          <directionalLight intensity={0.7} position={[-2, 5, 3]} />
          <AnimatedModel />
        </Canvas>

        <nav className="inline-block fixed left-28 top-32 ">
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

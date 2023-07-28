import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import { useEffect, useState } from "react";
import Scroll from "../components/Scroll";
export default function Home() {
 

 
  return (
    <div className="portfolio leading-normal relative tracking-normal text-indigo-400 bg-cover bg-fixed">
      <Head>
        <title>OTTO PROGRAMMER</title>
        <meta name="description" content="Otto Programmer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />

      </Head>

     

      
      
      <Hero />
        <section className=" p-2 bg-[#ffffff05] about h-screen">
          <About />
        </section>
      
        <section className=" p-2 services h-full " id="services">
          <Services />

        </section>
        
        <section className=" p-2 projects bg-[#ffffff05] h-full" id="projects">
          <Projects />
        </section>
        
        <section className="contact p-2 h-screen flex items-center">
          <Contact />
        </section>
        <Footer />
        <Scroll />
      
    </div>
  );
}

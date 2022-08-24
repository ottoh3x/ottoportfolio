import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Landing from "./home";

export default function Home() {
  return (
    <div className="leading-normal bg-black tracking-normal text-indigo-400 bg-cover bg-fixed">
      <Head>
        <title>OTTO PROGRAMMER</title>
        <meta name="description" content="Otto Programmer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
        <section className=" p-2 bg-[#ffffff05] about">
          <About />
        </section>
      
        <section className=" p-2 services" id="services">
          <Services />
        </section>
        
        <section className=" p-2 projects bg-[#ffffff05]" id="projects">
          <Projects />
        </section>
        
        <section className="contact p-2">
          <Contact />
        </section>
        <Footer />
      
    </div>
  );
}

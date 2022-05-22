import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Zoom from "react-reveal/Zoom";

export default function Home() {
  return (
    <div className="bg-[##121212d1]">
      <Head>
        <title>OTTO PROGRAMMER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Zoom>
        <section className="mb-12 p-2 bg-[#ffffff05] about">
          <About />
        </section>
      </Zoom>
      <hr className="border-2 w-1/2 mx-auto border-gray-500 mb-12"></hr>
      <Zoom>
        <section className="mb-12 p-2 services" id="services">
          <Services />
        </section>
        <hr className="border-2 w-1/2 mx-auto border-gray-500 mb-12"></hr>
      </Zoom>
      <Zoom>
        <section className="mb-12 p-2 projects bg-[#ffffff05]" id="projects">
          <Projects />
        </section>
        <hr className="border-2 w-1/2 mx-auto border-gray-500 mb-12"></hr>
      </Zoom>
      <Zoom>
        <section className="contact mb-12 p-2">
          <Contact />
        </section>
      </Zoom>
    </div>
  );
}

import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
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
      <section className="mb-12 p-2 about">
        <About />
      </section>
      <hr className="border-2 w-1/2 mx-auto border-gray-500 mb-12"></hr>
      <section className="mb-12 p-2 projects" id="projects">
        <Projects />
      </section>
      <hr className="border-2 w-1/2 mx-auto border-gray-500 mb-12"></hr>
      <section className="contact mb-12 p-2">
        <Contact />
      </section>
    </div>
  );
}

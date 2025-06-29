import React, { useRef } from "react";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Banner scrollToAbout={scrollToAbout} />
      <About ref={aboutRef} />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

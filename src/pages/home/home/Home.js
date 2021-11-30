import React from "react";
import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

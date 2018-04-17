import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => (
  <div>
    <NavBar active="about" fixed={true} />
    <div style={{padding: '6em 0'}}>
      {"About Me"}
    </div>
    <Footer fixed={true}/>
  </div>
);

export default About;

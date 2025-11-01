import React from "react";
import "./styles/Home.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Home() {
  const ref = useScrollAnimation();
  return (
    <section id="Home" ref={ref} className="Home fade-section">
      <div className="Home-content">
        <h1>
          Hi, I'm <span>Yuda Pradana</span>
        </h1>
        <p>
          Graduated Full-Stack Web Developer bootcamp program from harisenin.com
          for deepening skills in Web Developer. Explore my latest projects,
          showcasing my expertise in web development.
        </p>
        <div className="div-btn">
          <a href="#portfolio" className="btn-resume">
            Resume
          </a>
          <a href="#portfolio" className="btn-contact">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

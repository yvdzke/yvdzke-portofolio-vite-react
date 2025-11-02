import React, { useState } from "react";
import "./styles/Home.css";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Skills from "./Skills.jsx";
import { IoMailOutline } from "react-icons/io5";
import { IoDocumentAttachSharp } from "react-icons/io5";
import SkillsSection from "../components/SkillsSection.jsx";
function Home() {
  const [showSkills, setShowSkills] = useState(false);
  const ref = useScrollAnimation();
  return (
    <section id="Home" ref={ref} className="Home fade-section">
      <div className="Home-content">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7JhjnxhO7YY?si=W_T76qv11D3-iQEF"
          title="YouTube video player"
          frameborder="2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h1>The code is like a joke. If it needs comment, it's no good.</h1>
        <p>
          Graduated Full-Stack Web Developer bootcamp program from harisenin.com
          for deepening
          <button
            id="skills"
            className="nav-btn"
            onClick={() => setShowSkills(true)}
          >
            Skills
          </button>
          in Web Developer. Explore my latest projects, showcasing my expertise
          in web development.
        </p>
        <div className="div-btn">
          <a
            href="/yvdzpradana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
          >
            {" "}
            Resume <IoDocumentAttachSharp />{" "}
          </a>{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yvdzke@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            {" "}
            Contact Me <IoMailOutline />{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <Skills isOpen={showSkills} onClose={() => setShowSkills(false)} />{" "}
    </section>
  );
}
export default Home;

import React, { useState } from "react";
import "./styles/Dialog.css";
import Skills from "./Skills.jsx";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

function DialogBox({ isOpen, onClose, type }) {
  const [showSkills, setShowSkills] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="dialog">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {type === "home" && (
          <>
            <h2>
              Hello, <span>I'm Yuda Pradana</span>
            </h2>
            <p className="text-job">I am a Full-Stack Developer</p>
            <p>
              A Bachelor of Informatics Engineering graduate with hands-on
              experience in full-stack developer using <span>HTML</span>,{" "}
              <span>CSS</span>, <span>JavaScript</span>, <span>React.js</span>,
              and <span>Node.js</span>. Currently working as a Full-Stack
              Developer while attending a Full-Stack Web Developer bootcamp to
              deepen technical expertise. Passionate Skills building scalable
              web applications and delivering seamless user experiences through
              well-crafted, responsive designs. A detail-oriented and
              growth-driven professional eager to secure a full-time role as a
              Full-Stack Developer.
            </p>
            <button className="ref-skills" onClick={() => setShowSkills(true)}>
              Open Yvdz Skills
            </button>
            <br />
            <div>
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/yvdzke"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yuda-pradana-8243182a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/yvdzke"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX size={21} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6282110990050"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp size={21} />
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}

        {type === "projects" && (
          <>
            <h2>Hehehe~ Gotcha! 😜</h2>
            <p>
              You wanna see my projects, huh? Just close this one and look to
              the home paragraph — they’re waiting for you there! 😎✨
            </p>
          </>
        )}
      </div>
      <Skills isOpen={showSkills} onClose={() => setShowSkills(false)} />
    </div>
  );
}

export default DialogBox;

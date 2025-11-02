import React from "react";
import "./styles/Footer.css";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Yuda Pradana</p>
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
    </footer>
  );
}

export default Footer;

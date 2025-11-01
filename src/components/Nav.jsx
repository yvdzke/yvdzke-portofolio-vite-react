import React, { useState, useEffect } from "react";
import "./styles/Nav.css";

function Nav() {
  const [active, setActive] = useState("home");

  // Update aktif berdasarkan scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav">
      <div className="logo">KE</div>
      <ul className="nav-links">
        <li>
          <a href="" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#home" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>

        <li>
          <a href="#project" className={active === "project" ? "active" : ""}>
            Project
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

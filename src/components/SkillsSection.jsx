import React from "react";
import "./styles/SkillsSection.css";

import phpIcon from "../assets/icons/php.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import dbIcon from "../assets/icons/db.png";
import nodeIcon from "../assets/icons/node.png";
import nextjsIcon from "../assets/icons/nextjs.png";
import laravelIcon from "../assets/icons/laravel.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import gitIcon from "../assets/icons/git.png";
import mysqlIcon from "../assets/icons/mysql.png";

const skills = [
  {
    name: "Framworks",
    icons: [
      { img: nextjsIcon, label: "NextJS" },
      { img: laravelIcon, label: "Laravel" },
    ],
    level: 87,
  },
  {
    name: "Design",
    icons: [
      { img: tailwindIcon, label: "Tailwind" },
      { img: bootstrapIcon, label: "Bootstrap" },
      { img: reactIcon, label: "ReactJs" },
    ],
    level: 79,
  },
  {
    name: "Languege",
    icons: [
      { img: jsIcon, label: "JavaScript" },
      { img: phpIcon, label: "PHP" },
    ],
    level: 80,
  },
  {
    name: "Database",
    icons: [
      { img: dbIcon, label: "PosgreSQL" },
      { img: mysqlIcon, label: "MySQL" },
    ],
    level: 75,
  },
  {
    name: "Tools",
    icons: [
      { img: nodeIcon, label: "NodeJs" },
      { img: gitIcon, label: "Git" },
    ],
    level: 75,
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <p className="skills-subtitle">
        My <em>Technical Skills:</em>
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-icons">
                {skill.icons.map((icon, i) => (
                  <div className="skill-icon-wrapper" key={i}>
                    <img
                      src={icon.img}
                      alt={icon.label}
                      className="skill-icon"
                    />
                    <span className="skill-icon-text">{icon.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-line">
              <div
                className="skill-dot"
                style={{ left: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

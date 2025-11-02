import React, { useState } from "react";
import "./styles/Nav.css";
import DialogBox from "./DialogBox";

function Nav() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const openDialog = (type) => {
    setDialogContent(type);
    setIsDialogOpen(true);
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="src/assets/icons/icon.png" alt="" className="logo-img" />
        </div>

        <ul className="nav-links">
          <li>
            <button className="nav-btn" onClick={() => openDialog("home")}>
              About
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => openDialog("projects")}>
              Projects
            </button>
          </li>
        </ul>
      </nav>

      <DialogBox
        isOpen={isDialogOpen}
        type={dialogContent}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}

export default Nav;

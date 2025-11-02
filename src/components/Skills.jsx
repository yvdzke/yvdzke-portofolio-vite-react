import React from "react";
import styles from "./styles/Skills.module.css";
import SkillsSection from "./SkillsSection.jsx";

function SkillsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>
        <SkillsSection />
      </div>
    </div>
  );
}

export default SkillsModal;

import React from "react";
import "./Navbar.css"

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -70;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function Navbar() {
  return (
    <nav className="navbar">
      <button onClick={() => scrollTo("about")}>About</button>
      <button onClick={() => scrollTo("projects")}>Projects</button>
      <button onClick={() => scrollTo("experience")}>Experience</button>
      <button onClick={() => scrollTo("education")}>Education</button>
    </nav>
  );
}
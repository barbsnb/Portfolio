import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="sidebar">
       <div className="sidebar-content">
        <a href="https://github.com/barbsnb" target="_blank" rel="noreferrer">
          <Github size={24} strokeWidth={1}/>
        </a>
        <a href="mailto:your@email.com">
          <Mail size={24} strokeWidth={1}/>
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
          <Linkedin size={24} strokeWidth={1}/>
        </a>
       </div>
    </aside>
  );
}

export default Sidebar;
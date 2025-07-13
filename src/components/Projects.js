import { useState } from "react";
import { projects } from "../data/projects";
import { Github, Clapperboard } from "lucide-react";
import "./Projects.css"

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div className="flip-card" key={p.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {/* GIF animation */}
                <img src={`${process.env.PUBLIC_URL}/gifs/${p.gif}`} alt="Preview" className="project-gif" />
              </div>
              <div className="flip-card-back">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p><b>Tech:</b> {p.tech.join(", ")}</p>
                <div className="icons-content">
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Github size={24} strokeWidth={1} />
                  </a>
                  {p.video ? (
                    <button onClick={() => setSelectedVideo(p.video)} style={{ color: "#fff", background: "none", border: "none", cursor: "pointer" }}>
                      <Clapperboard size={24} strokeWidth={1} />
                    </button>
                  ) : (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <Clapperboard size={24} strokeWidth={1} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <video controls autoPlay style={{ maxWidth: "100%" }}>
              <source src={`${process.env.PUBLIC_URL}/videos/${selectedVideo}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={() => setSelectedVideo(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><b>Tech:</b> {p.tech.join(", ")}</p>
            <a href={p.repo} target="_blank" rel="noopener noreferrer">Repo</a>
            {p.video ? (
              <button onClick={() => setSelectedVideo(p.video)}>Demo</button>
            ) : (
              <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            )}
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <video controls autoPlay style={{ maxWidth: "100%" }}>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={() => setSelectedVideo(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
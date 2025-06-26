import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><b>Tech:</b> {p.tech.join(", ")}</p>
            <a href={p.repo}>Repo</a> | <a href={p.demo}>Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}
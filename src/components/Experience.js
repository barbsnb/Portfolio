import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul>
        {experience.map((job, i) => (
          <li key={i}>
            <h3>{job.title} — {job.company}</h3>
            <p>{job.period}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
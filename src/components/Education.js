import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <ul>
        {education.map((e, i) => (
          <li key={i}>
            <h3>{e.institution}</h3>
            <p>{e.period}</p>
            <p>{e.details}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

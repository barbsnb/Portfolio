import { DiPython, DiJava, DiJavascript1, DiDjango, DiReact } from "react-icons/di";
import "./About.css"

export default function About() {
  return (
    <section id="about">
      <h1>Barbsnb</h1>
      <p> 
        I'm a final-year MSc Computer Science student with a background in robotics and a strong passion for software engineering. I've gained hands-on experience building AI projects using Python, such as creating automatic feedback tools for IT applications with OpenAI APIs and generating music with NanoGPT. I'm comfortable working with Django, React, Bootstrap, HTML, CSS, Git, REST APIs, and automated testing. I enjoy developing software that interacts with the real world and I'm always eager to learn new skills and take on new challenges.
      </p>
      <p>
        For my master's thesis, I'm working on explainable AI techniques for models that classify bird sounds. The goal is to make these AI models more transparent and understandable, which helps improve trust and usability in real-world applications.
      </p>
      <div className="about-icons"> 
        <DiPython size={35} />
        <DiJava size={35} />
        <DiJavascript1 size={35} />
        <DiDjango size={35} />
        <DiReact size={35}/>
      </div>
    </section>
  );
}
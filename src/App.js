// App.jsx
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./index.css";

function App() {
  useEffect(() => {
    document.title = "Moje Portfolio";
  }, []);

  return (
    <>
      <Navbar />
      <main className="container">
        <About />
        <Projects />
        <Experience />
        <Education />
      </main>
    </>
  );
}

export default App;
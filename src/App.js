// App.jsx
import { useEffect } from "react";
import Navbar from "./components/common/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Sidebar from "./components/common/Sidebar";
import "./index.css";

function App() {
  useEffect(() => {
    document.title = "Barbsnb portfolio";
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
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
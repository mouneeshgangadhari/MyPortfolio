import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "@tsparticles/react";
import { initializeParticles } from "./utils.js/particles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particlesOptions from "./utils.js/particles";
import Projects from "./containers/MyProject";

function App() {
  const location = useLocation();

  const handleParticleInit = async (main) => {
    try {
      await initializeParticles(main);
    } catch (error) {
      console.error("Failed to initialize particles", error);
    }
  };

  const renderParticles = location.pathname === "/";

  return (
    <div className="App">
      {renderParticles && (
        <Particles id="tsparticles" options={particlesOptions} init={handleParticleInit} />
      )}

      <Navbar />

      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/Header/Navbar";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Education */}
        <Route path="/education" element={<Education />} />

        {/* Experience */}
        <Route path="/experience" element={<Experience />} />

        {/* Certifications */}
        <Route
          path="/certifications"
          element={<Certifications />}
        />

        {/* Skills */}
        <Route path="/skills" element={<Skill />} />

        {/* Projects */}
        <Route path="/projects" element={<Project />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
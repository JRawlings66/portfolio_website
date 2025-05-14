import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Games from "./pages/Games";
import TechStack from "./pages/TechStack";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Now from "./pages/Now"; // optional

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/now" element={<Now />} />
      </Routes>
    </Router>
  );
}

export default App;


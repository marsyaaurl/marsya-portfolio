import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="menu">
          <li><Link to="/" className="middle">About</Link></li>
          <li><Link to="/experiences" className="middle">Experiences</Link></li>
          <li><Link to="/projects" className="middle2">Projects</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
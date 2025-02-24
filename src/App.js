import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import LoginRegister from "./Components/LoginRegister/LoginRegister";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar remains visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </Router>
  );
}

export default App;

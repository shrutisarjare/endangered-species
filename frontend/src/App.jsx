
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import MyApp from "./component/MyApp";

import Features from "./component/features";
import Work from "./component/work";
import Species from "./component/species";
import Contact from "./component/contact";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Region from "./pages/Region";
import PanIndia from "./pages/PanIndia";
import PanIndiaLand from "./pages/PanIndiaLand";

export default function App() {
  return (
    <>
      {/* ✅ Navbar ALWAYS visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<MyApp />} />

        <Route path="/features" element={<Features />} />
        <Route path="/work" element={<Work />} />
        <Route path="/species" element={<Species />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/region" element={<Region />} />
        <Route path="/pan-india" element={<PanIndia />} />
        <Route path="/pan-india/land" element={<PanIndiaLand />} />
      </Routes>
    </>
  );
}

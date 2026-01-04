import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Region from "./pages/Region"
import PanIndia from "./pages/PanIndia"
import PanIndiaLand from "./pages/PanIndiaLand"
import Identify from "./pages/Identify"
import IdentifyResult from "./pages/IdentifyResult"


export default function App() {
  return (
    <Routes>
    <Route path="/identify-result" element={<IdentifyResult />} />
      <Route path="/identify" element={<Identify />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/region" element={<Region />} />
      <Route path="/pan-india" element={<PanIndia />} />
      <Route path="/pan-india/land" element={<PanIndiaLand />} />
    </Routes>
  )
}

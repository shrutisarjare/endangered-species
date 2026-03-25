import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Features from "./component/Features";
import HowItWorks from "./component/HowItWorks";
import Species from "./component/species";
import Contact from "./component/contact";

import Identify from "./component/Identify";
import Explore from "./component/Explore";
import AnimalList from "./component/AnimalList";

import IndiaStates from "./component/IndiaStates";
import StateCategories from "./component/StateCategories";

import AsiaCountries from "./component/AsiaCountries";

import Continents from "./component/Continents";
import ContinentCountries from "./component/ContinentCountries";

import SpeciesCategory from "./component/SpeciesCategory";
import SpeciesPage from "./component/SpeciesPage";

import Login from "./component/Login";
import Register from "./component/Register";

import FeatureDetails from "./component/FeatureDetails";


/* =======================
   HOME PAGE
======================= */
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Species />
      <Contact />
    </>
  );
};


/* =======================
   APP ROUTES
======================= */
export default function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* MAIN FEATURES */}
      <Route path="/identify" element={<Identify />} />
      <Route path="/explore" element={<Explore />} />

      {/* INDIA FLOW */}
      <Route path="/india" element={<IndiaStates />} />

      {/* Select State */}
      <Route path="/state/:stateName" element={<StateCategories />} />

      {/* Select Animal inside State */}
      <Route path="/species/:state/:category" element={<SpeciesCategory />} />

      {/* Show Animals */}
      <Route path="/animal/:state/:animal" element={<AnimalList />} />

      {/* FINAL SPECIES PAGE */}
      <Route path="/species-info/:name" element={<SpeciesPage />} />

      {/* ASIA FLOW */}
      <Route path="/asia" element={<AsiaCountries />} />
      <Route path="/country/:countryName" element={<StateCategories />} />

      {/* GLOBAL FLOW */}
      <Route path="/global" element={<Continents />} />
      <Route path="/continent/:continentName" element={<ContinentCountries />} />

      {/* FEATURES DETAILS */}
      <Route path="/features/:feature" element={<FeatureDetails />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}
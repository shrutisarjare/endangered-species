import { Link } from "react-router-dom";

const continents = [
  "Asia",
  "Africa",
  "Europe",
  "North America",
  "South America",
  "Australia / Oceania",
  "Antarctica",
];

const Continents = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-10 py-16 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-6">
        🌍 Select a Continent
      </h1>

      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-200">
        Explore biodiversity-rich regions across the world’s continents
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {continents.map((continent) => {

          // ✅ FIX: convert to clean slug
          const slug = continent
            .toLowerCase()
            .replace(/\s*\/\s*/g, "_")   // Australia / Oceania → australia_oceania
            .replace(/\s+/g, "_");       // North America → north_america

          return (
            <Link
              key={continent}
              to={`/continent/${slug}`}   // ✅ FIXED
              className="bg-white/90 backdrop-blur text-green-800 p-6 rounded-2xl shadow-xl 
                         hover:scale-105 transition text-center font-semibold text-lg"
            >
              {continent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Continents;
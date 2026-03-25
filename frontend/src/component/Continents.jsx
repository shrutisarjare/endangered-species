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
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e')",
      }}
    >
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl">
        
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          🌍 Select a Continent
        </h1>

        <p className="text-center text-gray-200 mb-10">
          Discover biodiversity across continents and explore endangered species
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {continents.map((continent) => (
            <Link
              key={continent}
              to={`/continent/${continent}`}
              className="bg-white/90 text-green-800 p-6 rounded-2xl shadow-lg
                         hover:scale-105 hover:bg-green-50 transition
                         text-center font-semibold text-lg"
            >
              {continent}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Continents;

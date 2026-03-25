import { Link } from "react-router-dom";

const asiaCountries = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China ⭐",
  "Cyprus",
  "Georgia",
  "India ⭐",
  "Indonesia ⭐",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia ⭐",
  "Maldives",
  "Mongolia",
  "Myanmar ⭐",
  "Nepal ⭐",
  "North Korea",
  "Oman",
  "Pakistan",
  "Philippines ⭐",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka ⭐",
  "Syria",
  "Tajikistan",
  "Thailand ⭐",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates (UAE)",
];

const AsiaCountries = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-10 py-16 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-4">
        🌏 Asian Countries (49)
      </h1>

      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-200">
        ⭐ Marked countries have higher biodiversity due to tropical forests,
        islands, mountains, and monsoon climate.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {asiaCountries.map((country) => (
          <Link
            key={country}
            to={`/country/${country}`}
            className="bg-white/90 text-green-800 p-4 rounded-xl shadow-lg hover:scale-105 transition text-center font-medium"
          >
            {country}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AsiaCountries;

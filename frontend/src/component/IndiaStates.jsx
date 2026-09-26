import { Link } from "react-router-dom";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

const IndiaStates = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-10 py-16 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da')",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-6">
        🇮🇳 Select an Indian State
      </h1>

      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-200">
        Explore state-wise biodiversity across India’s diverse ecosystems
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {states.map((state) => (
          <Link
            key={state}
            to={`/state/${state.toLowerCase()}`}
            className="bg-white/90 backdrop-blur text-green-800 p-4 rounded-xl shadow-lg
                       hover:scale-105 transition text-center font-medium"
          >
            {state}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IndiaStates;

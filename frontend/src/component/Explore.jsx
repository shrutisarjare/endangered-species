import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-3">
        🌍 Choose Your Region
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <Link to="/india">
          <div className="bg-white/90 rounded-xl p-6 w-72 shadow-lg hover:scale-105 transition">
            🇮🇳 <h2 className="font-bold text-green-700">Pan India</h2>
          </div>
        </Link>

        <Link to="/asia">
          <div className="bg-white/90 rounded-xl p-6 w-72 shadow-lg hover:scale-105 transition">
            🌏 <h2 className="font-bold text-green-700">Pan Asia</h2>
          </div>
        </Link>

        <Link to="/global">
          <div className="bg-white/90 rounded-xl p-6 w-72 shadow-lg hover:scale-105 transition">
            🌍 <h2 className="font-bold text-green-700">Global</h2>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Explore;

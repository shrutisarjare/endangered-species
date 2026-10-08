import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="h-[85vh] bg-cover bg-center flex flex-col justify-center items-center 
                 text-white text-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e')",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Discover, Learn & Protect  
        <span className="text-yellow-400"> Endangered Species</span>
      </h1>

      <p className="max-w-2xl text-lg text-gray-200 mb-8">
        Explore biodiversity across India, Asia and the World.  
        AI-powered insights to understand species, habitats and conservation.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/identify">
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition">
            🔍 Identify a Species
          </button>
        </Link>

        <Link to="/explore">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold transition">
            🌍 Explore Species Data
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

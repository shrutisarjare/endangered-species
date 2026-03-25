import { useParams, useNavigate } from "react-router-dom";

const StateCategories = () => {
  const { stateName, countryName } = useParams(); 
  const navigate = useNavigate();

  const categories = [
    {
      key: "terrestrial",
      label: "🦌 Terrestrial",
      description: "Explore land species",
      bgColor: "bg-green-100",
    },
    {
      key: "aquatic",
      label: "🐟 Aquatic",
      description: "Explore water species",
      bgColor: "bg-blue-100",
    },
    {
      key: "aerial",
      label: "🦅 Aerial",
      description: "Explore flying species",
      bgColor: "bg-yellow-100",
    },
  ];

  const handleClick = (category) => {
    const location = stateName || countryName;
    navigate(`/species/${location}/${category}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero.png')",
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-xl">
        {categories.map((cat) => (
          <div
            key={cat.key}
            onClick={() => handleClick(cat.key)}
            className={`${cat.bgColor} p-6 rounded-xl w-60 text-center shadow cursor-pointer
                       hover:scale-105 transition`}
          >
            <h2 className="text-green-700 font-bold text-xl mb-2">{cat.label}</h2>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateCategories;
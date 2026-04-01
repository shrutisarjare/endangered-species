import { useParams, useNavigate } from "react-router-dom";

const speciesData = {
  terrestrial: {
    title: "🐾 Terrestrial Species",
    description: "Animals that live on land.",
    animals: [
      "Lion",
      "Tiger",
      "Elephant",
      "Leopard",
      "Cheetah",
      "Wolf",
      "Bear",
      "Deer",
      "Zebra",
      "Giraffe",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },

  aquatic: {
    title: "🌊 Aquatic Species",
    description: "Animals that live in water.",
    animals: [
      "Blue Whale",
      "Dolphin",
      "Shark",
      "Octopus",
      "Sea Turtle",
      "Seal",
      "Walrus",
      "Manatee",
      "Stingray",
      "Seahorse",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },

  aerial: {
    title: "🕊️ Aerial Species",
    description: "Animals that fly in the air.",
    animals: [
      "Eagle",
      "Bird",
      "Vulture",
      "Parrot",
      "Sparrow",
      "Peacock",
      "Owl",
      "Falcon",
      "Hawk",
      "Pigeon",
      "Crow",
    ],
    bgImage:
      "https://images.unsplash.com/photo-1501706362039-c6e5f7ff47f3",
  },
};

const SpeciesCategory = () => {

  // ✅ IMPORTANT: include region
  const { region, state, category } = useParams();
  const navigate = useNavigate();

  const data = speciesData[category?.toLowerCase()];

  if (!data)
    return (
      <p className="text-center mt-10 text-red-500">
        Category not found!
      </p>
    );

  const handleAnimalClick = (animal) => {

    const animalSlug = animal.toLowerCase();

    // ✅ FINAL CORRECT NAVIGATION
    const cleanState = state.toLowerCase().replace(/[^a-z\s]/g, "").trim();
   navigate(`/animal/${region}/${category}/${cleanState}/${animalSlug}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 py-16 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${data.bgImage}')`,
      }}
    >

      <h1 className="text-4xl font-bold text-center mb-4">
        {data.title}
      </h1>

      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-200">
        {data.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">

        {data.animals.map((animal) => (

          <div
            key={animal}
            onClick={() => handleAnimalClick(animal)}
            className="bg-white/90 text-green-800 p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition text-center font-medium cursor-pointer"
          >
            {animal}
          </div>

        ))}

      </div>

    </div>
  );
};

export default SpeciesCategory;
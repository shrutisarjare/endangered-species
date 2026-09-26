import { useParams } from "react-router-dom";
import speciesData from "./iucnData";

const backgrounds = {
  species: {
    title: "Species Identification",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
  habitat: {
    title: "Habitat Information",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  status: {
    title: "Endangerment Status",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  conservation: {
    title: "Conservation Tips",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  },
};

const FeatureDetails = () => {
  const { feature } = useParams();
  const bg = backgrounds[feature];

  if (!bg) {
    return (
      <p className="text-center mt-20 text-red-600">
        Feature not found
      </p>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center px-10 py-16 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${bg.image}')`,
      }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        🌿 {bg.title}
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {Object.entries(speciesData).map(([name, data]) => (
          <div
            key={name}
            className="bg-white/90 text-green-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {name}
            </h2>

            {feature === "species" && (
              <p>
                This species is commonly found across various regions.
              </p>
            )}

            {feature === "habitat" && (
              <p>
                <strong>Habitat:</strong> {data.habitat}
              </p>
            )}

            {feature === "status" && (
              <p>
                <strong>IUCN Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    data.status === "Endangered"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {data.status}
                </span>
              </p>
            )}

            {feature === "conservation" && (
              <p>
                <strong>Conservation Tip:</strong>{" "}
                {data.conservation}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDetails;

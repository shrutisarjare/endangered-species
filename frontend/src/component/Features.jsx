import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    { name: "Species Identification", path: "species" },
    { name: "Habitat Information", path: "habitat" },
    { name: "Endangerment Status", path: "status" },
    { name: "Conservation Tips", path: "conservation" },
  ];

  return (
    <section className="py-16 bg-[#f7f7dc] text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
        {features.map((f) => (
          <Link
            key={f.path}
            to={`/features/${f.path}`}
            className="border rounded-lg p-6 bg-white shadow hover:scale-105 transition"
          >
            <h3 className="font-semibold text-green-800">
              {f.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;

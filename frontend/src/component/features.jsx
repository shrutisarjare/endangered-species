const Features = () => {
  return (
    <section className="py-16 bg-[#f7f7dc] text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-10">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
        {[
          "Species Identification",
          "Habitat Information",
          "Endangerment Status",
          "Conservation Tips",
        ].map((feature, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 bg-white shadow"
          >
            <h3 className="font-semibold">{feature}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

const HowItWorks = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 px-10">
        <div>
          <h3 className="font-semibold">1. Upload Image</h3>
          <p>Upload an image of the species</p>
        </div>

        <div>
          <h3 className="font-semibold">2. AI Analysis</h3>
          <p>Our AI identifies the species</p>
        </div>

        <div>
          <h3 className="font-semibold">3. Get Results</h3>
          <p>Learn conservation details</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

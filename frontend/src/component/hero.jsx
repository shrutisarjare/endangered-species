const Hero = () => {
  return (
    <div className="h-[70vh] bg-[url('/public/vite.svg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-4xl font-bold mb-4">
        Discover, Learn, and Protect Endangered Species
      </h1>
      <p className="mb-6">
        AI-powered models to identify and track endangered species worldwide.
      </p>

      <div className="flex gap-4">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded">
          Identify a Species
        </button>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded">
          Explore Species Database
        </button>
      </div>
    </div>
  );
};

export default Hero;


const Settings = () => {

  const clearHistory = () => {
    localStorage.removeItem("history");
    alert("History cleared");
  };

  return (
    <div className="relative min-h-screen text-white">

      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        className="absolute w-full h-full object-cover -z-10"
        alt=""
      />

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="flex justify-center items-center h-screen">
        <div className="bg-white/10 p-8 rounded-xl">

          <h1 className="text-xl mb-4">⚙️ Settings</h1>

          <button className="block mb-4">
            🌙 Toggle Dark Mode
          </button>

          <button
            onClick={clearHistory}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Delete History
          </button>

        </div>
      </div>
    </div>
  );
};

export default Settings;
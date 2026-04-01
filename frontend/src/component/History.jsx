const History = () => {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  return (
    <div className="relative min-h-screen text-white">

      <img
        src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
        className="absolute w-full h-full object-cover -z-10"
        alt=""
      />

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="p-8">
        <h1 className="text-2xl mb-6">📜 History</h1>

        <div className="space-y-3">
          {history.length === 0 ? (
            <p>No history yet</p>
          ) : (
            history.map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/10 p-4 rounded-xl"
              >
                🐾 {item}
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default History;
const Quiz = () => {
  const history = JSON.parse(localStorage.getItem("history")) || [];

  return (
    <div className="relative min-h-screen text-white">

      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        className="absolute w-full h-full object-cover -z-10"
        alt=""
      />

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="flex justify-center items-center h-screen">
        <div className="bg-white/10 p-8 rounded-xl">

          <h1 className="text-xl mb-4">🧠 Quiz</h1>

          {history.length === 0 ? (
            <p>No data for quiz</p>
          ) : (
            <p>Which animal did you explore recently?</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Quiz;
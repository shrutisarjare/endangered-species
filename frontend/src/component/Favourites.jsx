const Favourites = () => {
  const fav = JSON.parse(localStorage.getItem("favourites")) || [];

  return (
    <div className="relative min-h-screen text-white">

      <img
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        className="absolute w-full h-full object-cover -z-10"
        alt=""
      />

      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="p-8">
        <h1 className="text-2xl mb-6">❤️ Favourites</h1>

        <div className="space-y-3">
          {fav.length === 0 ? (
            <p>No favourites yet</p>
          ) : (
            fav.map((item, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl">
                ❤️ {item}
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Favourites;
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AnimalList = () => {

  const { state, animal } = useParams();
  const navigate = useNavigate();

  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!state || !animal) return;

    const formattedState = encodeURIComponent(state.toLowerCase());
    const formattedAnimal = animal.toLowerCase();

    fetch(`http://127.0.0.1:8000/animal/${formattedState}/${formattedAnimal}`)
      .then(res => res.json())
      .then(data => { 

        if (Array.isArray(data)) {
          const uniqueAnimals = Array.from(
            new Map(data.map(item => [item.name, item])).values()
          );
          setAnimals(uniqueAnimals);
        } else {
          setAnimals([]);
        }

        setLoading(false);

      })
      .catch(err => {

        console.error("Fetch error:", err);
        setAnimals([]);
        setLoading(false);

      });

  }, [state, animal]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading animals...
      </div>
    );
  }


  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 py-12 px-6">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-12 capitalize">
        {animal} in {state}
      </h1>

      {animals.length === 0 ? (

        <div className="flex flex-col items-center justify-center text-center mt-20">

          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="no data"
            className="w-24 mb-4 opacity-60"
          />

          <p className="text-xl text-gray-600 font-medium">
            No data found for {animal} in {state}
          </p>

          <p className="text-gray-500 mt-2">
            Try exploring another state or species.
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {animals.map((item, index) => (

            <div
              key={index}
              onClick={() =>
                navigate(`/species-info/${item.name.toLowerCase()}`)
              }
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >

              <img
                src={`https://source.unsplash.com/600x400/?${encodeURIComponent(item.name)}%20animal`}
                alt={item.name}
                className="h-56 w-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://picsum.photos/600/400?random=${index}`

                }}
              />

              <div className="p-6">

                <h2 className="text-xl font-bold text-green-700">
                  {item.name}
                </h2>

                <p className="text-gray-500 italic">
                  {item.scientific_name}
                </p>

                <p className="text-gray-600 mt-2">
                  📍 {item.location}
                </p>

                <p className="text-red-600 mt-2 font-semibold">
                  Status: {item.status}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default AnimalList;
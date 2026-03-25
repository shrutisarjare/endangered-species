import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SpeciesPage = () => {

  const { name } = useParams();

  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [info, setInfo] = useState(null);

  useEffect(() => {

    fetch(`http://127.0.0.1:8000/analysis/${name}`)
      .then(res => res.json())
      .then(result => {

        setData(result);

        const history = result.population_history || [];
        const predictions = result.predictions || [];

        const combined = [...history, ...predictions];

        setChartData(combined);

      })
      .catch(err => {
        console.error("Fetch error:", err);
      });

  }, [name]);

  if (!data || !data.population_history)
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading species data...
      </div>
    );

  const currentPopulation =
    data.population_history[data.population_history.length - 1]?.population || 0;

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 py-12 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-4xl font-bold text-green-700 mb-2">
              {data.species}
            </h1>

            <p className="text-gray-500 italic mb-6">
              {data.scientific_name}
            </p>

            <div className="space-y-3 text-gray-700">

              <p>
                <span className="font-semibold">Location:</span> {data.state}
              </p>

              <p>
                <span className="font-semibold">Population:</span> {currentPopulation}
              </p>

              <p>
                <span className="font-semibold">Status:</span> {data.risk_level || "Unknown"}
              </p>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg"
              alt={data.species}
              className="w-64 h-64 object-cover rounded-xl shadow-md"
            />

          </div>

        </div>


        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="relative bg-green-100 p-6 rounded-xl shadow">

            <button
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setInfo("trend")}
            >
              ℹ
            </button>

            {info === "trend" && (

              <div className="absolute -top-20 right-0 bg-white p-4 rounded-lg shadow-lg text-sm w-60">

                <button
                  className="absolute top-1 right-2 text-gray-500"
                  onClick={() => setInfo(null)}
                >
                  ✕
                </button>

                Population trend shows whether the species population is increasing, stable, or declining.

              </div>

            )}

            <h3 className="font-semibold">Trend</h3>

            <p className="text-xl mt-2">{data.trend || "Unknown"}</p>

          </div>


          <div className="relative bg-blue-100 p-6 rounded-xl shadow">

            <button
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setInfo("prediction")}
            >
              ℹ
            </button>

            {info === "prediction" && (

              <div className="absolute -top-20 right-0 bg-white p-4 rounded-lg shadow-lg text-sm w-60">

                <button
                  className="absolute top-1 right-2 text-gray-500"
                  onClick={() => setInfo(null)}
                >
                  ✕
                </button>

                Estimated future population predicted using machine learning.

              </div>

            )}

            <h3 className="font-semibold">Estimated Population</h3>

            {(data.predictions || []).map(p => (
              <p key={p.year}>
                {p.year} → {p.population}
              </p>
            ))}

          </div>


          <div className="relative bg-red-100 p-6 rounded-xl shadow">

            <button
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setInfo("risk")}
            >
              ℹ
            </button>

            {info === "risk" && (

              <div className="absolute -top-20 right-0 bg-white p-4 rounded-lg shadow-lg text-sm w-60">

                <button
                  className="absolute top-1 right-2 text-gray-500"
                  onClick={() => setInfo(null)}
                >
                  ✕
                </button>

                Risk level indicates the extinction threat of the species.

              </div>

            )}

            <h3 className="font-semibold">Risk Level</h3>

            <p className="text-xl mt-2">{data.risk_level || "Unknown"}</p>

          </div>

        </div>


        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow">

          <h2 className="text-2xl font-semibold mb-4">
            Population Trend & Prediction
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3"/>

              <XAxis dataKey="year"/>

              <YAxis/>

              <Tooltip/>

              <Line
                type="monotone"
                dataKey="population"
                stroke="#16a34a"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

};

export default SpeciesPage;
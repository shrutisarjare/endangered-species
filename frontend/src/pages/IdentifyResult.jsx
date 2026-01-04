import { useLocation, useNavigate } from "react-router-dom"

export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No data found.
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-[400px]">
        <h2 className="text-xl font-semibold text-green-700 mb-4">
          Identification Result
        </h2>

        <p><strong>Species:</strong> {state.name}</p>
        <p><strong>Confidence:</strong> {state.confidence}</p>
        <p><strong>Status:</strong> {state.status}</p>
        <p><strong>Habitat:</strong> {state.habitat}</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Identify Another
        </button>
      </div>
    </div>
  )
}

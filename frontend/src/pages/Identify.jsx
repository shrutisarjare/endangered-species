import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UploadCloud, Mic, Sparkles } from "lucide-react"

export default function Identify() {
  const [image, setImage] = useState(null)
  const [text, setText] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    const data = {
      name: "Bengal Tiger",
      confidence: "92%",
      status: "Endangered",
      habitat: "Tropical forests"
    }

    navigate("/identify-result", { state: data })
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="bg-white/95 backdrop-blur-lg p-10 rounded-2xl shadow-xl w-[500px] text-center">
        
        <h1 className="text-2xl font-semibold text-green-700 flex items-center justify-center gap-2 mb-1">
          <Sparkles size={22} /> Identify a Species
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Upload an image or describe a species to identify it.
        </p>

        <label className="flex items-center justify-center gap-2 cursor-pointer bg-green-100 p-4 rounded-lg mb-4 hover:bg-green-200 transition">
          <UploadCloud />
          <span>Upload Image</span>
          <input type="file" className="hidden" onChange={e => setImage(e.target.files[0])} />
        </label>

        <p className="text-gray-400 text-sm mb-2">OR</p>

        <textarea
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Describe the species..."
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <button className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition mb-4">
          <Mic /> Voice Input
        </button>

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-300 transition font-semibold"
        >
          Identify Species
        </button>
      </div>
    </div>
  )
}

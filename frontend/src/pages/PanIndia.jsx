import { Link } from "react-router-dom"

export default function PanIndia() {
  return (
    <div className="min-h-screen bg-[url('/bg2.jpg')] bg-cover flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        {["Land", "Aquatic", "Aerial"].map(t => (
          <Link key={t} to={t==="Land"?"/pan-india/land":"/"} className="bg-white/90 p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <h2 className="text-xl font-bold text-green-700">{t}</h2>
            <p className="text-gray-500 mt-2">Explore {t.toLowerCase()} species</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

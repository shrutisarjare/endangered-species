import { Link } from "react-router-dom"

export default function Region() {
  return (
    <div className="min-h-screen bg-[url('/bg2.jpg')] bg-cover flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8">
        {["Pan India", "Pan Asia", "Global"].map(r => (
          <Link key={r} to={r==="Pan India"?"/pan-india":"/"} className="bg-white/90 p-8 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <h2 className="text-xl font-bold text-green-700">{r}</h2>
            <p className="text-gray-500 mt-2">Explore endangered species</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

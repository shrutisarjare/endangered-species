import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="bg-[#f6f7dc] min-h-screen">

      {/* Navbar */}
      <nav className="bg-[#3f8f64] text-white flex justify-between items-center px-10 py-3 text-sm">
        <h1 className="text-lg font-semibold">Endangered Species ID</h1>
        <div className="flex gap-5 items-center">
          <a className="hover:opacity-80 cursor-pointer">Features</a>
          <a className="hover:opacity-80 cursor-pointer">How It Works</a>
          <a className="hover:opacity-80 cursor-pointer">Species</a>
          <a className="hover:opacity-80 cursor-pointer">Contact</a>
          <Link to="/login" className="border px-3 py-1 rounded hover:bg-white hover:text-[#3f8f64] transition">
            Login
          </Link>
        </div>
      </nav>
<section
  className="h-[460px] bg-cover bg-center relative flex items-center justify-center 
             saturate-105 brightness-92 contrast-92"
  style={{ backgroundImage: "url('/hero.png')" }}
>
  {/* deep teal wash */}
  <div className="absolute inset-0 bg-teal-700/48 mix-blend-multiply"></div>

  {/* sea haze */}
  <div className="absolute inset-0 bg-green-500/22 mix-blend-overlay"></div>

  {/* subtle warmth */}
  <div className="absolute inset-0 bg-yellow-100/5 mix-blend-soft-light"></div>

  {/* content */}
  <div className="relative z-10 text-center text-white">
    <h1 className="text-3xl font-semibold mb-3">
      Discover, Learn, and Protect Endangered Species
    </h1>
    <p className="text-sm mb-6 opacity-90">
      AI-powered models to identify and track endangered species worldwide.
    </p>
    <div className="flex justify-center gap-4">
 <Link to="/identify" className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-300 transition text-sm">
  Identify a Species
</Link>

      <Link to="/region" className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-300 transition text-sm">
        Explore Species Database
      </Link>
    </div>
  </div>
</section>





      {/* Features */}
      <section className="py-20 text-center">
        <h2 className="text-xl font-semibold text-[#3f8f64] mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-20">
          {[
            ["Species Identification","Upload images and get AI-based identification."],
            ["Habitat Information","Learn where each species lives."],
            ["Endangerment Status","Check if a species is vulnerable, endangered, or critically endangered."],
            ["Conservation Tips","Know how you can help protect wildlife."]
          ].map(([title,desc]) => (
            <div
              key={title}
              className="bg-[#fff6dd] border border-[#e6dcb8] rounded-xl p-7 text-sm text-left 
                         transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#e7ebfa] px-20 text-left">
        <h2 className="text-lg font-semibold text-[#3f8f64] mb-2">How It Works</h2>
      </section>

    </div>
  )
}

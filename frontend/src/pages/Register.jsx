import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-xl w-[420px]">
        <h1 className="text-2xl font-semibold text-green-700 text-center mb-6">
          Create Account 🌱
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition">
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

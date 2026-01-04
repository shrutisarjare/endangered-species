import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur p-10 rounded-2xl shadow-xl w-[420px]">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Create Account 🌱</h1>

        <input className="w-full p-3 mb-4 border rounded-lg" placeholder="Username" />
        <input className="w-full p-3 mb-4 border rounded-lg" placeholder="Email" />
        <input type="password" className="w-full p-3 mb-4 border rounded-lg" placeholder="Password" />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg">
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  )
}

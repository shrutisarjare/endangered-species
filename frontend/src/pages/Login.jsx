import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-xl w-[420px]">
        <h1 className="text-2xl font-semibold text-green-700 text-center mb-1">
          Welcome Back 🌿
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">Login to continue</p>

        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label className="block text-sm mb-1">Login As</label>
        <select className="w-full p-3 mb-6 border rounded-lg">
          <option>User</option>
          <option>Admin</option>
        </select>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition">
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

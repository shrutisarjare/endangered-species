import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-cover flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur p-10 rounded-2xl shadow-xl w-[420px]">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          Welcome Back 🌿
        </h1>
        <p className="text-center text-gray-500 mb-6">Login to continue</p>

        <label className="block mb-2 font-medium">Username</label>
        <input className="w-full p-3 mb-4 border rounded-lg" placeholder="Enter username" />

        <label className="block mb-2 font-medium">Password</label>
        <input type="password" className="w-full p-3 mb-4 border rounded-lg" placeholder="Enter password" />

        <label className="block mb-2 font-medium">Login As</label>
        <select className="w-full p-3 mb-6 border rounded-lg">
          <option>User</option>
          <option>Admin</option>
        </select>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg">
          Login
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-700 font-semibold">Register</Link>
        </p>
      </div>
    </div>
  )
}

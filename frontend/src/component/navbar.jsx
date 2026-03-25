import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setOpen(false);
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Endangered Species
        </Link>

        <ul className="flex gap-6 items-center">
          <li className="cursor-pointer hover:text-yellow-300">Features</li>
          <li className="cursor-pointer hover:text-yellow-300">How It Works</li>
          <li className="cursor-pointer hover:text-yellow-300">Species</li>
          <li className="cursor-pointer hover:text-yellow-300">Contact</li>

          {!user ? (
            <li>
              <Link
                to="/login"
                className="border px-4 py-1 rounded hover:bg-white hover:text-green-700 transition"
              >
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={() => setOpen(true)}
                className="text-2xl focus:outline-none"
              >
                👤
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* RIGHT SIDE PROFILE PANEL */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl p-6 flex flex-col">
            
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-green-700">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>

            {/* Menu */}
            <ul className="flex flex-col gap-4 text-gray-700">
              <li className="cursor-pointer hover:text-green-700">👤 Profile</li>
              <li className="cursor-pointer hover:text-green-700">✏️ Edit Profile</li>
              <li className="cursor-pointer hover:text-green-700">📜 History</li>
              <li className="cursor-pointer hover:text-green-700">❤️ Favourites</li>
              <li className="cursor-pointer hover:text-green-700">🧠 Quiz</li>
              <li className="cursor-pointer hover:text-green-700">⚙️ Settings</li>
            </ul>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

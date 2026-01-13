import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // Already on home → smooth scroll
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Not on home → go home first, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-green-900 text-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">
        <Link to="/">Endangered Species</Link>
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => handleScroll("features")}
          className="hover:text-green-300"
        >
          Features
        </button>

        <button
          onClick={() => handleScroll("work")}
          className="hover:text-green-300"
        >
          How it works
        </button>

        <button
          onClick={() => handleScroll("species")}
          className="hover:text-green-300"
        >
          Species
        </button>

        <button
          onClick={() => handleScroll("contact")}
          className="hover:text-green-300"
        >
          Contact
        </button>

        <Link to="/login" className="hover:text-green-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

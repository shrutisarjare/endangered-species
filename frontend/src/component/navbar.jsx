const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Endangered Species ID</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-yellow-300">Features</li>
        <li className="cursor-pointer hover:text-yellow-300">How It Works</li>
        <li className="cursor-pointer hover:text-yellow-300">Species</li>
        <li className="cursor-pointer hover:text-yellow-300">Contact</li>
        <li className="border px-4 py-1 rounded hover:bg-white hover:text-green-700">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


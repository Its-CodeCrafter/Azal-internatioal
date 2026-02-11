import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sectors = [
    "Hospitality",
    "Residential",
    "Commercial",
    "Exhibition",
    "Retail",
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="bg-white shadow-sm px-8 py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="font-bold text-xl">
          AZAL International
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-700">

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/projects">Projects</Link>

          {/* Sectors Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-primary"
            >
              Sectors
            </button>

            {isOpen && (
              <div className="absolute mt-3 w-48 bg-white shadow-xl rounded-xl py-2">
                {sectors.map((sector, index) => (
                  <Link
                    key={index}
                    to={`/sectors/${sector.toLowerCase()}`}
                    className="block px-5 py-3 hover:bg-gray-100 transition"
                  >
                    {sector}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/shop"
            className="bg-blue-100 text-primary px-4 py-2 rounded-md"
          >
            Shop
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

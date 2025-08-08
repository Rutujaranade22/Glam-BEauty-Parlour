import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-pink-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          Glam Beauty Parlour
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/bookings" className="text-white hover:text-gray-200">My Bookings</Link>
          {!token ? (
            <>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
              <Link to="/signup" className="text-white hover:text-gray-200">Signup</Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-white text-pink-500 px-3 py-1 rounded hover:bg-gray-200"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-pink-400 p-4 space-y-2 rounded">
          <Link
            to="/"
            className="block text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/bookings"
            className="block text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            My Bookings
          </Link>
          {!token ? (
            <>
              <Link
                to="/login"
                className="block text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="w-full text-left text-white"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

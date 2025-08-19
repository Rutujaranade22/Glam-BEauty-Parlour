import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="relative z-20 flex justify-between items-center px-6 md:px-16 py-4 bg-white/90 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-2xl font-bold">✦</span>
        <h1 className="font-bold text-xl">Glam Beauty</h1>
        <span className="text-sm text-gray-500">Premium Parlour</span>
      </div>

      {/* Center Nav Links */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li>
            <Link
              to="/"
              className="px-2 py-1 rounded-md  hover:text-yellow-600 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="px-2 py-1 rounded-md  hover:text-yellow-600 transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-2 py-1 rounded-md  hover:text-yellow-600 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="px-2 py-1 rounded-md  hover:text-yellow-600 transition"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="px-2 py-1 rounded-md hover:text-yellow-600 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="px-2 py-1 rounded-md  hover:text-yellow-600 transition"
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>

      {/* Right Side Buttons */}
      <div className="flex gap-3">
          <button className="px-3 py-1 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 shadow-lg">
          Call Now
        </button>
        <Link
          to="/bookings"
        className="px-3 py-1 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-yellow-100 shadow-lg">
        
          Book Appointment
        </Link>


          
      </div>
    </header>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-2 text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-orange-600/90"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold">Glam Beauty</h2>
          <p className="mt-2 text-gray-100 text-sm">
            Premium beauty parlour offering professional services to enhance 
            your beauty & style. Book your appointment today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-100">
            <li><Link to="/" className="hover:text-black transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-black transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-black transition">About</Link></li>
            <li><Link to="/gallery" className="hover:text-black transition">Gallery</Link></li>
            <li><Link to="/bookings" className="hover:text-black transition">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-100">📍 Pune, Maharashtra, India</p>
          <p className="text-gray-100">📞 +91 98765 43210</p>
          <p className="text-gray-100">✉️ glambeauty@gmail.com</p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-black transition">🌐</a>
            <a href="#" className="hover:text-black transition">📘</a>
            <a href="#" className="hover:text-black transition">📸</a>
            <a href="#" className="hover:text-black transition">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/30 mt-6 pt-4 text-center text-gray-100 text-sm">
        © {new Date().getFullYear()} Glam Beauty Parlour. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

export default function HeroSection() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bg.jpg')" }} // ✅ Local image from public folder
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 to-orange-600/70"></div>
  
      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center text-center justify-center h-[80vh] px-6 md:px-20 text-white">
        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Glam Beauty <br /> <span className="text-white">Parlour</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg md:text-xl">
          Transform Your Beauty with Premium Services. Experience luxury beauty treatments with our expert stylists and premium products.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 shadow-lg">
            Book Appointment
          </button>
          <button className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-yellow-100 shadow-lg">
            View Services
          </button>
        </div>
      </section>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-3 gap-6 text-center bg-orange/40 py-6 px-10 md:px-32 text-white">
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
          <p className="text-sm">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
          <p className="text-sm">Years Experience</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-yellow-400">20+</h3>
          <p className="text-sm">Premium Services</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-pink-100 text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Welcome to Glam Beauty Parlour
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Discover beauty services tailored for you. Book your appointment with our experts
          and enjoy a luxury experience that makes you glow.
        </p>
        <Link
          to="/services"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          View Services
        </Link>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-10">
          Our Popular Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Facial"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Facial Treatment</h3>
            <p className="text-gray-600 mb-4">
              Rejuvenate your skin with our professional facial care services.
            </p>
            <Link to="/services" className="text-pink-500 font-medium hover:underline">
              Book Now →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Hair Styling"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Hair Styling</h3>
            <p className="text-gray-600 mb-4">
              Get the perfect look for any occasion with our expert stylists.
            </p>
            <Link to="/services" className="text-pink-500 font-medium hover:underline">
              Book Now →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Bridal Makeup"
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Bridal Makeup</h3>
            <p className="text-gray-600 mb-4">
              Make your special day even more beautiful with our bridal package.
            </p>
            <Link to="/services" className="text-pink-500 font-medium hover:underline">
              Book Now →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-50 text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Ready to Pamper Yourself?
        </h2>
        <Link
          to="/services"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium shadow"
        >
          Book an Appointment
        </Link>
      </section>
    </div>
  );
};

export default Home;

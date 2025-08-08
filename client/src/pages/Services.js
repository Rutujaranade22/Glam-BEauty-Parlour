import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/services") // ✅ change if your backend port is different
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500">
        Loading services...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-10">
        Our Services
      </h1>

      {services.length === 0 ? (
        <p className="text-center text-gray-600">No services available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={service.image || "https://via.placeholder.com/300x200"}
                alt={service.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-pink-600 font-bold mb-4">
                ₹{service.price}
              </p>
              <Link
                to={`/book/${service._id}`}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium shadow"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;

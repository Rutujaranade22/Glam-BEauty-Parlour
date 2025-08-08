import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookService = () => {
  const { id } = useParams(); // service ID from URL
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Fetch single service details
    fetch(`http://localhost:5000/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data.service);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service:", err);
        setLoading(false);
      });
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    const bookingData = { service: id, date, time };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Booking successful!");
        navigate("/my-bookings");
      } else {
        alert(data.message || "Booking failed");
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Loading...</div>;
  }

  if (!service) {
    return <div className="text-center py-12 text-gray-500">Service not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-pink-500 mb-6">Book Service</h1>

      <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-pink-600 font-bold mb-4">₹{service.price}</p>

        <form onSubmit={handleBooking}>
          <label className="block mb-2 font-medium">Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          />

          <label className="block mb-2 font-medium">Select Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          />

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium shadow w-full"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookService;

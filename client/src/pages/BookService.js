import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5001/api/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data.data))
      .catch((err) => console.error("Error fetching service:", err));
  }, [id]);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const res = await fetch("http://localhost:5001/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ serviceId: id, date, time })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Booking confirmed!");
      navigate("/bookings");
    } else {
      alert(data.message || "Booking failed");
    }
  };

  if (!service) {
    return <p className="text-center py-12">Loading service...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">{service.name}</h1>
      <p className="mb-4">{service.description}</p>
      <p className="font-bold mb-4">₹{service.price}</p>

      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded w-full" />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Select Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="border p-2 rounded w-full" />
      </div>

      <button onClick={handleBooking} className="bg-pink-500 text-white px-4 py-2 rounded">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookService;

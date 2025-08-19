import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:5001/api/bookings/my", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => setBookings(data.bookings || []));
  }, []);

  if (bookings.length === 0) {
    return <p className="text-center py-12">No bookings found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">My Bookings</h1>
      {bookings.map((b) => (
        <div key={b._id} className="p-4 border rounded mb-4">
          <h2 className="font-bold">{b.service?.name}</h2>
          <p>Date: {b.date}</p>
          <p>Time: {b.time}</p>
          <p>Status: {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;

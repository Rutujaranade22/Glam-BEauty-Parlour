import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5001/api/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        setBookings(data.bookings);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading your bookings...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-pink-500 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You have no bookings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {booking.service?.name || "Service Name"}
              </h2>
              <p className="text-gray-600">
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Time: {booking.time}</p>
              <p
                className={`mt-2 font-medium ${
                  booking.status === "cancelled"
                    ? "text-red-500"
                    : booking.status === "confirmed"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                Status: {booking.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;

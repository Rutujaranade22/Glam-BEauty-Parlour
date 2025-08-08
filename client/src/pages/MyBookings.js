import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch user's bookings
  const fetchBookings = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setBookings(data.bookings || []);
      } else {
        alert(data.message || "Failed to fetch bookings");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Cancel booking
  const cancelBooking = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/bookings/${id}/cancel`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        alert("Booking canceled successfully");
        setBookings(bookings.filter((b) => b._id !== id));
      } else {
        alert(data.message || "Failed to cancel booking");
      }
    } catch (error) {
      console.error("Cancel booking error:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-pink-500 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold">{booking.service?.name}</h2>
              <p className="text-gray-600">
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Time: {booking.time}</p>
              <p
                className={`font-bold mt-2 ${
                  booking.status === "canceled"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                Status: {booking.status}
              </p>
              {booking.status !== "canceled" && (
                <button
                  onClick={() => cancelBooking(booking._id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
                >
                  Cancel Booking
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;

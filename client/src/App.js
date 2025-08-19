import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navrbar";   // ✅ Fixed spelling
 import Footer from "./components/footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;

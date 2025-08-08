import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navrbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";
 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

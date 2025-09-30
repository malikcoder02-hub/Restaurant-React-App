import { useState } from "react";
import React from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    specialRequest: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s-]{1,50}$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters, spaces, and hyphens (max 50 characters).";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Date is required.";
    }

    if (!formData.time.trim()) {
      newErrors.time = "Time is required.";
    }

    if (formData.specialRequest && !/^[A-Za-z\s-]{0,250}$/.test(formData.specialRequest)) {
      newErrors.specialRequest = "Special Request can only contain letters, spaces, and hyphens (max 250 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Reservation submitted successfully!");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="glass-effect rounded-3xl p-8 space-y-6 border border-white/20"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Book Your Table</h2>
          <p className="text-gray-300">Reserve your perfect dining experience</p>
        </div>

        {/* Name */}
        <div className="space-y-2">
          <label className="block text-white font-semibold">Full Name *</label>
          <input
            type="text"
            value={formData.name}
            placeholder="Enter your full name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
          />
          {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-white font-semibold">Email Address *</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-white font-semibold">Date *</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-4 glass-effect rounded-xl text-white border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
            />
            {errors.date && <p className="text-red-400 text-sm">{errors.date}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-white font-semibold">Time *</label>
            <input
              type="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full p-4 glass-effect rounded-xl text-white border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300"
            />
            {errors.time && <p className="text-red-400 text-sm">{errors.time}</p>}
          </div>
        </div>

        {/* Special Request */}
        <div className="space-y-2">
          <label className="block text-white font-semibold">Special Requests</label>
          <textarea
            value={formData.specialRequest}
            placeholder="Any special requests or dietary requirements?"
            onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
            className="w-full p-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-white/20 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
            rows="3"
          />
          {errors.specialRequest && (
            <p className="text-red-400 text-sm">{errors.specialRequest}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
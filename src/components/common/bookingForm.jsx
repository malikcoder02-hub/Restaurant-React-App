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

    // Name: required, max length 50, only alphabets, spaces, hyphens
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s-]{1,50}$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters, spaces, and hyphens (max 50 characters).";
    }

    // Email: required, standard format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Date: required, format DD/MM/YYYY
    if (!formData.date.trim()) {
      newErrors.date = "Date is required.";
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.date)) {
      newErrors.date = "Date must be in DD/MM/YYYY format.";
    }

    // Time: required, format HH:MM
    if (!formData.time.trim()) {
      newErrors.time = "Time is required.";
    } else if (!/^\d{2}:\d{2}$/.test(formData.time)) {
      newErrors.time = "Time must be in HH:MM format.";
    }

    // Special Request: optional, max length 250, only alphabets, spaces, hyphens
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
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center bg-[rgba(0,0,0,80%)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 text-white rounded-lg shadow-lg space-y-2"                  
      >
        <h2 className="text-2xl font-bold text-center">Make Your Reservation</h2>

        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name*</label>
          <input
            type="text"
            value={formData.name}
            placeholder="Enter your name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border border-white rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email*</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border border-white rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Date and time */}
        <div className="grid grid-cols-[2fr_1fr] gap-4">

        <div>
          <label className="block font-semibold mb-1">Date (DD/MM/YYYY)*</label>
          <input
            type="date"
            placeholder="DD/MM/YYYY"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full p-2 border border-white rounded"
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block font-semibold mb-1">Time (HH:MM)*</label>
          <input
          id="time"
            type="time"
            placeholder="HH:MM"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="w-full p-2 border border-white rounded text-white"
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
        </div>
        </div>
        {/* Special Request */}
        <div>
          <label className="block font-semibold mb-1">Special Request</label>
          <textarea
            value={formData.specialRequest}
            placeholder="Any special requests?"
            onChange={(e) =>
              setFormData({ ...formData, specialRequest: e.target.value })
            }
            className="w-full p-2 border border-white rounded"
            rows="3"
          />
          {errors.specialRequest && (
            <p className="text-red-500 text-sm">{errors.specialRequest}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

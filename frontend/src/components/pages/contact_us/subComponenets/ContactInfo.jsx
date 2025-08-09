import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  const contacts = [
    { title: "Booking", email: "booking@example.com" },
    { title: "General", email: "general@example.com" },
    { title: "Technical", email: "tech@example.com" },
  ];

  return (
    <section className="text-center py-10 bg-white">

      <h2 className="text-3xl font-bold mb-8">Contact For Any Query</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <FaEnvelope className="text-black text-2xl" />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500">{item.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

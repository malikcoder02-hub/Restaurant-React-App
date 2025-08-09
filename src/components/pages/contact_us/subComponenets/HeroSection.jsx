import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-sm">
          HOME <span className="text-orange-500">/ CONTACT</span>
        </p>
      </div>
    </section>
  );
}

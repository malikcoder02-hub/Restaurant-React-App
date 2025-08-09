import React from "react";

export default function ContactForm() {
  return (
    <form className="bg-white shadow-md p-6 space-y-4 max-w-md mx-auto border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 p-2 w-full text-sm focus:outline-none focus:border-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 p-2 w-full text-sm focus:outline-none focus:border-black"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="border border-gray-300 p-2 w-full text-sm focus:outline-none focus:border-black"
      />
      <textarea
        placeholder="Message"
        className="border border-gray-300 p-2 w-full h-28 text-sm focus:outline-none focus:border-black"
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 w-full transition"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}

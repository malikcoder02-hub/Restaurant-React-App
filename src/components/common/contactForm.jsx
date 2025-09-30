import React from "react";

export default function ContactForm() {
  return (
    <div className="glass-effect rounded-3xl p-8 border border-white/20 hover-lift">
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">We'd love to hear from you. Send us a message!</p>
      </div>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 glass-effect rounded-xl text-gray-800 placeholder-gray-500 border border-white/30 focus:border-blue-400 focus:outline-none transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 glass-effect rounded-xl text-gray-800 placeholder-gray-500 border border-white/30 focus:border-blue-400 focus:outline-none transition-all duration-300"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-4 glass-effect rounded-xl text-gray-800 placeholder-gray-500 border border-white/30 focus:border-blue-400 focus:outline-none transition-all duration-300"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-4 h-32 glass-effect rounded-xl text-gray-800 placeholder-gray-500 border border-white/30 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
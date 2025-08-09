import React from 'react';
import { chefs } from '../../../../services/master_chefs_list';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MasterChefs() {
  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">Team Members</p>
        <h2 className="text-4xl font-extrabold text-gray-900">Our Master Chefs</h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg text-center p-6 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Designation */}
            <h3 className="text-lg font-bold text-gray-900">{chef.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{chef.designation}</p>

            {/* Socials */}
            <div className="flex space-x-3 mt-auto">
              <a
                href={chef.socials.facebook}
                className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href={chef.socials.twitter}
                className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href={chef.socials.instagram}
                className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

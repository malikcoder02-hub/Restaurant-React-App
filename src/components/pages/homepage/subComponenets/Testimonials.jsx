import React from "react";

const testimonials = [
  {
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession",
    image: "https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
  },
  {
    text: "Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu-k_hZT0lFOLgdNDAFXCMcRJjhp8vBZqsw&s",
    featured: true, // middle highlighted card
  },
  {
    text: "Dolor et eos labore, stet justo sed est sed.Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmSHoeAYIliZBAHbG6jXx4bJhaZfhg7lPntea4OOOW9hNSDoBGP401gJ4v8jN4STaeoA&usqp=CAU",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-gray-500 italic">Testimonial</p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our Clients Say!!!
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              t.featured
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            {/* Quote Icon */}
            <div className="text-4xl font-bold mb-4">“</div>

            {/* Text */}
            <p className="mb-6">{t.text}</p>

            {/* Profile */}
            <div className="flex items-center space-x-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-sm opacity-70">{t.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

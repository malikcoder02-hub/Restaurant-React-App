import React from 'react'
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const foodMenuLinks = [
  {
    type: "breakfast",
    image: "/images/tea_cup.svg",
    title: "Breakfast",
    description: "Morning",
  },
  { 
    type: "lunch",
    image: "/images/lunch_icon.svg",
    title: "Lunch",
    description: "Afternoon",
  },
  {
    type: "dinner",
    image: "/images/dinner_icon.svg",
    title: "Dinner",
    description: "Evening",
  }
];

const MenuSection = () => {
  const [type, setType] = React.useState("breakfast");

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
      <div className="absolute inset-0 motion-blur-bg opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
            <span className="text-blue-500 text-lg font-bold">Our Menu</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Culinary <span className="text-gradient">Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and served with pride
          </p>
        </div>

        {/* Menu Navigation */}
        <div className="flex justify-center mb-16">
          <div className="glass-effect rounded-2xl p-2 inline-flex gap-2">
            {foodMenuLinks.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  type === item.type 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-white/50'
                }`}
                onClick={() => handleTypeChange(item.type)}
              >
                <img src={item.image} alt={item.title} className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm opacity-75">{item.description}</div>
                  <div className="font-bold">{item.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-effect rounded-3xl p-8">
            {type === "breakfast" && <Breakfast />}
            {type === "lunch" && <Lunch />}
            {type === "dinner" && <Dinner />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
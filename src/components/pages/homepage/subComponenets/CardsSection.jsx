import React from 'react'
import Cards from '../../../common/cards';

const hotelHighlights = [
  {
    title: "Gourmet Dining",
    description: "Indulge in chef-crafted dishes made from fresh, local ingredients served with elegance.",
    icon: "🍽️",
  },
  {
    title: "Luxurious Ambiance",
    description: "Relax in our stylish, sophisticated atmosphere designed for ultimate comfort and elegance.",
    icon: "✨",
  },
  {
    title: "Premium Views",
    description: "Enjoy stunning cityscapes and sunsets from our beautifully designed dining spaces.",
    icon: "🌇",
  },
  {
    title: "Exceptional Service",
    description: "Experience hospitality at its finest with our attentive and professional staff.",
    icon: "🤝",
  },
];

const CardsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
      <div className="absolute inset-0 motion-blur-bg opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Lumière</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our restaurant the perfect destination for unforgettable dining experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotelHighlights.map((highlight, index) => (
            <Cards
              key={index}
              index={index}
              icon={highlight.icon}
              title={highlight.title}
              paragraph={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
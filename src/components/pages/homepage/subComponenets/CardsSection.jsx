import React from 'react'
import Cards from '../../../common/cards';

const hotelHighlights = [
  {
    title: "Authentic Hungarian",
    description: "Traditional recipes from Hungary, prepared fresh daily with authentic spices and ingredients.",
    icon: "🍽️",
  },
  {
    title: "Fast & Fresh",
    description: "Quick service without compromising quality. Fresh ingredients prepared to order every time.",
    icon: "⚡",
  },
  {
    title: "Family Recipes",
    description: "Time-honored family recipes passed down through generations of Hungarian home cooks.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Affordable Prices",
    description: "Enjoy authentic Hungarian cuisine at prices that won't break the bank. Quality meets value.",
    icon: "💰",
  },
];

const CardsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-yellow-50"></div>
      <div className="absolute inset-0 warm-pattern opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-900 mb-4">
            Why Choose <span className="text-gradient">Páprika Ház</span>
          </h2>
          <p className="text-xl text-orange-700 max-w-2xl mx-auto">
            Discover what makes us the perfect destination for authentic Hungarian fast food experiences
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
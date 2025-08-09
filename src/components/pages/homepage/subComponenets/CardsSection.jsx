import React from 'react'

import Cards from '../../../common/cards';

// hotels uniqnesses arrays
const hotelHighlights = [
  {
    title: "Gourmet Dining",
    description: "Indulge in chef-crafted dishes made from fresh, local ingredients served with elegance.",
    icon: "🍽️",
  },
  {
    title: "Luxurious Rooms",
    description: "Relax in stylish, spacious rooms designed for ultimate comfort and modern convenience.",
    icon: "🛏️",
  },
  {
    title: "Rooftop Views",
    description: "Enjoy stunning cityscapes and sunsets from our serene rooftop lounge.",
    icon: "🌇",
  },
  {
    title: "Exceptional Service",
    description: "Experience hospitality at its finest with our attentive and friendly staff.",
    icon: "🤝",
  },
];



const CardsSection = () => {

    
  return (
    <section className="flex flex-col items-center justify-center w-full pb-20 gap-20 bg-gray-100  self-center">
    
      <div className="grid grid-cols-4 gap-5 self-center w-[90%]">
        {hotelHighlights.map((highlight, index) => (
          <Cards
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            paragraph={highlight.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CardsSection;

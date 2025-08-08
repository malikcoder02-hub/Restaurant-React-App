import React from 'react'

export const FoodItemsCard = ({ image, title, description, price }) => {
  return (
    <div class="flex items-center gap-4 border-b border-gray-200 p-4 hover:border-b-2 hover:border-black transition-all duration-300 max-w-md">
      <img
        src={image}
        class="w-16 h-16 object-cover"
      />

      <div>
        <h3 class="font-bold text-lg text-gray-900">{title}</h3>
        <span class="text-orange-500 font-semibold text-sm">${price}</span>
        <br />
        <p class="text-gray-500 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};



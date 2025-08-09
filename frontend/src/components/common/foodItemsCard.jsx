import React from 'react'

export const FoodItemsCard = ({ image, title, description, price }) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-200 p-4 hover:scale-[1.06] hover:drop-shadow-2xl hover:bg-gray-100  transition-all duration-300">
      <img
        src={image}
        className="w-16 h-16 object-cover"
      />

      <div className='flex flex-col w-[300px]'>
        <div className='flex flex-row justify-between'>
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <span className="text-orange-500 font-semibold text-lg">${price}</span>
        </div>
        <p className="text-gray-500 text-sm">
          {description}
        </p>
        
      </div>
    </div>
  );
};



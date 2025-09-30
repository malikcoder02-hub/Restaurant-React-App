import React from 'react'

export const FoodItemsCard = ({ image, title, description, price }) => {
  return (
    <div className="group glass-effect rounded-2xl p-6 hover-lift border border-white/20 transition-all duration-500">
      <div className="flex items-center gap-4">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            className="w-20 h-20 object-cover group-hover:scale-110 transition-all duration-500"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        </div>

        {/* Content */}
        <div className='flex flex-col flex-1 space-y-2'>
          <div className='flex justify-between items-start'>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-gradient transition-all duration-300">
              {title}
            </h3>
            <div className="glass-dark px-3 py-1 rounded-full">
              <span className="text-white font-semibold">${price}</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Hover effect line */}
      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-4 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};
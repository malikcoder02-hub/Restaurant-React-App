import React from 'react'

const Cards = ({ index, icon, title, paragraph }) => {
  return (
    <div className="group card-hover glass-effect rounded-2xl p-8 text-center space-y-6 border border-white/20">
      {/* Icon */}
      <div className="relative">
        <div className="w-20 h-20 mx-auto glass-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <span className="text-4xl">{icon}</span>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {paragraph}
        </p>
      </div>

      {/* Hover indicator */}
      <div className="w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto group-hover:w-16 transition-all duration-300 rounded-full"></div>
    </div>
  );
};

export default Cards
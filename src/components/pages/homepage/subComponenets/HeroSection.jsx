import React from 'react'
const Image = "/images/chicken.png";

import { PrimaryButton, SecondaryButton } from '../../../common/buttons';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>
      <div className="absolute inset-0 motion-blur-bg"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center space-y-8 lg:w-1/2">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to
              <span className="block text-gradient">Lumière</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-lg">
              Experience culinary excellence in an atmosphere of refined elegance, 
              where every dish tells a story of passion and artistry.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <PrimaryButton className="w-full sm:w-auto">
              Book a Table
            </PrimaryButton>
            <SecondaryButton className="w-full sm:w-auto">
              Explore Menu
            </SecondaryButton>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-gray-300 text-sm">Master Chefs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-150"></div>
            
            {/* Main image */}
            <div className="relative z-10 glass-effect rounded-full p-8">
              <img
                src={Image}
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain transform hover:rotate-12 hover:scale-110 transition-all duration-700 ease-out"
                alt="Signature Dish"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 glass-effect rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-effect rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xl">🍽️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
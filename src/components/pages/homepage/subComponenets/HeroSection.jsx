import React from 'react'
const Image = "/images/chicken.png";

import { PrimaryButton, SecondaryButton } from '../../../common/buttons';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Warm Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-600"></div>
      <div className="absolute inset-0 warm-pattern"></div>
      <div className="absolute inset-0 motion-blur-bg"></div>
      
      {/* Food particles floating */}
      <div className="absolute top-20 left-10 w-8 h-8 text-2xl animate-bounce opacity-70">🍟</div>
      <div className="absolute top-32 right-20 w-8 h-8 text-2xl bounce-slow opacity-60">🍔</div>
      <div className="absolute bottom-40 left-20 w-8 h-8 text-2xl animate-pulse opacity-50">🌭</div>
      <div className="absolute bottom-20 right-10 w-8 h-8 text-2xl bounce-slow opacity-70">🍕</div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center space-y-8 lg:w-1/2">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center border border-orange-300/30">
                <span className="text-2xl">🇭🇺</span>
              </div>
              <span className="text-orange-200 font-semibold text-lg">Authentic Hungarian Fast Food</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Taste the
              <span className="block text-gradient">Páprika Ház</span>
              <span className="block text-3xl lg:text-4xl text-orange-200 font-normal">Experience</span>
            </h1>
            <p className="text-xl lg:text-2xl text-orange-100 leading-relaxed max-w-lg">
              Savor authentic Hungarian flavors with a modern twist. From hearty goulash to crispy lángos, 
              every bite tells a story of tradition and taste.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full">
            <PrimaryButton className="w-full sm:w-auto">
              Order Now
            </PrimaryButton>
            <SecondaryButton className="w-full sm:w-auto">
              View Menu
            </SecondaryButton>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-8 pt-8">
            <div className="text-center glass-effect rounded-xl p-4 border border-orange-300/20">
              <div className="text-3xl font-bold text-white">5★</div>
              <div className="text-orange-200 text-sm">Customer Rating</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-4 border border-orange-300/20">
              <div className="text-3xl font-bold text-white">15min</div>
              <div className="text-orange-200 text-sm">Fast Delivery</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-4 border border-orange-300/20">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-orange-200 text-sm">Menu Items</div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative">
            {/* Main food showcase */}
            <div className="relative z-10 glass-effect rounded-full p-8 border border-orange-300/30 food-glow">
              <img
                src={Image}
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain transform hover:rotate-12 hover:scale-110 transition-all duration-700 ease-out"
                alt="Hungarian Specialty"
              />
            </div>

            {/* Floating food items */}
            <div className="absolute -top-6 -right-6 w-24 h-24 glass-effect rounded-full flex items-center justify-center animate-bounce border border-orange-300/30">
              <span className="text-4xl">🥘</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-effect rounded-full flex items-center justify-center bounce-slow border border-orange-300/30">
              <span className="text-3xl">🌶️</span>
            </div>
            <div className="absolute top-1/2 -left-12 w-16 h-16 glass-effect rounded-full flex items-center justify-center animate-pulse border border-orange-300/30">
              <span className="text-2xl">🧄</span>
            </div>

            {/* Special offer badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 glass-effect rounded-full px-6 py-2 border border-orange-300/30">
              <span className="text-white font-bold text-sm">🔥 Today's Special!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
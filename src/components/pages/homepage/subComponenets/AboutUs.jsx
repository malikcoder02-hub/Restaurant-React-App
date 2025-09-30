import React from 'react'
import { SecondaryButton } from '../../../common/buttons';

const AboutUs = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-800 via-red-700 to-yellow-700"></div>
      <div className="absolute inset-0 warm-pattern opacity-40"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Images Section */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative">
              <div className="glass-effect rounded-3xl p-8 hover-lift border border-orange-300/30">
                <img 
                  src="/images/highlights.png" 
                  alt="About Us" 
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass-effect rounded-full flex items-center justify-center animate-pulse border border-orange-300/30">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-effect rounded-full flex items-center justify-center animate-bounce border border-orange-300/30">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-orange-400 text-lg font-bold">About Us</span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Welcome to 
                <span className="block text-gradient">🍴 Páprika Ház</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-200">
              <p className="text-xl leading-relaxed">
                At Páprika Ház, we bring authentic Hungarian flavors to the fast-food world. Every dish 
                is prepared with traditional recipes passed down through generations, served fresh and fast.
              </p>
              <p className="text-lg leading-relaxed">
                From hearty goulash to crispy lángos, we serve the soul of Hungarian cuisine with 
                modern convenience, bringing you the taste of Budapest in every bite.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift border border-orange-300/20">
                <h3 className="text-4xl font-extrabold text-gradient mb-2">15</h3>
                <p className="text-orange-200">
                  Years of
                  <span className="block font-bold text-white text-lg">EXCELLENCE</span>
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift border border-orange-300/20">
                <h3 className="text-4xl font-extrabold text-gradient mb-2">25</h3>
                <p className="text-orange-200">
                  Hungarian
                  <span className="block font-bold text-white text-lg">SPECIALTIES</span>
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <SecondaryButton>Discover Our Story</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs
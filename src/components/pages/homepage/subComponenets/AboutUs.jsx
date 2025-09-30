import React from 'react'
import { SecondaryButton } from '../../../common/buttons';

const AboutUs = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>
      <div className="absolute inset-0 motion-blur-bg opacity-40"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Images Section */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative">
              <div className="glass-effect rounded-3xl p-8 hover-lift">
                <img 
                  src="/images/highlights.png" 
                  alt="About Us" 
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass-effect rounded-full flex items-center justify-center animate-pulse">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-effect rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-lg font-bold">About Us</span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Welcome to 
                <span className="block text-gradient">🍴 Lumière</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-200">
              <p className="text-xl leading-relaxed">
                At Lumière, we believe dining is an art form. Every dish is crafted with passion, 
                precision, and the finest ingredients to create an unforgettable culinary journey.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment to excellence extends beyond the kitchen to every aspect of your 
                dining experience, from our elegant ambiance to our exceptional service.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift">
                <h3 className="text-4xl font-extrabold text-gradient mb-2">15</h3>
                <p className="text-gray-300">
                  Years of
                  <span className="block font-bold text-white text-lg">EXCELLENCE</span>
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center hover-lift">
                <h3 className="text-4xl font-extrabold text-gradient mb-2">50</h3>
                <p className="text-gray-300">
                  Master
                  <span className="block font-bold text-white text-lg">CHEFS</span>
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
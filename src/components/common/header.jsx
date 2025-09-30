import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../common/buttons';
import BookingModel from './bookingModel';

const Header = () => {
  const [model, setModel] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleModel() {
    setModel(prev => !prev);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'glass-effect shadow-2xl py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex flex-row gap-3 text-2xl font-bold text-white items-center">
          <div className="w-10 h-10 rounded-full glass-effect flex items-center justify-center">
            <img className="h-6 w-6" src="./images/dinner_icon.svg" alt="" />
          </div>
          <span className="text-gradient">Lumière</span>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-white hover:text-blue-300 font-semibold transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-300 font-semibold transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          <PrimaryButton onClick={handleModel}>
            Book a Table
          </PrimaryButton>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white p-2 glass-effect rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <BookingModel isModelOpen={model} onClose={() => setModel(false)} />
    </header>
  );
};

export default Header;
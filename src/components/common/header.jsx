import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../common/buttons';
import BookingModel from './bookingModel';

const Header = () => {
  const [model, setModel] = useState(false);

  function handleModel() {
    console.log("Before toggle:", model);
    setModel(prev => !prev); // Toggle modal
    console.log("After toggle:", !model);
  }

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-2 text-xl font-bold text-gray-800">
          <span>
            <img className="h-7 w-7" src="./images/dinner_icon.svg" alt="" />
          </span>
          Restoran
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-800 hover:text-red-600 font-bold transition"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-red-600 font-bold transition"
          >
            Contact
          </Link>

          <PrimaryButton onClick={handleModel}>
            Book Appointment
          </PrimaryButton>
        </nav>
      </div>

      {/* Conditionally render modal */}
      <BookingModel isModelOpen={model} onClose={() => setModel(false)} />

    </header>
  );
};

export default Header;

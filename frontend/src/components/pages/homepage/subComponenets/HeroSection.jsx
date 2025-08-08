import React from 'react'
const Image = "/images/biryani.png";
import { PrimaryButton, SecondaryButton } from '../../../common/buttons';

const HeroSection = () => {
  return (
    <section className="flex flex-row item-center justify-center items-center h-screen bg-gray-100">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-center pl-5 gap-5">
        <h1 className="text-6xl font-bold text-start text-weight-700 ">
          Welcome to Our <br />Restaurant
        </h1>
        <p className='text-xl'>Experience delicious food, warm ambiance, <br />and unforgettable moments—welcome to our restaurant.</p>
        {/* Buttons */}
        <div className="flex flex-row items-center gap-5 w-full">
          <PrimaryButton>Book A Table</PrimaryButton>
          <SecondaryButton>View Menu</SecondaryButton>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex items-center justify-center w-120 h-120'>
        <img src={Image} alt="Restaurant" />
      </div>
    </section>
  );
}

export default HeroSection

import React from 'react'
import HeroSection from './subComponenets/HeroSection';
import CardsSection from './subComponenets/CardsSection';
import AboutUs from './subComponenets/AboutUs';
import MenuSection from "./subComponenets/MenuSection";
import Booking from './subComponenets/Booking';
import MasterChefs from './subComponenets/MasterChecfs';
import Testimonials from './subComponenets/Testimonials';

const Homepage = () => {
  return (
    <>
        <HeroSection />
        <CardsSection />
        <AboutUs />
        <MenuSection />
        <Booking />
        <MasterChefs />
        <Testimonials />
    </>
  )
}

export default Homepage

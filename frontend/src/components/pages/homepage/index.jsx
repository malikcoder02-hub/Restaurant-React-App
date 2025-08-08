import React from 'react'
import HeroSection from './subComponenets/HeroSection';
import CardsSection from './subComponenets/CardsSection';
import AboutUs from './subComponenets/AboutUs';
import MenuSection from "./subComponenets/MenuSection";


const Homepage = () => {
  return (
    <>
        <HeroSection />
        <CardsSection />
        <AboutUs />
        <MenuSection />
    </>
  )
}

export default Homepage

import React from "react";
import HeroSection from "./subComponenets/HeroSection";
import ContactInfo from "./subComponenets/ContactInfo";
import MapSection from "./subComponenets/MapSection";
import ContactForm from "../../common/contactForm";
import Footer from "../../common/footer";

export default function ContactUs() {
  return (
    <div>
      <HeroSection />
      <ContactInfo />
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="absolute inset-0 motion-blur-bg opacity-20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <MapSection />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
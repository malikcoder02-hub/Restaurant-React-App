import React from "react";
import HeroSection from "./subComponenets/HeroSection";
import ContactInfo from "./subComponenets/ContactInfo";
import MapSection from "./subComponenets/MapSection";
import ContactForm from "../../common/contactForm";

export default function ContactUs() {
  return (
    <div>
      <HeroSection />
      <ContactInfo />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 py-10 px-4">
        <MapSection />
        <ContactForm />
      </div>
    </div>
  );
}

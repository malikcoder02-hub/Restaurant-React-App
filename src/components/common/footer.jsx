import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 motion-blur-bg opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Restaurant Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full glass-effect flex items-center justify-center">
                  <img className="h-7 w-7" src="./images/dinner_icon.svg" alt="" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Lumière</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Experience culinary excellence in an atmosphere of refined elegance. 
                Where every meal becomes a memorable journey of flavors and sophistication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <FaFacebookF className="text-blue-400 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <FaInstagram className="text-pink-400 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                  <FaTwitter className="text-blue-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Menu', 'Reservations', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 glass-effect rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  </div>
                  <span>123 Gourmet Street, Culinary District</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 glass-effect rounded-full flex items-center justify-center">
                    <FaPhone className="text-green-400 text-sm" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-8 h-8 glass-effect rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-purple-400 text-sm" />
                  </div>
                  <span>info@lumiere-restaurant.com</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Opening Hours</h4>
              <div className="space-y-3">
                <div className="glass-effect rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-semibold">10:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Lumière Restaurant. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
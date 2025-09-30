import React from 'react'
import ReservationForm from '../../../common/bookingForm'

const Booking = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://img.freepik.com/premium-photo/business-lunch-man-woman-sitting-table-restaurant-eating-healthy-fresh-salad-talking_386167-3029.jpg"
            alt="Restaurant dining"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="relative z-10 h-full flex items-center justify-start p-12">
            <div className="text-white space-y-6 max-w-md">
              <h3 className="text-4xl font-bold">
                Reserve Your
                <span className="block text-gradient">Perfect Table</span>
              </h3>
              <p className="text-xl text-gray-200">
                Experience fine dining in an atmosphere of elegance and sophistication
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Call us directly</div>
                  <div className="text-lg font-semibold">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 motion-blur-bg opacity-30"></div>
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
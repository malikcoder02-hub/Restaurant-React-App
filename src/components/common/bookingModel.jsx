import React from 'react';
import ReservationForm from './bookingForm';

const BookingModel = ({ isModelOpen, onClose }) => {
  if (!isModelOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,50%)] z-50"
      onClick={onClose} // Clicking outside closes
    >
      <div
        // className="bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside form
      >
    
        <ReservationForm />
      </div>
    </div>
  );
};

export default BookingModel;

import React from 'react'
import ReservationForm from '../../../common/bookingForm'
const Booking = () => {
  return (
    <div className="grid grid-cols-2">
      <img
        className="object-cover w-full h-[500px]"
        src="https://img.freepik.com/premium-photo/business-lunch-man-woman-sitting-table-restaurant-eating-healthy-fresh-salad-talking_386167-3029.jpg"
        alt=""
      />
      <div className='bg-black'>
       
        <ReservationForm />
      </div>
    </div>
  );
}

export default Booking;

import React, { useContext, useEffect } from 'react';
import '../Css/LastBookingDetails.css';
import BsContext from '../Context/BsContext';

const LastBookingDetail = () => {
  const context = useContext(BsContext);
  const { handleGetBooking, lastBookingDetails } = context;

  useEffect(() => {
    handleGetBooking();
  }, []);

  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking:</h2>
      {lastBookingDetails ? (
        <>
          <div className='seats_container'>
            <p className='seats_header'>Seats:</p>
            <ul className='seats'>
              {lastBookingDetails.seats ? (
                Object.keys(lastBookingDetails.seats).map((seat, index) => (
                  <li className='seat_value' key={index}>
                    {seat}: {lastBookingDetails.seats[seat] || 0}
                  </li>
                ))
              ) : (
                <li>No seats booked</li>
              )}
            </ul>
          </div>
          <p className='slot' style={{ textAlign: 'left' }}>
            Slot: {lastBookingDetails.slot || "00:00AM"}
          </p>
          <p className='movie'>
            Movie: <span>{lastBookingDetails.movie || "No movie selected"}</span>
          </p>
        </>
      ) : (
        <p>No recent booking details available.</p>
      )}
    </div>
  );
};

export default LastBookingDetail;

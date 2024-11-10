import React, { useContext } from 'react';
import SelectMovies from '../Components/SelectMovies';
import LastBookingDetail from '../Components/LastBookingDetail';
import TimeSchedule from '../Components/TimeSchedule';
import SelectSeats from '../Components/SelectSeats';
import '../Css/Home.css';
import BsContext from '../Context/BsContext';

const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage
  } = context;

  // Check if at least one seat is selected
  const isSeatSelected = () => {
    return Object.values(noOfSeat).some(seat => seat); // checks if any seat has a value
  };

  // Enhanced handleBookNow function
  const handleBookNow = async () => {
    // Validate movie selection
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage('Please select a movie');
      return;
    }

    // Validate time slot selection
    if (!time) {
      setErrorPopup(true);
      setErrorMessage('Please select a time slot');
      return;
    }

    // Validate seat selection
    if (!isSeatSelected()) {
      setErrorPopup(true);
      setErrorMessage('Please select at least one seat');
      return;
    }

    // If all validations pass, proceed with booking
    try {
      await handlePostBooking();  // Call the handlePostBooking function to save the data

      // Reset the error popup and message after successful booking
      setErrorPopup(false);
      setErrorMessage('');

      // Optionally, display a success message, or show the last booking details
      // You can also clear the selected seats, movie, and time if needed
      alert('Booking successful!');
    } catch (error) {
      setErrorPopup(true);
      setErrorMessage('Booking failed, please try again');
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="select_movie_component">
          <SelectMovies />
        </div>
        <div className="last_booking_details_container">
          <LastBookingDetail />
        </div>
      </div>
      <div className="time_seats_container">
        <TimeSchedule />
        <SelectSeats />
        <button className="BN-btn" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default Home;

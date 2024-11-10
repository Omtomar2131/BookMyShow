import React from 'react';
import '../Css/SeatInput.css';

const SeatInput = ({ text, noOfSeats, changeNoOfSeats }) => {
  const change_seats = (e) => {
    changeNoOfSeats({ ...noOfSeats, [e.target.name]: Number(e.target.value) });

    window.localStorage.setItem(
      'seats',
      JSON.stringify({
        ...noOfSeats,
        [e.target.name]: Number(e.target.value),
      })
    );
  };

  return (
    <div className='form-check-label'>
      <span className='text'>{text}</span>
      <input
        type='number'
        className='seats-input'
        placeholder='0'
        max='30'
        min={0}
        name={text} // Make sure each input has the correct `name`
        onChange={change_seats}
        value={noOfSeats[text] || 0} // Fallback to 0 if noOfSeats[text] is undefined
      />
    </div>
  );
};

export default SeatInput;

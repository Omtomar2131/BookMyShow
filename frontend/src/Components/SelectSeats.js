import React, { useContext } from 'react';
import { seats } from '../data'; // assuming seats array is ['A1', 'A2', 'A3', 'A4', 'D1', 'D2']
import SeatInput from './SeatInput';
import '../Css/SelectSeats.css';
import BsContext from '../Context/BsContext';

const SelectSeats = () => {
  const { noOfSeat, changeNoOfSeats } = useContext(BsContext);

  return (
    <div className='SS_wrapper'>
      <h1 className='SS_heading'>Select Seats:</h1>
      <div className='SS_main_container'>
        {seats.map((el, index) => (
          <SeatInput
            key={index}
            text={el}
            noOfSeats={noOfSeat}
            changeNoOfSeats={changeNoOfSeats}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectSeats;

import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    const [movie, changeMovie] = useState('');
    const [time, changeTime] = useState('');
    const [noOfSeat, changeNoOfSeats] = useState({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
    });
    const [lastBookingDetails, setLastBookingDetails] = useState(null);
    const [errorPopup, setErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Post Booking function
    const handlePostBooking = async () => {
        try {
            const response = await fetch('https://bookmyshow-1-6a3q.onrender.com/api/booking', {
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    movie,
                    slot: time,
                    seats: noOfSeat,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setLastBookingDetails(data.data); // Update context with new booking details
                changeMovie(''); // Reset movie
                changeTime(''); // Reset time
                changeNoOfSeats({ A1: 0, A2: 0, A3: 0, A4: 0, D1: 0, D2: 0 }); // Reset seats
                window.localStorage.clear(); // Clear localStorage
            } else {
                setErrorPopup(true);
                setErrorMessage(data.message || 'Booking failed');
            }
        } catch (error) {
            setErrorPopup(true);
            setErrorMessage('Network error: ' + error.message);
        }
    };

    // Get Booking function
    const handleGetBooking = async () => {
        try {
            const response = await fetch('https://bookmyshow-1-6a3q.onrender.com/api/booking', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();

            if (response.ok) {
                setLastBookingDetails(data.data);
            } else {
                setErrorPopup(true);
                setErrorMessage(data.message || 'Failed to fetch booking details');
            }
        } catch (error) {
            setErrorPopup(true);
            setErrorMessage('Network error: ' + error.message);
        }
    };

    useEffect(() => {
        const movie = window.localStorage.getItem('movie');
        const slot = window.localStorage.getItem('slot');
        const seats = JSON.parse(window.localStorage.getItem('seats') || '{}');

        if (movie) changeMovie(movie);
        if (slot) changeTime(slot);
        if (seats) changeNoOfSeats(seats);

        // Optionally load the booking details if already present
        handleGetBooking(); // This could also be part of the useEffect for initial load
    }, []);

    return (
        <BsContext.Provider
            value={{
                movie,
                changeMovie,
                time,
                changeTime,
                noOfSeat,
                changeNoOfSeats,
                lastBookingDetails,
                handlePostBooking,
                handleGetBooking,
                errorPopup,
                setErrorPopup,
                errorMessage,
                setErrorMessage,
            }}
        >
            {props.children}
        </BsContext.Provider>
    );
};

export default BsState;

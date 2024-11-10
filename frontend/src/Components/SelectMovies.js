import React, {  useContext } from 'react';
import { moviesList } from '../data';
import RadioComponents from './RadioComponents';
import '../Css/SelectMovie.css';
import BsContext from '../Context/BsContext';

const SelectMovies = () => {
    const context = useContext(BsContext); // Corrected syntax here
    const { movie, changeMovie } = context;

    const handleChangeMovie = (val) => { // Corrected arrow function syntax here
        changeMovie(val);
        window.localStorage.setItem('movie', val);
    };

    return (
        <div>
            <h1 className='SM_heading'>Select A Movie:</h1>
            <div className='SM_main_container'>
                {moviesList.map((el, index) => (
                    <RadioComponents
                        text={el}
                        key={index}
                        data={movie}
                        changeSelection={handleChangeMovie}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectMovies;

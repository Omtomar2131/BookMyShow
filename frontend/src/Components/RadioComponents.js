import React from 'react';
import '../Css/RadioComponent.css';

const RadioComponents = ({ text, changeSelection, data }) => {
  const handleChecked = (val) => {
    changeSelection(val);
  };

  // Check if the current text matches the selected movie
  const isActive = data === text;

  return (
    <div
      className={`form-check-label ${isActive ? 'active' : ''}`} // Add 'active' class if the item is selected
      onClick={() => handleChecked(text)}
    >
      <span className={`text ${isActive ? 'active-text' : ''}`}>{text}</span>
    </div>
  );
};

export default RadioComponents;

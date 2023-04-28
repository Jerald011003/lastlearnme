import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown'
import './slideButton.css'

const SlideButton = ({ onClick, type }) => (
  <div className={`slide-buttons slide-buttons--${type}`}>
    <button className="slide-button slide-button--left" onClick={onClick}>
      <span>
        <IconArrowDown />
      </span>
    </button>
    <button className="slide-button slide-button--right" onClick={onClick}>
      <span>
        <IconArrowDown />
      </span>
    </button>
  </div>
);

export default SlideButton;

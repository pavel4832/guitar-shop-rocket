import React from 'react';
import PropTypes from 'prop-types';
import MyButton from '../my-button/my-button';
import MyInput from '../my-input/my-input';

const PriceButton = ({inputClass, ...props}) => {
  return (
    <div className={`${inputClass} price-control`}>
      <MyButton inputClass={`price-control__btn increase`}>
        <svg width="8" height="1" viewBox="0 0 8 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="0.5" y2="0.5" stroke="currentColor"/>
        </svg>
      </MyButton>
      <MyInput className="price-control__input my_input" {...props} />
      <MyButton inputClass={`price-control__btn decrease`}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="4.11816" y2="4.11816" stroke="currentColor"/>
          <line x1="3.8457" y1="8" x2="3.8457" stroke="currentColor"/>
        </svg>
      </MyButton>
    </div>
  );
};

PriceButton.propTypes = {
  inputClass: PropTypes.string.isRequired,
};

export default PriceButton;

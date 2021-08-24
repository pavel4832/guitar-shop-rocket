import React from 'react';
import PropTypes from "prop-types";

const MyInput = ({inputClass, ...props}) => {
  return (
    <input className={`${inputClass} my_button`} {...props}/>
  );
};

MyInput.propTypes = {
  inputClass: PropTypes.string.isRequired,
};

export default MyInput;

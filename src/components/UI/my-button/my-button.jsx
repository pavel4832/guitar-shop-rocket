import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({inputClass, children, ...props}) => {
  return (
    <button {...props} className={`${inputClass} my_button`} type="button">
      {children}
    </button>
  );
};

MyButton.propTypes = {
  inputClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MyButton;

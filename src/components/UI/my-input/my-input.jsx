import React from 'react';
import PropTypes from 'prop-types';

const MyInput = React.forwardRef((props, ref) => {
  const {inputClass} = props;
  return (
    <input ref={ref} className={`${inputClass} my_input`} {...props}/>
  );
});

MyInput.propTypes = {
  inputClass: PropTypes.string.isRequired,
};

MyInput.displayName = `MyInput`;

export default MyInput;

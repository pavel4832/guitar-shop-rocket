import React from 'react';
import PropTypes from 'prop-types';

const MyCheckbox = ({id, children, ...props}) => {
  return (
    <div className="filter__checkbox">
      <input {...props} id={id} className="filter__input my_checkbox visually-hidden" type="checkbox" />
      <label htmlFor={id} className="filter__label">
        {children}
      </label>
    </div>
  );
};

MyCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default MyCheckbox;

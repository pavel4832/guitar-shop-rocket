import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadCrumbs = (props) => {
  const {name} = props;

  return (
    <div className={`${name}__breadcrumbs breadcrumbs`}>
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Каталог</Link>
        </li>
        <li className="breadcrumbs__item">
          <p className="breadcrumbs__text">Оформляем</p>
        </li>
      </ul>
    </div>
  );
};

BreadCrumbs.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BreadCrumbs;

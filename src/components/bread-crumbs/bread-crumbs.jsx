import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setBasket} from '../../store/actions';
import PropTypes from 'prop-types';

const BreadCrumbs = (props) => {
  const {name} = props;
  const {onBasket} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  return (
    <div className={`${name}__breadcrumbs breadcrumbs`}>
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link" onClick={() => dispatch(setBasket(false))}>Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          {
            (onBasket) ? <Link to="/" className="breadcrumbs__link" onClick={() => dispatch(setBasket(false))}>Каталог</Link> : <p className="breadcrumbs__link">Каталог</p>
          }
        </li>
        {
          (onBasket) &&
          <li className="breadcrumbs__item">
            <p className="breadcrumbs__link">Оформляем</p>
          </li>
        }
      </ul>
    </div>
  );
};

BreadCrumbs.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BreadCrumbs;

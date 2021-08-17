import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const BreadCrumbs = () => {
  const {onBasket} = useSelector((state) => state.DATA);

  return (
    <div className="catalog__breadcrumbs breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/" className="breadcrumbs__link">Главная</Link>
        </li>
        <li className="breadcrumbs__item">
          {
            (onBasket) ? <Link to="/" className="breadcrumbs__link">Каталог</Link> : <p  className="breadcrumbs__link">Каталог</p>
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

export default BreadCrumbs;

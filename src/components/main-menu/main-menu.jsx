import React from 'react';
import {useDispatch} from 'react-redux';
import {AppRoute, MAIN_MENU} from '../../const';
import {setBasket} from '../../store/actions';
import {Link} from 'react-router-dom';

const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <nav className="header__menu main-menu">
      <ul className="main-menu__list">
        {MAIN_MENU.map((item, index) => (
          <li key={index} className="main-menu__item">
            <Link to={AppRoute[item.link]} className="main-menu__link link" onClick={() => dispatch(setBasket(false))}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

import React from 'react';
import {useDispatch} from 'react-redux';
import {MAIN_MENU} from '../../const';
import {setBasket} from '../../store/actions';

const MainMenu = () => {
  const dispatch = useDispatch();

  return (
    <nav className="header__menu main-menu">
      <ul className="main-menu__list">
        {MAIN_MENU.map((item) => (
          <li key={item} className="main-menu__item">
            <a className="main-menu__link link" onClick={dispatch(setBasket(false))}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

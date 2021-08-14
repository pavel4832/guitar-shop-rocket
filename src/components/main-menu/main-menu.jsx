import React from 'react';
import {MAIN_MENU} from '../../const';

const MainMenu = () => {
  return (
    <nav className="header__menu main-menu">
      <ul className="main-menu__list">
        {MAIN_MENU.map((item) => (
          <li key={item} className="main-menu__item">
            <a className="main-menu__link link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;

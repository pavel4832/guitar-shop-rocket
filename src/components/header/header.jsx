import React from 'react';
import Logo from '../logo/logo';
import MainMenu from "../main-menu/main-menu";
import SideMenu from "../side-menu/side-menu";

const Header = () => {
  return (
    <header className="page-header header">
      <div className="header__nav">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <MainMenu />
            <SideMenu />
          </div>
        </div>
      </div>
      <img src="./img/image-back.png" alt="картинка шапки" className="header__image" width="1079" height="282" />
    </header>
  );
};

export default Header;

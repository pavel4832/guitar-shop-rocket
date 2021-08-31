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
      <div className="header__image">
        <div className="header__line"></div>
        <div className="header__line"></div>
        <div className="header__line"></div>
        <div className="header__line"></div>
        <div className="header__line"></div>
        <div className="header__line"></div>
        <img src="./img/image_header.png" className="header__picture" alt="гитара" width="878" height="282"/>
      </div>
    </header>
  );
};

export default Header;

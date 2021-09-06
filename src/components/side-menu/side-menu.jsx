import React from 'react';
import {Link} from 'react-router-dom';
import BasketIcon from '../basket-icon/basket-icon';

const SideMenu = () => {
  return (
    <div className="header__side-bar side-menu">
      <Link to="/map" className="side-menu__link link" aria-label="Карта">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.875 19.3523C25.875 23.8068 19.875 27.625 19.875 27.625C19.875 27.625 13.875 23.8068 13.875 19.3523C13.875 17.8333 14.5071 16.3766 15.6324 15.3025C16.7576 14.2284 18.2837 13.625 19.875 13.625C21.4663 13.625 22.9924 14.2284 24.1176 15.3025C25.2429 16.3766 25.875 17.8333 25.875 19.3523Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.875 21.2615C20.9796 21.2615 21.875 20.4068 21.875 19.3524C21.875 18.2981 20.9796 17.4434 19.875 17.4434C18.7704 17.4434 17.875 18.2981 17.875 19.3524C17.875 20.4068 18.7704 21.2615 19.875 21.2615Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <Link to="/search" className="side-menu__link link" aria-label="Поиск">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.0276 22.0289L26.7934 25.7948C26.9257 25.9273 27.0001 26.1069 27 26.2942C26.9999 26.4814 26.9255 26.661 26.793 26.7934C26.6606 26.9257 26.481 27.0001 26.2937 27C26.1064 26.9999 25.9269 26.9255 25.7945 26.793L22.0287 23.0271C20.903 23.8991 19.4873 24.3094 18.0698 24.1746C16.6522 24.0399 15.3393 23.3701 14.398 22.3016C13.4567 21.2332 12.9578 19.8462 13.0028 18.423C13.0478 16.9997 13.6333 15.6471 14.6401 14.6402C15.647 13.6333 16.9996 13.0478 18.4229 13.0028C19.8461 12.9578 21.233 13.4567 22.3014 14.398C23.3699 15.3393 24.0396 16.6523 24.1743 18.0699C24.3091 19.4875 23.8988 20.9031 23.0269 22.0289H23.0276ZM18.6003 22.7996C19.7141 22.7996 20.7824 22.3571 21.57 21.5695C22.3576 20.7818 22.8001 19.7136 22.8001 18.5997C22.8001 17.4858 22.3576 16.4176 21.57 15.6299C20.7824 14.8423 19.7141 14.3998 18.6003 14.3998C17.4864 14.3998 16.4182 14.8423 15.6306 15.6299C14.8429 16.4176 14.4005 17.4858 14.4005 18.5997C14.4005 19.7136 14.8429 20.7818 15.6306 21.5695C16.4182 22.3571 17.4864 22.7996 18.6003 22.7996Z" fill="currentColor"/>
        </svg>
      </Link>
      <BasketIcon />
    </div>
  );
};

export default SideMenu;

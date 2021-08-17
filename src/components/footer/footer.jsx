import React from 'react';
import LogoFooter from '../logo-footer/logo-footer';
import SocialMenu from '../social-menu/social-menu';
import FooterContact from '../footer-contact/footer-contact';

const Footer = () => {
  return (
    <footer className="page__footer footer">
      <div className="footer__image">
        <div className="footer__line"></div>
      </div>
      <div className="footer__content">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__left">
              <LogoFooter />
              <SocialMenu />
            </div>
            <div className="footer__center">

            </div>
            <div className="footer__right">
              <FooterContact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const FooterContact = () => {
  return (
    <div className="footer__contact contact">
      <h3 className="footer__title">Контакты</h3>
      <p className="footer__text contact__text">г. Санкт-Петербург,</p>
      <p className="footer__text contact__text">м. Невский проспект,</p>
      <p className="footer__text contact__text">ул. Казанская 6.</p>
      <a href="tel:88125005050" className="footer__link contact__link">8-812-500-50-50</a>
      <p className="footer__text contact__text">Режим работы:</p>
      <p className="footer__text contact__text contact__text--time">с 11:00 до 20:00, </p>
      <p className="footer__text contact__text">без выходных.</p>
    </div>
  );
};

export default FooterContact;

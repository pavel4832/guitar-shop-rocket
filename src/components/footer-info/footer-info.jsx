import React from 'react';
import {Link} from 'react-router-dom';

const FooterInfo = () => {
  return (
    <div className="footer__info">
      <h3 className="footer__title">Информация</h3>
      <Link to={`/about`} className="footer__link">Где купить?</Link>
      <Link to={`/blog`} className="footer__link">Блог</Link>
      <Link to={`/faq`} className="footer__link">Вопрос - ответ</Link>
      <Link to={`/refund`} className="footer__link">Возврат</Link>
      <Link to={`/services`} className="footer__link">Сервис-центры</Link>
    </div>
  );
};

export default FooterInfo;

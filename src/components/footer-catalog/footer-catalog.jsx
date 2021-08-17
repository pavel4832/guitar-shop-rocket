import React from 'react';
import {Link} from 'react-router-dom';

const FooterCatalog = () => {
  return (
    <div className="footer__catalog">
      <h3 className="footer__title">Каталог</h3>
      <Link to={`/catalog/acoustic`} className="footer__link">Акустические гитары</Link>
      <Link to={`/catalog/classic`} className="footer__link">Классические гитары</Link>
      <Link to={`/catalog/electric`} className="footer__link">Электрогитары</Link>
      <Link to={`/catalog/bass`} className="footer__link">Бас-гитары</Link>
      <Link to={`/catalog/uku`} className="footer__link">Укулеле</Link>
    </div>
  );
};

export default FooterCatalog;

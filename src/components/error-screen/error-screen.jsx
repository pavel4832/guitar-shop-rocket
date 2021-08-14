import React from 'react';
import {Link} from 'react-router-dom';

const ErrorScreen = () => {
  return (
    <div className="page-error error">
      <div className="container">
        <div className="error__wrapper">
          <h1 className="error__text">404. Page not found</h1>
          <Link className="error__link" to="/">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;

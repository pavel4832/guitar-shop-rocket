import React from 'react';
import BreadCrumbs from '../bread-crumbs/bread-crumbs';
import BasketBoard from '../basket-board/basket-board';

const BasketScreen = () => {
  return (
    <main className="page__main">
      <section className="page__basket basket">
        <div className="container">
          <h1 className="page__title">Корзина</h1>
          <BreadCrumbs name={`basket`} />
          <BasketBoard />
        </div>
      </section>
    </main>
  );
};

export default BasketScreen;

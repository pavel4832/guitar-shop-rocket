import React from 'react';
import BreadCrumbs from '../bread-crumbs/bread-crumbs';
import BasketBoard from '../basket-board/basket-board';

const BasketScreen = () => {
  return (
    <main className="page-main main">
      <section className="main__basket basket">
        <div className="container">
          <h1 className="main__title">Корзина</h1>
          <BreadCrumbs name={`basket`} />
          <BasketBoard />
        </div>
      </section>
    </main>
  );
};

export default BasketScreen;

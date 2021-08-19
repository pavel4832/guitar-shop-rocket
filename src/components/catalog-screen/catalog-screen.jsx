import React from 'react';
import BreadCrumbs from '../bread-crumbs/bread-crumbs';
import Filter from '../filter/filter';
import CatalogBoard from '../catalog-board/catalog-board';

const CatalogScreen = () => {
  return (
    <main className="page__main">
      <section className="page__catalog catalog">
        <div className="container">
          <h1 className="page__title catalog__title">Каталог гитар</h1>
          <BreadCrumbs name={`catalog`} />
          <div className="catalog__wrapper">
            <Filter />
            <CatalogBoard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogScreen;

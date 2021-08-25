import React from 'react';
import BreadCrumbs from '../bread-crumbs/bread-crumbs';
import Filter from '../filter/filter';
import CatalogBoard from '../catalog-board/catalog-board';
import {getSortedArray} from '../../utils';
import {useSelector} from 'react-redux';

const CatalogScreen = () => {
  const {guitarList, sortType, sortDirection, filters} = useSelector((state) => state.DATA);
  const filteredAndSortedList = getSortedArray(guitarList, sortType, sortDirection, filters);

  return (
    <main className="page-main main">
      <section className="main__catalog catalog">
        <div className="container">
          <h1 className="main__title catalog__title">Каталог гитар</h1>
          <BreadCrumbs name={`catalog`} />
          <div className="catalog__wrapper">
            <Filter filteredAndSortedList={filteredAndSortedList} />
            <CatalogBoard filteredAndSortedList={filteredAndSortedList} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CatalogScreen;

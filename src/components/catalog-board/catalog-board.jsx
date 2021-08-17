import React from 'react';
import CatalogSort from "../catalog-sort/catalog-sort";
import CatalogList from "../catalog-list/catalog-list";

const CatalogBoard = () => {
  return (
    <div className="catalog__board">
      <CatalogSort />
      <CatalogList />
    </div>
  );
};

export default CatalogBoard;

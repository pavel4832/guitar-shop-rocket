import React from 'react';
import CatalogPagination from "../catalog-pagination/catalog-pagination";
import {useSelector} from "react-redux";
import CatalogCard from "../catalog-card/catalog-card";

const CatalogList = () => {
  const {guitarList} = useSelector((state) => state.DATA);

  return (
    <div className="catalog__list">
      <CatalogCard card={guitarList[0]} />
      <CatalogPagination />
    </div>
  );
};

export default CatalogList;

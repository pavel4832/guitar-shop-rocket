import React from 'react';
import {useSelector} from "react-redux";
import CatalogCard from "../catalog-card/catalog-card";
import PropTypes from "prop-types";
import {PAGE_LIMIT} from "../../const";

const CatalogList = (props) => {
  const {page} = props;
  const {guitarList} = useSelector((state) => state.DATA);
  const renderArray = guitarList.slice((page - 1) * PAGE_LIMIT, (page * PAGE_LIMIT));

  return (
    <div className="catalog__list">
      {renderArray.map((item) => (
        <CatalogCard key={item.id} card={item} />
      ))}
    </div>
  );
};

CatalogList.propTypes = {
  page: PropTypes.number.isRequired,
};

export default CatalogList;
